-- Recovery (contracts/recuperacion.contract.md) and Nutrition (contracts/nutricion.contract.md)
--
-- Note: the Nutrition schema here follows contracts/nutricion.contract.md
-- ("Clufit no cuenta calorías ni macronutrientes"), which superseded the
-- calorie/macro-tracking sketch originally drafted in docs/06-database-design.md.
-- Hydration is tracked once, in hydration_logs, and shared by both modules —
-- Recovery's check-in reads it rather than storing a duplicate column.

create table public.recovery_checkins (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.users (id) on delete cascade,
  date date not null default current_date,
  sleep_hours numeric,
  sleep_quality integer check (sleep_quality between 1 and 5),
  stress_level integer check (stress_level between 1 and 5),
  energy_level integer check (energy_level between 1 and 5),
  mood integer check (mood between 1 and 5),
  recovery_score numeric,
  created_at timestamptz not null default now(),
  unique (user_id, date)
);

create index recovery_checkins_user_id_idx on public.recovery_checkins (user_id);

create table public.nutrition_plans (
  user_id uuid primary key references public.users (id) on delete cascade,
  meals_per_day integer not null default 3,
  hydration_goal_ml integer not null default 2000,
  updated_at timestamptz not null default now()
);

create trigger set_updated_at
  before update on public.nutrition_plans
  for each row execute function public.set_updated_at();

create table public.meal_plan_items (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.users (id) on delete cascade,
  name text not null,
  approx_time time,
  sort_order integer not null default 0
);

create index meal_plan_items_user_id_idx on public.meal_plan_items (user_id);

create table public.meal_logs (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.users (id) on delete cascade,
  meal_plan_item_id uuid references public.meal_plan_items (id) on delete set null,
  date date not null default current_date,
  status text not null default 'pendiente'
    check (status in ('cumplida', 'pendiente', 'no_cumplida')),
  note text,
  logged_at timestamptz not null default now()
);

create index meal_logs_user_id_date_idx on public.meal_logs (user_id, date);

create table public.hydration_logs (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.users (id) on delete cascade,
  date date not null default current_date,
  amount_ml integer not null check (amount_ml > 0),
  logged_at timestamptz not null default now()
);

create index hydration_logs_user_id_date_idx on public.hydration_logs (user_id, date);
