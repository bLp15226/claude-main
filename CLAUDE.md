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

## Working style (read this every session)
- Sessions are short (often 1–2 hours). End each session with a brief recap:
  what changed, what's working, and the single next step to pick up.
- Never leave the app broken between sessions. Always land on a working checkpoint.
- Tone: direct and casual, skip the filler.
- When something's ambiguous, ask one clear question instead of guessing.

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

## Voice assistant (Phase 1 built & verified, on hold for now)
- **Goal:** a mic widget — tap, say "Hey <name>, …" — that understands a request,
  performs the action, and replies aloud in a character voice. Cross-cutting
  (every section gets its own personas).
- **Built (`src/features/voice/`):** floating mic widget + typed-command fallback;
  persona registry (per-section named characters w/ personality + voice hints);
  browser Web Speech API for STT + TTS (free, no cloud); a simple deterministic
  command reader that handles "add <exercise>" today. Wired into Workouts via
  `logExercise()` on `useWorkouts`. Verified end-to-end via the typed path.
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
1. **Wire up realtime sync** for groceries (repo layer's already ready for it) —
   confirm changes propagate live across two devices/tabs.
2. Business and Family sections are still placeholder-only ("Planned" cards) —
   pick one to build as the next vertical slice, OR resume the parked voice-
   assistant Phase 2 (Claude-powered NLU + expressive TTS), now that Supabase
   secrets are unblocked.
3. User wants a pass on "personal touch / user-friendliness" polish — no specific
   list yet, TBD together next session (UI copy, empty states, onboarding feel,
   whatever stands out when using it day-to-day).

## Open decisions
- ~~Final tech stack~~ — confirmed.
- ~~Which section first~~ — Groceries (done).
- ~~Auth method~~ — device passkeys (built & verified end-to-end).
- Realtime sync subscription for groceries — wire up next (repo already ready).
- Which section to build out next: Business (Shopify/Ads/Omnisend) vs. Family
  (Google Calendar + goals/tasks) — user's call.
- Background photos are local-only (this device) — revisit if cross-device
  photo sync matters enough to justify a Supabase Storage bucket.
