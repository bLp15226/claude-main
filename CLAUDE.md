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

**Build tools, not generals** (no Roman rank, no persona): `video-to-hat` (07-19),
`shopify-theme-editor` (07-03), the `/watch` intake command (07-23).

**Staged / named but unbuilt:**
- **Beowulf** — product scouting/validation — staged, not yet installed
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

## Remote Control — desktop ↔ phone (added 2026-09-02)
Drive a Claude Code session running on the desktop from the Claude phone app.
Claude keeps running locally the whole time — local filesystem, MCP servers,
`.env`, the Supabase CLI all stay on the desktop; the phone is just a window
into it. Not the same as Claude Code on the web, which runs in a throwaway
cloud container with none of that.

**Start it** (from the project directory — the startup trust dialog never saves
trust for the home dir):
- `claude --remote-control` — normal interactive session that's also reachable
  from the phone. Type in either place.
- `/remote-control` (or `/rc`) — hand off a session that's already running;
  carries the conversation history over.
- `claude remote-control` — server mode. The terminal becomes a server you
  don't type into, serving many sessions from one process (default cap 32).
  Spacebar toggles the QR code. Worth `--name "PHC Dashboard"` and
  `--permission-mode acceptEdits` so mobile isn't a wall of allow-prompts.

**Connect:** scan the QR, or open the Claude app → **Code** tab → pick the
session (computer icon + green dot = online). `/mobile` prints an app-download
QR if the app isn't installed yet.

**Auto-connect for every session — NOT yet turned on (2026-09-02).** Ben asked
for it, but it can only be set on his own machine, so it's his to flip:
`/config` → **Enable Remote Control for all sessions**, or
`remoteControlAtStartup: true` in `C:\Users\blpin\.claude\settings.json`.
**Gotcha:** project/local settings (`.claude/settings.json`,
`.claude/settings.local.json`) *ignore* a `true` here — by design, so a
checked-in file can't switch Remote Control on for everyone who opens the repo.
They only honor a `false`. Don't "fix" this by committing the setting; it's a
silent no-op that looks like it worked.
Checked 2026-09-02: neither settings file in this repo sets it, and neither
sets `DISABLE_TELEMETRY` / `DO_NOT_TRACK` /
`CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC` / `DISABLE_GROWTHBOOK` — each of
those silently disables the feature-flag evaluation Remote Control depends on,
and is the usual reason it won't turn on.

**Gotchas:**
- The local process must stay alive. Close the terminal and the session goes
  offline within seconds.
- Server-mode sessions survive Ctrl+C for only ~4 hours — `claude
  remote-control` in the same directory brings them back inside that window,
  nothing after it.
- `--spawn worktree` gives each session its own git worktree. Untested against
  OneDrive, which already fights the Supabase CLI's temp dirs (see Auth) — fall
  back to the default `same-dir` if it misbehaves.
- `/plugin` and `/resume` are terminal-only; they don't work from the phone.
- **Transcripts sync to Anthropic servers** while connected, so devices stay in
  sync. Execution and file access stay local, the conversation does not — don't
  paste keys (anon key, service-role key, CLI tokens) into a remote session.

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

## Current status (updated 2026-06-30)
- **Version control set up (2026-06-30)**: git initialized, `.gitignore` already
  excludes `.env` + secrets. A project allowlist lives in `.claude/settings.json`
  (file edits / git / npm run without prompts; pushes, deletes, network still ask).
- **Shell built & working**: React+Vite+TS PWA, Tailwind v4 + shadcn-style
  components, premium black-and-gold theme (Cormorant Garamond / Inter),
  responsive nav (desktop rail + mobile tab bar), four section routes, PWA
  manifest + icons. `npm run dev` → localhost:5173; `npm run build` is clean.
