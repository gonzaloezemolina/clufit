-- Score History and Daily Snapshots (docs/06.1-entity-relationship-model.md)

create table public.score_history (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.users (id) on delete cascade,
  score_type text not null check (score_type in (
    'overall', 'discipline', 'productivity', 'recovery',
    'procrastination', 'fitness', 'nutrition', 'notification'
  )),
  value numeric not null,
  date date not null default current_date,
  unique (user_id, score_type, date)
);

create index score_history_user_id_idx on public.score_history (user_id);

create table public.daily_snapshots (
  user_id uuid not null references public.users (id) on delete cascade,
  date date not null default current_date,
  overall_score numeric,
  discipline_score numeric,
  productivity_score numeric,
  recovery_score numeric,
  procrastination_score numeric,
  fitness_score numeric,
  nutrition_score numeric,
  notification_score numeric,
  argus_summary text,
  primary key (user_id, date)
);
