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

## Current status (updated 2026-06-28)
- **Shell built & working**: React+Vite+TS PWA, Tailwind v4 + shadcn-style
  components, premium black-and-gold theme (Cormorant Garamond / Inter),
  responsive nav (desktop rail + mobile tab bar), four section routes, PWA
  manifest + icons. `npm run dev` → localhost:5173; `npm run build` is clean.
- **Groceries slice (first vertical slice) built & verified**: add / organize
  (group by category or store) / check-off / clear-checked, with optimistic UI.
  Swappable data layer (`src/features/groceries/repo.ts`): uses device storage
  now, auto-switches to Supabase when env vars are present. Supabase schema +
  RLS migration and setup steps are in `supabase/` (see its README).

## Auth (in progress)
- **Auth method chosen: device passkeys** (WebAuthn — Face ID / fingerprint /
  Windows Hello). Note: Supabase has no built-in passkey provider; it needs a
  `credentials` table + two Edge Functions (WebAuthn challenge/verify via
  `@simplewebauthn/server`) + session minting with the service-role key. Can't
  be tested until the Supabase project exists.
- **Auth foundation built & verified** (`src/features/auth/`): `AuthProvider`
  (local/cloud modes), app gating in `App.tsx`, `AuthGate` sign-in screen,
  sidebar sign-out. Local mode = no login, app works as before. Cloud mode =
  gate until signed in. Both paths verified (incl. dummy-env render test).
- **Passkey flow built (code complete, NOT yet runtime-tested)**:
  - Edge Function `supabase/functions/passkey/index.ts` (Deno, one function,
    4 actions; @simplewebauthn v13; mints session via magic-link token_hash).
  - Tables: `supabase/migrations/0002_passkeys.sql` (RLS, service-role only).
  - Client: `src/features/auth/passkey.ts` + real `AuthGate` form.
  - Type-checks + renders cleanly. The WebAuthn round-trip can only be tested
    once the project exists, function is deployed, and secrets are set.

## Next step (hand-off to user, then test together)
1. **Create the Supabase project** + fill `.env` (steps 1–3 of `supabase/README.md`).
2. Run BOTH migrations (0001 groceries, 0002 passkeys).
3. `supabase functions deploy passkey --no-verify-jwt` + set RP_ID/RP_ORIGIN/RP_NAME secrets.
4. Restart dev server → register a passkey → first real end-to-end test. Expect
   to debug the WebAuthn round-trip here (it's the one unverified piece).
5. Then: cloud groceries + realtime subscription light up (repo already ready).

## Open decisions
- ~~Final tech stack~~ — confirmed.
- ~~Which section first~~ — Groceries (done).
- ~~Auth method~~ — device passkeys (build pending Supabase project).
- Realtime sync subscription for groceries — wire up once cloud is live.