- **Groceries slice (first vertical slice) built & verified**: add / organize
  (group by category or store) / check-off / clear-checked, with optimistic UI.
  Swappable data layer (`src/features/groceries/repo.ts`): uses device storage
  now, auto-switches to Supabase when env vars are present. Supabase schema +
  RLS migration and setup steps are in `supabase/` (see its README).
  **Realtime sync wired and verified (2026-07-03)**: `GroceryRepo.subscribe()`
  (no-op on local storage, a real Supabase Realtime channel on
  `postgres_changes` for INSERT/UPDATE/DELETE when cloud). `useGroceries`
  merges incoming events into state with id-based dedup, so a session's own
  optimistic update and its later realtime echo don't double-apply. Verified
  end-to-end with two real signed-in browser tabs: add/check/remove in one tab
  propagated live to the other with no reload, in both directions.
- **Workouts slice (2nd vertical slice) built & verified** (`src/features/workouts/`):
  manual logger — start a named workout, add exercises, log sets (weight × reps),
  with a live volume tally in the Coach voice. Optimistic UI; same swappable repo
  pattern (device storage now, `hevyRepo` is a marked one-line swap later).
  Verified end-to-end in-browser incl. reload persistence. NOTE: user is on the
  FREE Hevy tier — Hevy's API key needs Pro, so live sync is optional/later; the
  free path is a one-time "import my Hevy export" feature (not yet built).
  Enhancements added: collapsible workout cards (newest open); "Repeat workout"
  (duplicate a session with last time's numbers); per-exercise progress chart
  (`progress.ts` + `ProgressChart.tsx` + `ProgressPanel.tsx`) — custom SVG line of
  total volume over time, Month/3-Month/All zoom, tap-a-point day detail. Note:
  keep repo side-effects OUT of setState updaters (StrictMode double-invokes them).
- **Settings page + per-section background photos built (2026-06-30)**
  (`src/features/settings/`): gear icon in the desktop sidebar (top-right of the
  brand mark) and mobile header opens `/settings`. Each section gets a photo,
  stored locally on-device via IndexedDB (`backgroundStore.ts` — not
  localStorage; photos are too big for its ~5MB string limit). Shown as a
  dimmed background behind that section's content only (`AppShell.tsx` reads
  the current route and renders it). Includes a **drag-to-reposition focal
  point** on the Settings preview thumbnail (small gold dot you drag) since
  `background-size: cover` was cropping some photos in a way the user didn't
  want (e.g. Family photo zoomed on one kid instead of the whole family).
  Local-only for now — same local-first pattern as groceries/workouts before
  cloud existed; could swap to Supabase Storage later for cross-device sync.
- **Goals/tasks CRUD built for Business + Family (2026-07-03)**
  (`src/features/goals/`): first vertical slice of each section, per the
  scoping outline reviewed before building. One shared table (`goal_items`,
  `supabase/migrations/0003_goals.sql` — **run 2026-07-14** via SQL editor,
  same manual step as the prior two migrations) tagged by `section` (`business`
  | `family`) and `kind` (`goal` | `task`); goals carry a `weekly`/`monthly`
  timeframe and stay pinned until checked off, tasks are a flat daily
  checklist with clear-done. Same swappable repo + optimistic-UI + realtime-
  subscribe pattern as Groceries (`GoalsRepo.subscribe`, id-based dedup in
  `useGoals`). `GoalsPanel` is the shared embeddable UI; each page (
  `BusinessPage`, `FamilyPage`) owns its own `useGoals(section)` call and
  passes it down as props — deliberately not called twice, so a voice-added
  item and the on-screen panel share one state instance instead of two that
  could drift apart in local/device-only mode. `SectionScaffold` gained a
  `children` slot so this renders above the still-"Planned" cards; the
  now-built "Pinned Goals"/"Daily Tasks"/"Goals & Tasks" cards were removed
  from `src/config/sections.ts`. Type-checked clean; **not yet verified live
  in-browser** — the app gates behind WebAuthn passkey sign-in in cloud mode,
  which needs your actual hardware, so do a quick pass (add a goal/task on
  each page, check off, clear-done) next time you're in.
