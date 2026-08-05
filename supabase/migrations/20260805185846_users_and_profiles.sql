-- Users, Profiles (docs/06-database-design.md)
--
-- Supabase Auth owns auth.users (email, password, identities). We mirror the
-- minimal identity fields into public.users so the app schema can reference
-- users via a normal foreign key and RLS can key off auth.uid() directly.

create table public.users (
  id uuid primary key references auth.users (id) on delete cascade,
  fullname text not null,
  username text not null unique,
  email text not null,
  birthday date,
  gender text,
  avatar text,
  timezone text not null default 'UTC',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create trigger set_updated_at
  before update on public.users
  for each row execute function public.set_updated_at();

-- Populates public.users automatically whenever Supabase Auth creates a new user.
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.users (id, fullname, username, email)
  values (
    new.id,
    coalesce(new.raw_user_meta_data ->> 'fullname', ''),
    coalesce(new.raw_user_meta_data ->> 'username', new.id::text),
    new.email
  );
  return new;
end;
$$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- Profiles (docs/06-database-design.md "Profiles")
--
-- privacy_settings gates what a synchronized partner can read from each
-- module (see modules/perfil.md "Privacidad y Sincronización" and
-- 20260805185926_rls_synchronization_sharing.sql). Expected keys: fitness,
-- recuperacion, nutricion, disciplina, productividad — all default to false.
create table public.profiles (
  user_id uuid primary key references public.users (id) on delete cascade,
  height numeric,
  weight numeric,
  target_weight numeric,
  activity_level text,
  fitness_level text,
  notification_preferences jsonb not null default '{}'::jsonb,
  privacy_settings jsonb not null default '{
    "fitness": false,
    "recuperacion": false,
    "nutricion": false,
    "disciplina": false,
    "productividad": false
  }'::jsonb,
  updated_at timestamptz not null default now()
);

create trigger set_updated_at
  before update on public.profiles
  for each row execute function public.set_updated_at();
