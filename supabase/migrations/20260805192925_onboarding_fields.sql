-- Fields needed by the onboarding flow (docs/12-onboarding.md) that weren't
-- covered by the original schema, plus a proper default for public.profiles
-- so onboarding always has a row to update instead of having to guess
-- whether one exists yet.

alter table public.profiles
  add column if not exists onboarding_completed_at timestamptz,
  add column if not exists trains_days_per_week integer check (trains_days_per_week between 0 and 7),
  add column if not exists goes_to_gym boolean,
  add column if not exists wake_time time,
  add column if not exists sleep_time time;

-- docs/12-onboarding.md never asks for a username explicitly (Progressive
-- Profiling: only ask what's strictly necessary), but public.users.username
-- is unique/not-null for partner search (modules/perfil.md). Give sign-ups
-- that don't supply one a readable default instead of falling back to the
-- raw UUID; the user can still change it later from Perfil.
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
    coalesce(
      new.raw_user_meta_data ->> 'username',
      split_part(new.email, '@', 1) || '_' || substr(new.id::text, 1, 4)
    ),
    new.email
  );

  insert into public.profiles (user_id) values (new.id);

  return new;
end;
$$;