- **Kurt wired to real actions (2026-07-03)**: `familyCommands.ts`'s
  `interpretFamily` now returns a typed `add_task` / `add_goal` / `unknown`
  command (mirrors Workouts' `interpret()` seam exactly) instead of the old
  demo-only banter-only responder. Understands "add a task to …" and "add a
  weekly/monthly goal to …" via simple deterministic phrase-matching (no NLU
  yet — that's still Phase 2). `FamilyPage` matches the command kind and
  calls the real `add()` from its `useGoals('family')` instance.
- **Text-persona polish for Arnold + Kurt (2026-07-03)**, still Phase 1 (no new
  integrations, no secrets): `Persona.catchphrase`/`interjection` are now
  `catchphrases[]`/`interjections[]` — a small pool per persona, picked at
  random per reply (`commands.ts`'s new `pick()` helper) so replies aren't the
  identical line every single time. Pulse got the same treatment for
  consistency even though its command vocabulary didn't change. Widened
  vocabulary: Arnold now understands "another set"/"same again" (repeats the
  most-recently-logged exercise, resolved by `WorkoutsPage` via a
  `lastExercise` context param since `interpret()` itself is stateless) and
  "how am I doing"/"status" (a `{ kind: 'status' }` the page fills in with
  real lifetime volume/workout-count numbers — `interpret()` has no access to
  real data by design, same pattern as the add-exercise reply). Kurt now
  understands "mark ... done"/"complete ..."/"finish ..." (fuzzy substring
  match against live goals+tasks, then a real `toggle()`) and "what's on my
  list"/"status" (real open-goals/open-tasks counts). Verified by running the
  pure `interpret()`/`interpretFamily()` functions directly against ~15 sample
  phrases (outside the browser, since the app's still gated behind your
  passkey for me) — catchphrase variety, context-aware repeat, and all new
  command branches behaved as designed. Not yet heard out loud — device TTS
  voice tuning (pitch/rate/voice picks) is unchanged from before and genuinely
  needs your own ears; I can't audibly verify that from here.

## Voice assistant (Phase 1 built & verified, on hold for now)
- **Goal:** a mic widget — tap, say "Hey <name>, …" — that understands a request,
  performs the action, and replies aloud in a character voice. Cross-cutting
  (every section gets its own personas).
- **Built (`src/features/voice/`):** floating mic widget + typed-command fallback;
  persona registry (per-section named characters w/ personality + voice hints);
  browser Web Speech API for STT + TTS (free, no cloud); a simple deterministic
  command reader that handles "add <exercise>" today. Wired into Workouts via
  `logExercise()` on `useWorkouts`. Verified end-to-end via the typed path.
- **Personas today:** Arnold + Pulse (Workouts), Kurt (Family — theatrical method-actor
  energy; wired to real goals/tasks actions in `familyCommands.ts` as of
  2026-07-03, same deterministic-reader pattern as Workouts). All verified
  end-to-end via the typed path except Kurt's new add-goal/add-task actions,
  which are blocked on the passkey sign-in gate for live browser testing (see
  Current status).
- **Phase 2 (needs Supabase — now unblocked):** replace the simple reader with the
  Claude API (natural-language → actions) behind the same `interpret()` seam, and
  upgrade TTS to an expressive provider. Both need secret keys → server-side
  (Edge Functions). Parked for now to focus on Supabase/auth; pick up when ready.
- **Voice-cloning decision (LOCKED):** personas are ORIGINAL *style* voices (e.g.
  an Austrian-accented coach, a theatrical method actor), NOT clones of real people.
  Quality TTS providers forbid cloning real voices without consent; we evoke the
  vibe instead. User tried to source real Arnold/movie-clip audio via Fish Audio
  and a movie-audio rip; flagged the likeness/copyright/ToS risk and user agreed to
  go with original-style voices instead. Do not build actual real-person voice clones.

## Auth (VERIFIED END-TO-END 2026-06-30)
- **Auth method: device passkeys** (WebAuthn — Face ID / fingerprint / Windows
  Hello). Supabase has no built-in passkey provider, so it's a `credentials`
  table + one Edge Function (WebAuthn challenge/verify via
  `@simplewebauthn/server`) + session minting with the service-role key.
- **Auth foundation** (`src/features/auth/`): `AuthProvider` (local/cloud modes),
  app gating in `App.tsx`, `AuthGate` sign-in screen, sidebar sign-out. Local
  mode = no login. Cloud mode = gate until signed in.
- **Passkey flow — first real registration succeeded 2026-06-30.** Signed in via
  Windows Hello; cloud mode is live end-to-end:
  - Edge Function `supabase/functions/passkey/index.ts` (Deno, 4 actions;
    @simplewebauthn v13; mints session via magic-link token_hash). Deployed.
  - Tables: `supabase/migrations/0002_passkeys.sql` (RLS, service-role only). Run.
  - Client: `src/features/auth/passkey.ts` + real `AuthGate` form. Working.
- **Supabase project is live:** project ref `fraihyghvkrzkbmxqfil`. `.env` has
  `VITE_SUPABASE_URL` / `VITE_SUPABASE_ANON_KEY` filled in (gitignored). Both
  migrations run and confirmed via `information_schema.tables`.
- **Windows/OneDrive CLI gotcha:** `supabase link` fails with `PlatformError:
  AlreadyExists: FileSystem.makeDirectory ...supabase\.temp` in this OneDrive-
  synced project folder — a known-flaky interaction between the CLI's temp-dir
  handling and OneDrive's file sync/locking. **Workaround: skip `link` entirely**
  and pass `--project-ref fraihyghvkrzkbmxqfil` directly on every CLI command
  (`functions deploy`, `secrets set`, etc.) instead. Ran `supabase init` once to
  create `supabase/config.toml` (needed for the CLI to recognize the folder at all).
- **`.env` is in the Write/Edit-tool deny list** (`.claude/settings.json`) —
  intentional guard rail from an earlier session. Claude Code can't write/edit
  it via the Edit/Write tools; a terminal command (`cat > .env <<EOF`) is not
  blocked by that same rule and was used instead, with the user's explicit
  go-ahead each time secrets were involved (anon key, then a CLI personal
  access token used transiently for login/deploy, never written to disk).

## Next step
1. Migration 0003 is run (2026-07-14). Still need to verify the new
   Goals/Tasks CRUD live in-browser on both Business and Family (add a goal +
   task, check off, clear-done) — blocked on your passkey for me to do it
   myself. Confirm Kurt's "add a task to …" / "add a weekly/monthly goal to …"
   voice commands land the same real data, plus the new "mark ... done" /
   "what's on my list" commands, and give Arnold's "another set" / "how am I
   doing" a try on Workouts. Also just listen to a couple of replies — the
   catchphrase/interjection variety is untested by ear.
2. Everything else from the Business/Family scoping outline still waits for
   your review and call: Shopify read-only dashboard (Edge Function), Facebook
   Ads Manager view, Google Calendar OAuth + Edge Function, Omnisend (blocked
   on an account/key), supplier/inventory tracker, and the Aurelius text persona.
3. User wants a pass on "personal touch / user-friendliness" polish — no specific
   list yet, TBD together next session (UI copy, empty states, onboarding feel,
   whatever stands out when using it day-to-day).

## Open decisions
- ~~Final tech stack~~ — confirmed.
- ~~Which section first~~ — Groceries (done).
- ~~Auth method~~ — device passkeys (built & verified end-to-end).
- ~~Realtime sync subscription for groceries~~ — wired & verified end-to-end.
- ~~Goals/tasks CRUD for Business + Family~~ — built (2026-07-03), pending your
  live-browser verification pass.
- Business: Shopify metrics/cadence, Facebook Ads scope (view-only vs.
  pause/budget control), Omnisend account status, supplier-tracker fields/import
  source — all still your call per the scoping outline.
- Family: Google Calendar scope (read-only vs. write-back), which calendar(s) —
  still your call.
- Background photos are local-only (this device) — revisit if cross-device
  photo sync matters enough to justify a Supabase Storage bucket.
