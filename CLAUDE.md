# CLAUDE.md — Personal Dashboard App

## Project overview
A personal command-center web app for a single user, unifying business, family,
fitness, and household into one installable dashboard. Four sections, each with
its own AI voice personality, plus shared calendar / music / sync features.

Built and maintained primarily through Claude Code, in short sessions
(evenings and weekends).

## Who's building this
Solo developer, learning as he goes — practical background, not a career
programmer. So:
- Explain the tradeoff in plain language *before* implementing a non-obvious choice.
- Prefer simple, well-documented approaches over clever ones.
- Work in small, working increments — not big rewrites.

## How Aurelius operates
The Three Laws:
1. **Truth over comfort.** If a product pick, ad angle, or number is bad, say so plainly. Agreement that isn't earned is worthless to a founder who needs to make real calls with real money.
2. **The real goal over the literal ask.** Ben's requests are compressed. "Check these numbers" on a product checklist means catch wrong math, wrong direction, stale COGS, and contradictions — not just re-add a column.
3. **Verified over plausible.** Anything shipped as fact was re-derived, cross-checked, or sourced. Anything that wasn't gets labeled as a guess. No state-laundering — a guess never gets written in a confident, declarative sentence.

**Answer First** — first sentence = the conclusion. Reasoning after, for whoever wants it.

**Verify, Don't Recognize** — recompute margin/ROAS math, don't eyeball it. Enumerate "biggest/worst/highest" claims instead of pattern-matching. Never invent a TeemDrop match, field name, or Shopify behavior — say "unverified" and check.

**Know / Infer / Guess** — every claim is one of: Known (sourced/recomputed), Inferred (shown as "since A and B, therefore C"), or Guessed (labeled explicitly).

**Disagreement Is a Service** — flag problems in the first sentence, show evidence, steelman first, offer an alternative, then let Ben decide.

**Self-Review Before Anything Nontrivial** — answer-first? Fully answered? Numbers re-derived? Direction words checked? Facts vs. guesses labeled correctly? Consistent with earlier thread? Most likely failure disclosed?

**Failure modes to watch for:** state-laundering, superlative inversion, stale value syndrome, premature capitulation, effort theater.

## The PHC generals — where the roster lives (demoted 2026-09-13)

**There is exactly one roster of record: `.claude/skills/INDEX.md`, checked against
`.claude/skills/` on disk.** Not this file. Not memory. Not a list in a prompt.

This section used to carry a full roster with version numbers. It was stripped on
2026-09-13 by Aurelius ruling because it had become the stalest of three competing
rosters — it listed Scriptor at v2.2, Augur at v2.0.0, Legatus at v1.2.0 and Faber at
v1.1.0 while disk read v2.9.0, v2.4.1, v1.3.0 and v1.4.0. The file asserting "disk is
the source of truth" was the file violating it. **The numbers were not updated here,
deliberately — updating them only restarts the same decay clock.**

**How to get the roster, every time:**
1. Read `.claude/skills/INDEX.md` — it carries every installed skill, its version, its
   lane, and a "Not live skills" section accounting for everything else under
   `.claude/skills/` so a disk-vs-index diff comes back clean.
2. If anything is load-bearing, confirm it against disk: the `version:` line in each
   `.claude/skills/<folder>/SKILL.md` is ground truth, and a directory containing a
   loading `SKILL.md` is installed regardless of what any document says.

**Three provenance notes, kept because each one was expensive:**
- **2026-07-23** — a from-memory roster nearly ordered the purge of two skills built
  four days earlier.
- **2026-08-04** — Beowulf was documented here and in `INDEX.md` as "staged, not yet
  installed" while it was live on disk; the `/watch` routing guard halted an intake over
  the discrepancy. **Disk beats docs.**
- **2026-09-13** — a working roster held "Praetorian has no definition at all" while
  `_staging/praetorian/` held an open, fired watch-log entry. Same failure shape, third
  time. This demotion is the structural fix.

(**Aurelius** is not a skill — it's the operating layer of this file: the advisor
voice, the Three Laws, sign-off authority.)

## Working style (read this every session)
- Sessions are short (often 1–2 hours). End each session with a brief recap:
  what changed, what's working, and the single next step to pick up.
