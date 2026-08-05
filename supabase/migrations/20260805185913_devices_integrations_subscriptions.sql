-- Devices, Integrations, Subscriptions
-- (docs/06-database-design.md, modules/integraciones.md, docs/14-monetization.md)

create table public.devices (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.users (id) on delete cascade,
  device text,
  os text,
  push_token text,
  last_seen timestamptz not null default now()
);

create index devices_user_id_idx on public.devices (user_id);

create table public.integrations (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.users (id) on delete cascade,
  provider text not null check (provider in ('apple_health', 'apple_watch', 'screen_time')),
  status text not null default 'connected' check (status in ('connected', 'disconnected')),
  last_sync timestamptz,
  unique (user_id, provider)
);

-- Plan ids must stay in sync with packages/config/src/plans.ts (docs/14-monetization.md).
create table public.subscriptions (
  user_id uuid primary key references public.users (id) on delete cascade,
  plan text not null default 'free' check (plan in ('free', 'starter', 'premium')),
  status text not null default 'active' check (status in ('active', 'past_due', 'cancelled')),
  renew_at timestamptz,
  lemon_customer_id text,
  updated_at timestamptz not null default now()
);

create trigger set_updated_at
  before update on public.subscriptions
  for each row execute function public.set_updated_at();
