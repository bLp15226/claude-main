-- ───────────────────────────────────────────────────────────────────────────
-- Groceries: items table + row-level security
-- Run this in the Supabase SQL editor (or via `supabase db push`).
-- ───────────────────────────────────────────────────────────────────────────

create table if not exists public.grocery_items (
  id          uuid primary key default gen_random_uuid(),
  -- The owner. Defaults to the logged-in user so inserts "just work".
  user_id     uuid not null default auth.uid() references auth.users (id) on delete cascade,
  name        text not null,
  category    text not null default 'Other',
  store       text,
  checked     boolean not null default false,
  created_at  timestamptz not null default now()
);

-- Fast lookups of a user's items.
create index if not exists grocery_items_user_idx on public.grocery_items (user_id);

-- Row-level security: each user can only see and change their own rows.
alter table public.grocery_items enable row level security;

drop policy if exists "Users manage own grocery items" on public.grocery_items;
create policy "Users manage own grocery items"
  on public.grocery_items
  for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

-- Enable realtime so changes sync live across devices.
-- (Safe to re-run; ignore the error if the table is already in the publication.)
alter publication supabase_realtime add table public.grocery_items;
