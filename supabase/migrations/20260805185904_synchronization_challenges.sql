-- Synchronization and Challenge Engine
-- (contracts/synchronization.contract.md, systems/challenge-engine.md)

create table public.synchronizations (
  id uuid primary key default gen_random_uuid(),
  requester_id uuid not null references public.users (id) on delete cascade,
  partner_id uuid not null references public.users (id) on delete cascade,
  status text not null default 'pending'
    check (status in ('pending', 'accepted', 'rejected', 'cancelled')),
  created_at timestamptz not null default now(),
  responded_at timestamptz,
  check (requester_id <> partner_id)
);

create index synchronizations_requester_id_idx on public.synchronizations (requester_id);
create index synchronizations_partner_id_idx on public.synchronizations (partner_id);

-- Decision 003 (synchronization.contract.md): "Un usuario solo podrá tener una
-- sincronización activa durante la Phase 1." Active = pending or accepted.
-- A simple unique index can't express "not already active on either side of
-- the pair", so this is enforced with a trigger instead.
create or replace function public.enforce_single_active_synchronization()
returns trigger
language plpgsql
as $$
begin
  if new.status in ('pending', 'accepted') then
    if exists (
      select 1 from public.synchronizations
      where id <> new.id
        and status in ('pending', 'accepted')
        and (
          requester_id in (new.requester_id, new.partner_id)
          or partner_id in (new.requester_id, new.partner_id)
        )
    ) then
      raise exception 'A user can only have one active synchronization at a time (Phase 1).';
    end if;
  end if;
  return new;
end;
$$;

create trigger enforce_single_active_synchronization
  before insert or update on public.synchronizations
  for each row execute function public.enforce_single_active_synchronization();

create table public.challenge_types (
  id uuid primary key default gen_random_uuid(),
  name text not null unique,
  description text
);

create table public.challenges (
  id uuid primary key default gen_random_uuid(),
  synchronization_id uuid not null references public.synchronizations (id) on delete cascade,
  creator_id uuid not null references public.users (id),
  challenge_type_id uuid references public.challenge_types (id),
  title text not null,
  description text,
  goal_target numeric,
  reward text,
  punishment text,
  start_date date not null default current_date,
  end_date date not null,
  status text not null default 'pending'
    check (status in ('pending', 'active', 'rejected', 'finished', 'cancelled')),
  created_at timestamptz not null default now(),
  check (end_date >= start_date)
);

create index challenges_synchronization_id_idx on public.challenges (synchronization_id);

create table public.challenge_participants (
  challenge_id uuid not null references public.challenges (id) on delete cascade,
  user_id uuid not null references public.users (id) on delete cascade,
  progress numeric not null default 0,
  completed boolean not null default false,
  primary key (challenge_id, user_id)
);
