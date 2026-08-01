#!/usr/bin/env bash
#
# SessionStart bootstrap for the /watch video skill.
#
# WHY THIS FILE LIVES HERE (repo root scripts/, not .claude/scripts/):
#   .gitignore ignores `.claude/*` with a short allowlist (settings.json,
#   settings.local.json, launch.json). Anything under .claude/scripts/ can
#   never be committed, so a cloud session's fresh clone would never see it.
#   The SessionStart hook in .claude/settings.json probes both paths; this is
#   the one git will actually carry.
#
# WHAT IT DOES
#   1. Materializes skills/watch from the claude-video marketplace repo into
#      .claude/skills/watch (also gitignored, hence created at runtime).
#   2. Installs ffmpeg and yt-dlp if they are missing.
#   3. Prints a PASS/FAIL status line.
#
# IDEMPOTENCE
#   The fast path is three existence checks and no network: if the skill stamp
#   file and both binaries are present, it prints one PASS line and exits.
#   Desktop sessions that already have everything finish in well under a second.
#
# EXIT CODE
#   Always 0. A failed bootstrap reports FAIL on stdout but must never block the
#   session from starting — a broken /watch is an inconvenience, a hook that
#   aborts SessionStart is not.
#
# USAGE
#   mobile-session-init.sh            bootstrap, then report
#   mobile-session-init.sh --check    report only, change nothing
#   mobile-session-init.sh --force    re-fetch the skill even if present

# Deliberately not `set -e`: every step reports its own PASS/FAIL and we want
# the report printed even when an earlier step failed.
set -uo pipefail

MARKETPLACE_URL="https://github.com/bradautomates/claude-video"
CLONE_TIMEOUT=120
APT_TIMEOUT=420
PIP_TIMEOUT=300

REPO_DIR="${CLAUDE_PROJECT_DIR:-$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)}"
SKILL_DIR="$REPO_DIR/.claude/skills/watch"
STAMP_FILE="$SKILL_DIR/.bootstrap-rev"
CACHE_DIR="${XDG_CACHE_HOME:-$HOME/.cache}/claude-video"
LOG_FILE="${TMPDIR:-/tmp}/watch-bootstrap.log"

MODE="bootstrap"
case "${1:-}" in
  --check) MODE="check" ;;
  --force) MODE="force" ;;
  "") ;;
  *) echo "/watch: FAIL — unknown argument '$1' (expected --check or --force)"; exit 0 ;;
esac

STATUS_LINES=()
FAILED=0

have() { command -v "$1" >/dev/null 2>&1; }
note() { STATUS_LINES+=("$1"); }
fail() { STATUS_LINES+=("$1"); FAILED=1; }

# `IFS=', '` would join on the comma alone — ${arr[*]} only uses IFS's first
# character — so join explicitly instead.
join_status() {
  local out="" line
  for line in "${STATUS_LINES[@]}"; do
    [[ -n "$out" ]] && out+="; "
    out+="$line"
  done
  printf '%s' "$out"
}

# Run apt-get as root directly, or via passwordless sudo, or not at all. Never
# prompts for a password — a SessionStart hook has nobody to prompt.
apt_install() {
  local pkg="$1"
  export DEBIAN_FRONTEND=noninteractive
  local runner=()
  if [[ "$(id -u)" == "0" ]]; then
    runner=(apt-get)
  elif have sudo && sudo -n true >/dev/null 2>&1; then
    runner=(sudo apt-get)
  else
    return 3
  fi

  # Try the install first; only refresh the package index if it fails, since a
  # stale index is the common cause and `apt-get update` is the slow part.
  if timeout "$APT_TIMEOUT" "${runner[@]}" install -y -qq "$pkg" >>"$LOG_FILE" 2>&1; then
    return 0
  fi
  timeout "$APT_TIMEOUT" "${runner[@]}" update -qq >>"$LOG_FILE" 2>&1
  timeout "$APT_TIMEOUT" "${runner[@]}" install -y -qq "$pkg" >>"$LOG_FILE" 2>&1
}

ensure_ffmpeg() {
  if have ffmpeg; then
    note "ffmpeg $(ffmpeg -version 2>/dev/null | head -1 | awk '{print $3}')"
    return
  fi
  if [[ "$MODE" == "check" ]]; then
    fail "ffmpeg MISSING"
    return
  fi
  if ! have apt-get; then
    fail "ffmpeg MISSING (no apt-get; install it manually — brew install ffmpeg, or your platform's package manager)"
    return
  fi
  if apt_install ffmpeg && have ffmpeg; then
    note "ffmpeg $(ffmpeg -version 2>/dev/null | head -1 | awk '{print $3}') (installed)"
  else
    fail "ffmpeg MISSING (apt-get install ffmpeg failed — see $LOG_FILE)"
  fi
}

