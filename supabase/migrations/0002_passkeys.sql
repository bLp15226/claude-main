-- ───────────────────────────────────────────────────────────────────────────
-- Passkeys (WebAuthn): credential storage + short-lived challenges
-- These tables are written/read ONLY by the `passkey` Edge Function using the
-- service-role key. RLS is enabled with NO policies, so anon/authenticated
-- clients can't touch them; the service role bypasses RLS.
-- ───────────────────────────────────────────────────────────────────────────

-- A registered passkey (one row per credential/device).
create table if not exists public.passkey_credentials (
  -- The credential ID from the authenticator (base64url string).
  id           text primary key,
  user_id      uuid not null references auth.users (id) on delete cascade,
  public_key   text not null,          -- base64url-encoded COSE public key
  counter      bigint not null default 0,
  transports   text[],                 -- e.g. {internal, hybrid}
  created_at   timestamptz not null default now()
);

create index if not exists passkey_credentials_user_idx
  on public.passkey_credentials (user_id);

alter table public.passkey_credentials enable row level security;
-- (intentionally no policies — service role only)

-- Short-lived WebAuthn challenges, keyed by email + ceremony type.
create table if not exists public.passkey_challenges (
  id          uuid primary key default gen_random_uuid(),
  email       text not null,
  type        text not null check (type in ('register', 'auth')),
  challenge   text not null,
  expires_at  timestamptz not null default (now() + interval '5 minutes'),
  created_at  timestamptz not null default now()
);

create index if not exists passkey_challenges_email_idx
  on public.passkey_challenges (email, type);

alter table public.passkey_challenges enable row level security;
-- (intentionally no policies — service role only)
