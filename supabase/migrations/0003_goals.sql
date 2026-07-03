-- ───────────────────────────────────────────────────────────────────────────
-- Goals & tasks: shared by Business and Family (tagged by `section`) + RLS
-- Run this in the Supabase SQL editor (or via `supabase db push`).
-- ───────────────────────────────────────────────────────────────────────────

create table if not exists public.goal_items (
  id          uuid primary key default gen_random_uuid(),
  -- The owner. Defaults to the logged-in user so inserts "just work".
  user_id     uuid not null default auth.uid() references auth.users (id) on delete cascade,
  section     text not null check (section in ('business', 'family')),
  kind        text not null check (kind in ('goal', 'task')),
  title       text not null,
  timeframe   text check (timeframe in ('weekly', 'monthly')),
  done        boolean not null default false,
  created_at  timestamptz not null default now()
);

-- Fast lookups of a user's items.
create index if not exists goal_items_user_idx on public.goal_items (user_id);

-- Row-level security: each user can only see and change their own rows.
alter table public.goal_items enable row level security;

drop policy if exists "Users manage own goal items" on public.goal_items;
create policy "Users manage own goal items"
  on public.goal_items
  for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

-- Enable realtime so changes sync live across devices.
-- (Safe to re-run; ignore the error if the table is already in the publication.)
alter publication supabase_realtime add table public.goal_items;