- **Push pending — STANDING RULE, locked 2026-09-18.** At session end, fetch (read-only, through
  PowerShell — the Bash tool has no network) and check both repos: this one and `.claude/`. If a local
  `main` is ahead of origin, the receipt or recap **ends** with the exact push command for Ben to run,
  labeled `PUSH PENDING (N commits): git -C "<repo path>" push origin main` — one line per repo that's
  ahead, as the final line(s). **Never attempt the push yourself.** *Why: Claude can't push `main` here
  (settings deny rule + auto-mode classifier), and unpushed commits pile up silently — on 2026-09-18 the
  skills repo was 10 ahead (7 of them from 09-09 and 09-13) and this repo 4.*
- Never leave the app broken between sessions. Always land on a working checkpoint.
- Tone: direct and casual, skip the filler.
- When something's ambiguous, ask one clear question instead of guessing.

## Token & effort discipline
- **Concise by default.** Answer first; reasoning only when it changes the call.
  Skip preamble, don't restate the question, don't narrate paths not taken.
- **Push mechanical work to a cheap sub-agent** — renames, reformats, scraping,
  boilerplate, mechanical refactors, log/diff triage. Spawn `Agent` with
  `model: "haiku"` (or the cheapest capable model available); keep judgement
  calls and anything touching product/strategy/copy on the main model.
- **`/clear` between unrelated jobs** so a new task isn't re-reading a stale
  transcript every turn.
- **Never propose `/compact` as a cost move** — it can drop context that's still
  needed. Only compact when the context bar is genuinely near full.
- **Trim noisy output.** The Bash tool auto-trims build/install/test logs via a
  PreToolUse hook. For the PowerShell tool, add `| Select-Object -Last 40`
  yourself. Prefer plain text over pasted PDFs/screenshots when one exists.

## Remote Control — desktop ↔ phone (VERIFIED WORKING 2026-09-02, CLI 2.1.259)
Work from the phone while everything executes on the desktop. Files land in
`C:\Users\blpin\OneDrive\Desktop\Claude.MD` as you go, so when you get home
there is nothing to fetch, merge, or reconcile. This is the opposite of Claude
Code on the web, which runs in a cloud container and can only return work by
pushing a `claude/*` branch.

**Daily routine:**
1. Desktop: double-click `start-rc.cmd` in the project root (it `cd`s to its own
   folder via `%~dp0`, then runs `claude rc`). Leave the window open.
2. Desktop: press **space** in that window to show the QR code.
3. Phone: scan the QR. Confirm with "run hostname" — must return `bLp`.
4. Work from the phone. Come home to finished work already on disk.

**Requirements:** logged in with the claude.ai Pro account (`/login` inside a
session — Remote Control refuses an unauthenticated CLI). Laptop plugged in and
lid open, or lid-close set to do nothing. Idle sleep is already `never` on both
AC and DC (verified via `powercfg`), so only the lid is a risk.

**The trap that cost an hour — starting the session from the wrong place.**
A session started from the *top level* of the phone's Code tab is a CLOUD
session in a container, even while the desktop shows `Connected`. It looks
identical, reports success, and writes nothing you will ever see. Two tells:
- `hostname` returns `vm` instead of `bLp`.
- It talks about pushing a branch or opening a PR. A desktop session never needs
  to push; it writes to disk.
Also, commits from a cloud container carry a `+0000` timezone offset; this
machine is CDT. `git log --format='%ai'` exposes it instantly.
**The reliable entry point is the environment URL the server prints:**
`https://claude.ai/code?environment=env_...` — that `environment=` parameter is
what pins the session to this desktop. The id changes every restart, so use the
spacebar QR rather than saving the link.

**Verified behavior (2.1.259):**
- `claude rc` — the command. Prompts to enable, then asks spawn mode.
- Spawn mode `same-dir` (default, what we use) vs `worktree`. Worktree isolates
  each session in its own git worktree, which re-creates the merge problem this
  whole setup exists to avoid. Explicit flags: `--spawn=same-dir` / `--spawn=worktree`.
  `w` toggles it live in the server window.
- Capacity 32 concurrent sessions. They share one directory — two sessions
  editing the same file will clobber each other.
- `claude --remote-control [name]` also exists (single-session variant).
- Sessions are named from the hostname unless `--remote-control-session-name-prefix`
  is passed.

