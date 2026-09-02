# CLAUDE.archive.md — historical build log

Detailed dated progress notes moved out of CLAUDE.md on 2026-09-02 to keep the
always-loaded file lean. Nothing here is a live instruction — it's the record of
how each slice was built and verified. CLAUDE.md carries the current summary.
Not auto-loaded by Claude Code; read it when you need the full history.

---

## Current status  [verbatim from CLAUDE.md, archived 2026-09-02]

_(section header in the original: "Current status (updated 2026-06-30)")_

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

## Voice assistant (Phase 1 built & verified, on hold for now)  [verbatim, archived 2026-09-02]

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

## Auth (VERIFIED END-TO-END 2026-06-30)  [verbatim, archived 2026-09-02]

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

## Resolved decisions  [archived 2026-09-02]

- Final tech stack — confirmed.
- Which section first — Groceries (done).
- Auth method — device passkeys (built & verified end-to-end).
- Realtime sync subscription for groceries — wired & verified end-to-end.
- Goals/tasks CRUD for Business + Family — built (2026-07-03), pending
  live-browser verification pass.