ensure_ytdlp() {
  if have yt-dlp; then
    note "yt-dlp $(yt-dlp --version 2>/dev/null | head -1)"
    return
  fi
  if [[ "$MODE" == "check" ]]; then
    fail "yt-dlp MISSING"
    return
  fi

  local pip=""
  have pip3 && pip="pip3"
  [[ -z "$pip" ]] && have pip && pip="pip"

  # Installer order is about WHERE the binary lands, not speed. As root, pip
  # puts yt-dlp in /usr/local/bin, which is on the default PATH; `uv tool
  # install` puts it in ~/.local/bin, which is NOT — a subprocess started with a
  # sanitized environment would then fail to find it. So pip-as-root first, uv
  # second, pip --user last. --break-system-packages is required on PEP 668
  # distros (Ubuntu 24.04 here).
  if [[ -n "$pip" && "$(id -u)" == "0" ]] &&
     timeout "$PIP_TIMEOUT" "$pip" install --quiet --break-system-packages yt-dlp >>"$LOG_FILE" 2>&1 && have yt-dlp; then
    note "yt-dlp $(yt-dlp --version 2>/dev/null | head -1) (installed via $pip)"
  elif have uv && timeout "$PIP_TIMEOUT" uv tool install -q yt-dlp >>"$LOG_FILE" 2>&1 && have yt-dlp; then
    note "yt-dlp $(yt-dlp --version 2>/dev/null | head -1) (installed via uv)"
  elif [[ -n "$pip" ]] &&
       timeout "$PIP_TIMEOUT" "$pip" install --quiet --user yt-dlp >>"$LOG_FILE" 2>&1 && have yt-dlp; then
    note "yt-dlp $(yt-dlp --version 2>/dev/null | head -1) (installed via $pip --user)"
  elif [[ -z "$pip" ]] && ! have uv; then
    fail "yt-dlp MISSING (no pip or uv available to install it)"
    return
  else
    fail "yt-dlp MISSING (install failed — see $LOG_FILE)"
    return
  fi

  # Warn if it only resolves through a PATH entry the default environment lacks.
  local ytdlp_dir
  ytdlp_dir="$(dirname "$(command -v yt-dlp)")"
  case ":/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:" in
    *":$ytdlp_dir:"*) ;;
    *) note "NOTE yt-dlp is in $ytdlp_dir — keep that on PATH" ;;
  esac
}

ensure_skill() {
  if [[ -f "$STAMP_FILE" && -f "$SKILL_DIR/SKILL.md" && "$MODE" != "force" ]]; then
    note "skill $(cat "$STAMP_FILE" 2>/dev/null | head -1)"
    return
  fi
  if [[ "$MODE" == "check" ]]; then
    fail "skill MISSING (.claude/skills/watch not materialized)"
    return
  fi
  if ! have git; then
    fail "skill MISSING (git not available to clone $MARKETPLACE_URL)"
    return
  fi

  if [[ -d "$CACHE_DIR/.git" ]]; then
    timeout "$CLONE_TIMEOUT" git -C "$CACHE_DIR" fetch --depth 1 -q origin HEAD >>"$LOG_FILE" 2>&1 &&
      timeout "$CLONE_TIMEOUT" git -C "$CACHE_DIR" checkout -q FETCH_HEAD >>"$LOG_FILE" 2>&1
  else
    mkdir -p "$(dirname "$CACHE_DIR")"
    timeout "$CLONE_TIMEOUT" git clone --depth 1 -q "$MARKETPLACE_URL" "$CACHE_DIR" >>"$LOG_FILE" 2>&1
  fi

  if [[ ! -f "$CACHE_DIR/skills/watch/SKILL.md" ]]; then
    fail "skill MISSING (could not fetch $MARKETPLACE_URL — see $LOG_FILE)"
    return
  fi

  mkdir -p "$SKILL_DIR"
  if ! cp -R "$CACHE_DIR/skills/watch/." "$SKILL_DIR/" >>"$LOG_FILE" 2>&1; then
    fail "skill MISSING (copy into $SKILL_DIR failed — see $LOG_FILE)"
    return
  fi
  chmod +x "$SKILL_DIR"/scripts/*.py "$SKILL_DIR"/scripts/*.sh 2>/dev/null

  local rev version
  rev="$(timeout 10 git -C "$CACHE_DIR" rev-parse --short HEAD 2>/dev/null || echo unknown)"
  version="$(awk -F'"' '/^version:/ {print $2; exit}' "$SKILL_DIR/SKILL.md" 2>/dev/null)"
  printf 'v%s @ %s\n' "${version:-?}" "$rev" >"$STAMP_FILE"
  note "skill v${version:-?} @ $rev (installed)"
}

# --- fast path -------------------------------------------------------------
# No network, no package managers: if everything is already in place, say so
# and get out of the way.
if [[ "$MODE" == "bootstrap" && -f "$STAMP_FILE" && -f "$SKILL_DIR/SKILL.md" ]] && have ffmpeg && have yt-dlp; then
  echo "/watch: PASS — skill $(cat "$STAMP_FILE" 2>/dev/null | head -1), ffmpeg, yt-dlp all present"
  exit 0
fi

: >"$LOG_FILE" 2>/dev/null
ensure_skill
ensure_ffmpeg
ensure_ytdlp

# Whisper is only the fallback for videos with no native captions, so a missing
# key is informational, not a failure.
WHISPER_NOTE=""
if [[ -z "${GROQ_API_KEY:-}${OPENAI_API_KEY:-}" ]] && ! grep -qs -E '^[[:space:]]*(GROQ|OPENAI)_API_KEY[[:space:]]*=' "$HOME/.config/watch/.env"; then
  WHISPER_NOTE=" (captions only — set GROQ_API_KEY or OPENAI_API_KEY in ~/.config/watch/.env for Whisper fallback)"
fi

if [[ "$FAILED" == "0" ]]; then
  echo "/watch: PASS — $(join_status)${WHISPER_NOTE}"
else
  echo "/watch: FAIL — $(join_status)"
fi

exit 0