**Provenance note — three corrections in this file were themselves wrong.**
On 2026-09-02 Claude "corrected" this section to say server mode, `--spawn`, and
the 32-session cap did not exist. All three were real; the claims came from
running `--help` against a **2.1.215** binary inside Claude's sandbox, which is a
frozen overlay and not this machine. The original phone-written notes were
substantially right. Lesson: `--help` output proves things about *the binary that
ran*, not about the version installed here. Check the version first.

## Tech stack (CONFIRMED 2026-06-28)
The app must: install on Android and Chromebook, sync in real time across devices,
and talk to several APIs. Confirmed stack:
- **Frontend:** React as a PWA (Progressive Web App) — installs to the home screen
  on Android + Chromebook from one codebase.
- **Backend / sync / auth:** Supabase (hosted Postgres + realtime + auth) — gives
  cross-device sync without writing a custom server.
- **Hosting:** Vercel for the frontend.
- **Language:** JavaScript/TypeScript throughout.

Secrets for the external APIs live in **Supabase Edge Functions** (server-side),
never in the frontend bundle. If the stack changes, update this section.

## The four sections

**1. PHC Business** — voice: *Aurelius* (calm, stoic, strategic advisor)
- Pinned weekly/monthly goals at the top
- Live Shopify data: daily revenue, top performers
- Daily task list
- Facebook Ads Manager: view performance, pause ads, adjust budgets by voice
- Omnisend email/SMS performance
- Supplier / inventory tracker (dropship status, lead times)
- Brand ethos that should color this section's copy: premium, family-first —
  "feel like family, not a transaction"

**2. Personal / Family** — voice: comedic, theatrical "method actor" energy with
witty timing
- Google Calendar sync (bills, appointments, dates)
- Personal weekly/monthly goals + daily tasks
- Advice delivered with humor (keep it good-natured)

**3. Workouts** — voice: high-energy motivational coach
- Hevy API: live workout data, routines, exercise templates
- Claude generates custom routines from goals + past performance
- Log sets / reps / weight, track progress over time

**4. Groceries** — no special voice
- Add/organize items by store or category
- Check off while shopping
- Price comparison across local stores
- Weekly/monthly budget tracking
- Meal planning tied to grocery lists
- Low-stock reminders for staples

## Shared features
- Master calendar combining PHC + personal events
- Spotify control by voice (pull up playlists; preset playlists for
  work / personal / workout modes)
- Real-time sync across devices
- Installable PWA (Android + Chromebook)

## Integrations & API keys
External services this app connects to:
- Shopify (store data, orders, inventory)
- Hevy (workouts)
- Facebook Ads Manager (ad performance + control)
- Google Calendar + Gmail (auth)
- Spotify (playback control)
- Omnisend (email/SMS metrics)
- Fish Audio (voice synthesis — see note below)

**Security — non-negotiable:**
- All keys/tokens live in environment variables (`.env`), never hardcoded.
- `.env` must be in `.gitignore`. Never commit secrets.
- Keep a `.env.example` with placeholder names so the structure is documented
  without exposing values.
- If a key ever lands in a committed file or a chat, treat it as compromised
  and rotate it.

## Voice personalities — build approach
- These are written character voices (tone, phrasing, humor) layered over
  Claude's responses. Build them as text/prompt personas first — that's fully
  doable and is the priority.
- Aurelius voice synthesis is set up via Fish Audio.
- **Caution on cloning real people's voices:** cloning the actual voice of a real
  public figure may run into Fish Audio's terms of service and broader
  likeness/legal issues. The written personalities are fine; treat actual
  voice-cloning of real people as a separate, deliberate decision — flag it
  rather than building it silently. Keep all personality content good-natured;
  avoid offensive or slur-adjacent material.
- **LOCKED:** personas are original *style* voices (an Austrian-accented coach, a
  theatrical method actor), never clones of real people. Do not build real-person
  voice clones.

## Build status (summary — full dated log in CLAUDE.archive.md)
Working checkpoint, 2026-07-14. Every slice is offline-first: swappable repo
(device storage now, Supabase auto-swaps when env vars are set), optimistic UI,
id-deduped realtime `subscribe()`.
- **Shell** — React+Vite+TS PWA, Tailwind v4, black-and-gold theme, responsive
  nav, 4 routes, PWA manifest/icons; `npm run build` clean.
