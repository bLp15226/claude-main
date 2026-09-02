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

## The PHC generals — roster of record (added 2026-07-23)

**Disk is the source of truth: `.claude/skills/` + `.claude/skills/INDEX.md`.** Any
roster stated from memory — Ben's or Aurelius's — is advisory and must be checked
against disk before acting on it. (Provenance: on 2026-07-23 a from-memory roster
nearly ordered the purge of two installed skills built four days earlier.)

**Built and installed** (folder · owns · built):
- **Scriptor** — `.claude/skills/scriptor/` — all customer-facing sales copy; the doctrine stack lives in its references/ — pre-2026-07-03 (v2.2 as of 07-23)
- **Augur** — `.claude/skills/augur-research/` — customer research, avatars, congregation maps — 2026-07-03 (v2.0.0 07-19)
- **Herald** — `.claude/skills/herald-social/` — organic social, three locked pillars — 2026-07-03
- **Legatus** — `.claude/skills/legatus-meta-ads/` — attended Meta Ads diagnosis + media buying; owns shared definitions (king goal, winner/potential, promo exclusion) — 2026-07-03 (v1.2.0 07-19)
- **Centurion** — `.claude/skills/centurion-store-health/` — store health, checkout integrity — 2026-07-03
- **Faber** — `.claude/skills/faber-creative-flywheel/` — the performance→creative flywheel: briefs off Legatus's winners/potentials, bloat guard, no fabricated proof — 2026-07-19 (v1.1.0)
- **Vigil** — `.claude/skills/vigil-ads-monitor/` — unattended scheduled ad-account monitoring; reports, never diagnoses or mutates — 2026-07-19
- **Beowulf** — `.claude/skills/beowulf-product-scouting/` — product scouting/validation before a
  product gets a store slot or ad budget; three-box test, free organic demand evidence, 3x landed-cost
  check, TEST/KILL/PARK verdicts — **corrected 2026-08-04: this is installed and live.** It was listed
  as "staged, not yet installed" here and in `INDEX.md` until the `/watch` routing guard halted an
  intake over the discrepancy. Disk beats docs — a directory with a loading `SKILL.md` is installed.

**Build tools, not generals** (no Roman rank, no persona): `video-to-hat` (07-19),
`shopify-theme-editor` (07-03), the `/watch` intake command (07-23).

**Staged / named but unbuilt:**
- **Artifex** — creative production — unbuilt; *retirement recommended 2026-07-23
  (scope largely absorbed by Faber), Ben to rule*
- **Praetorian** — account hygiene / ban-risk guard — unbuilt

**Sketched only:**
- **Censor** — analytics/measurement ledger — gated on 60 days of live data; lane
  overlaps Vigil, scope narrowing under review 2026-07-23
- **Vesta** — customer care (charter: karbo doctrine §2.7)
- **Quaestor** — finance, pricing math, CAC/LTV
- **Praefectus** — named by Ben; no lane documented in the repo yet

(**Aurelius** is not a skill — it's the operating layer of this file: the advisor
voice, the Three Laws, sign-off authority.)

## Working style (read this every session)
- Sessions are short (often 1–2 hours). End each session with a brief recap:
  what changed, what's working, and the single next step to pick up.
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

## Remote Control — desktop ↔ phone (added 2026-09-02, corrected same day)
Drive a Claude Code session running on the desktop from the Claude phone app.
Claude keeps running locally the whole time — local filesystem, MCP servers,
`.env`, the Supabase CLI all stay on the desktop; the phone is just a window
into it. **Not file sync:** there's no copy of the repo on the phone and nothing
flows back. That's the point — the work never leaves the desktop, so there's
nothing to merge when you get home. The opposite of Claude Code on the web,
which runs in a throwaway cloud container and can only return work over git.

**Start it** — a *terminal* command, run from the project directory. It starts a
session; typed at a Claude prompt it's just a message to Claude.
- `claude --remote-control [name]` — **verified** in CLI 2.1.215. Interactive
  session that's also reachable from the phone.
- `--remote-control-session-name-prefix <prefix>` — verified; defaults to hostname.
- `--permission-mode acceptEdits` — verified general flag. Worth adding so the
  phone isn't a wall of allow-prompts.
- `/remote-control` (or `/rc`) to hand off a session already running —
  **unverified**; can't be checked from inside a session. Try before relying on it.

**Connect:** scan the QR, or Claude app → **Code** tab → pick the session
(computer icon + green dot = online). Unverified — carried from the first draft.

**Corrections — three claims in the first draft of this section were wrong.**
It was written by a Claude Code *web* session, which runs in a cloud container
and could not test any of them against this machine. Checked against the
installed CLI (2.1.215) on 2026-09-02:
- **`claude remote-control` server mode does not exist.** There's no such
  subcommand; the full list is agents, auth, auto-mode, doctor, gateway,
  install, mcp, plugin, project, setup-token, ultrareview, update. Only the
  `--remote-control` *flag* is real. The "server sessions survive Ctrl+C for
  ~4 hours" note went with it and is void.
- **`--spawn worktree` does not exist.** There's no `--spawn` flag at all.
- **Auto-connect is NOT on.** `remoteControlAtStartup` is in neither
  `C:\Users\blpin\.claude\settings.json` nor `~/.claude.json` (which holds only
  `remoteControlUpsellSeenCount` / `remoteControlSurfacesSeen` — "prompt seen"
  counters, not the setting). Pass the flag explicitly.

**Lesson:** a web session can't verify anything about this machine. Treat its
claims about local config, installed versions, and CLI surface as hypotheses
until checked on the desktop.

**Gotchas:**
- The local process must stay alive. Close the terminal, or let the desktop
  sleep, and the session goes offline within seconds.
- Project/local settings (`.claude/settings.json`, `.claude/settings.local.json`)
  *ignore* a `true` for `remoteControlAtStartup` — by design, so a checked-in
  file can't switch Remote Control on for everyone who opens the repo. They only
  honor a `false`. Don't "fix" this by committing the setting; it's a silent
  no-op that looks like it worked.
- Checked 2026-09-02: neither settings file sets `DISABLE_TELEMETRY` /
  `DO_NOT_TRACK` / `CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC` /
  `DISABLE_GROWTHBOOK` — each silently disables the feature-flag evaluation
  Remote Control depends on, and is the usual reason it won't turn on.
- `/plugin` and `/resume` are terminal-only; they don't work from the phone.
- **Transcripts sync to Anthropic servers** while connected. Execution and file
  access stay local, the conversation does not — don't paste keys (anon key,
  service-role key, CLI tokens) into a remote session.
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
