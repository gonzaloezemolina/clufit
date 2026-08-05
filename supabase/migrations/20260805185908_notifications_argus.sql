-- Notifications and Argus (contracts/notifications.contract.md, contracts/argus.contract.md)

create table public.notification_templates (
  id uuid primary key default gen_random_uuid(),
  key text not null unique,
  category text not null,
  title_template text not null,
  body_template text not null
);

create table public.notifications (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.users (id) on delete cascade,
  title text not null,
  body text not null,
  type text not null,
  priority text not null default 'medium'
    check (priority in ('critical', 'high', 'medium', 'low')),
  sent_at timestamptz not null default now(),
  read_at timestamptz
);

create index notifications_user_id_idx on public.notifications (user_id);

create table public.argus_insights (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.users (id) on delete cascade,
  type text not null,
  title text not null,
  description text,
  confidence numeric check (confidence between 0 and 1),
  created_at timestamptz not null default now()
);

create index argus_insights_user_id_idx on public.argus_insights (user_id);

create table public.recommendations (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.users (id) on delete cascade,
  category text not null,
  recommendation text not null,
  accepted boolean,
  dismissed boolean not null default false,
  created_at timestamptz not null default now()
);

create index recommendations_user_id_idx on public.recommendations (user_id);

create table public.procrastination_history (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.users (id) on delete cascade,
  date date not null default current_date,
  score numeric not null,
  screen_time_minutes integer,
  social_media_minutes integer,
  unique (user_id, date)
);

create index procrastination_history_user_id_idx on public.procrastination_history (user_id);