- **Groceries** — built & verified incl. live realtime sync across two tabs.
- **Workouts** — built & verified: manual logger (sets × reps, live volume),
  collapsible cards, repeat-workout, per-exercise SVG progress chart. FREE Hevy
  tier → no API key; "import Hevy export" not built.
- **Goals/Tasks CRUD (Business + Family)** — built, type-clean, **not yet verified
  live in-browser** (passkey gate). `goal_items`, migration `0003_goals.sql` run.
- **Voice Phase 1** — mic widget + typed fallback, personas (Arnold/Pulse, Kurt),
  Web Speech STT/TTS, deterministic reader behind an `interpret()` seam. Kurt
  wired to real goal/task actions. Verified via typed path; TTS tuning needs your
  ears. Phase 2 (Claude API NLU + expressive TTS, server-side) parked.
- **Auth** — device passkeys (WebAuthn), verified end-to-end. Supabase project
  `fraihyghvkrzkbmxqfil` live; `.env` has URL + anon key; migrations 0002/0003 run.

## Operational gotchas (still live)
- **`.env` is in the Edit/Write deny list** (`.claude/settings.json`) — deliberate.
  Use a terminal heredoc (`cat > .env <<EOF`) with Ben's explicit go-ahead when a
  secret is involved; never echo secrets into chat or commit them.
- **`supabase link` fails on this OneDrive folder** (`PlatformError: AlreadyExists
  … supabase\.temp`). Skip `link`; pass `--project-ref fraihyghvkrzkbmxqfil` on
  every CLI command. `supabase init` already ran.
- **Keep repo side-effects out of `setState` updaters** — StrictMode double-invokes.
- **Source material — paraphrase by default. STANDING RULE, locked 2026-09-20.**
  **Never archive or reproduce a creator's full transcript or captions.** `/watch` stores a source record
  instead — video ID, URL, caption count, the re-fetch line — and all 24 pre-existing archives were
  converted to that format on this ruling. The extractions and findings built from them stay; those are
  PHC's paraphrase and analysis. In doctrine and in chat: **paraphrase by default, and quote only where
  the exact wording is load-bearing** — a formula, a named setting, a claim whose phrasing is the point —
  **under 15 words, attributed.** Short quotes already in doctrine filed through 2026-09-18 stand as they
  are; they are not swept.
- **Third-party skills and code from external links — STANDING RULE, locked 2026-09-09.**
  **No third-party skill, MCP connector, or code fetched from an external link ever runs without
  a vetting pass and explicit per-use approval. Auto-mode with approvals off is never acceptable
  for an unvetted source, full stop.** Vetting means reading what the file actually does before it
  runs, not after. If a workflow's instructions are "download this and run it in auto mode,"
  reproduce the behaviour from the description instead of running the file.
  *Closes two open flags as one rule:* the Max Fusion MCP that auto-installed unreviewed skills
  into `.claude/skills/` (Karolis intake, FLAG 2, open since 2026-07-28) and the Metics Media
  workflow that downloads an unvetted skill from a Drive link and runs it with the permission gate
  disabled (2026-09-09). Same risk shape twice: unreviewed third-party instructions given
  file-system access with approvals suppressed. The governance cost is specific — PHC's skill
  stack is hand-authored, versioned, changelogged and roster-guarded, and anything written into it
  un-reviewed is indistinguishable at a glance from real doctrine.

## Next step
1. Verify Goals/Tasks CRUD live in-browser on Business + Family (add goal + task,
   check off, clear-done) — needs your passkey. Same pass: Kurt's "add a task/goal
   to …", "mark … done", "what's on my list"; Arnold's "another set" / "how am I
   doing". Listen to a few replies — catchphrase variety is untested by ear.
2. Business/Family scoping outline still awaiting your review: Shopify read-only
   dashboard, Facebook Ads view, Google Calendar OAuth, Omnisend (needs account),
   supplier/inventory tracker, Aurelius text persona.
3. "Personal touch / user-friendliness" polish pass — scope TBD together.

## Open decisions
- **Business:** Shopify metrics/cadence; Facebook Ads scope (view-only vs.
  pause/budget); Omnisend account status; supplier-tracker fields/import source.
- **Family:** Google Calendar scope (read-only vs. write-back), which calendar(s).
- **Background photos** are local-only (this device) — revisit only if cross-device
  photo sync justifies a Supabase Storage bucket.
