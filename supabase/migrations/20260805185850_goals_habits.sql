-- Goals, Habits, Habit Logs (docs/06-database-design.md, contracts/objetivos.contract.md,
-- contracts/disciplina.contract.md)

create table public.goals (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.users (id) on delete cascade,
  title text not null,
  description text,
  category text not null,
  is_main_goal boolean not null default false,
  target text,
  progress numeric not null default 0 check (progress >= 0 and progress <= 100),
  status text not null default 'active'
    check (status in ('active', 'in_progress', 'paused', 'completed', 'archived')),
  start_date date not null default current_date,
  target_date date,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  completed_at timestamptz
);

-- "Un objetivo principal por momento" (docs/01-vision.md, Decision 001 en objetivos.contract.md):
-- solo un goal por usuario puede tener is_main_goal = true a la vez.
create unique index goals_one_main_goal_per_user
  on public.goals (user_id)
  where (is_main_goal);

create index goals_user_id_idx on public.goals (user_id);

create trigger set_updated_at
  before update on public.goals
  for each row execute function public.set_updated_at();

create table public.habits (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.users (id) on delete cascade,
  title text not null,
  frequency text not null default 'daily',
  reminder_time time,
  streak integer not null default 0,
  longest_streak integer not null default 0,
  status text not null default 'active' check (status in ('active', 'paused', 'archived')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index habits_user_id_idx on public.habits (user_id);

create trigger set_updated_at
  before update on public.habits
  for each row execute function public.set_updated_at();

create table public.habit_logs (
  id uuid primary key default gen_random_uuid(),
  habit_id uuid not null references public.habits (id) on delete cascade,
  date date not null default current_date,
  completed boolean not null default false,
  completed_at timestamptz,
  unique (habit_id, date)
);

create index habit_logs_habit_id_idx on public.habit_logs (habit_id);
