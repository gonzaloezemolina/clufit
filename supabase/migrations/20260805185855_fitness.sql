-- Fitness (docs/06-database-design.md, docs/06.1-entity-relationship-model.md,
-- contracts/fitness.contract.md)

create table public.muscle_groups (
  id uuid primary key default gen_random_uuid(),
  name text not null unique
);

create table public.exercise_categories (
  id uuid primary key default gen_random_uuid(),
  name text not null unique
);

create table public.exercises (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  muscle_group_id uuid references public.muscle_groups (id),
  category_id uuid references public.exercise_categories (id),
  equipment text,
  difficulty text,
  instructions text,
  created_by uuid references public.users (id) on delete set null
);

create table public.workouts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.users (id) on delete cascade,
  name text not null,
  description text,
  difficulty text,
  status text not null default 'active' check (status in ('active', 'archived')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index workouts_user_id_idx on public.workouts (user_id);

create trigger set_updated_at
  before update on public.workouts
  for each row execute function public.set_updated_at();

-- Plan de la rutina: series/reps/peso objetivo por ejercicio (plantilla).
create table public.workout_exercises (
  id uuid primary key default gen_random_uuid(),
  workout_id uuid not null references public.workouts (id) on delete cascade,
  exercise_id uuid not null references public.exercises (id),
  "order" integer not null default 0,
  sets integer,
  reps integer,
  weight numeric,
  rest_time integer
);

create index workout_exercises_workout_id_idx on public.workout_exercises (workout_id);

create table public.workout_sessions (
  id uuid primary key default gen_random_uuid(),
  workout_id uuid not null references public.workouts (id) on delete cascade,
  started_at timestamptz not null default now(),
  finished_at timestamptz,
  duration integer,
  calories numeric,
  average_heart_rate integer
);

create index workout_sessions_workout_id_idx on public.workout_sessions (workout_id);

-- Registro real de lo ejecutado en cada sesión (series/reps/peso efectivos).
-- No está en el ERD original: fitness.contract.md exige conservar el historial
-- exacto de cada entrenamiento ("Ejercicios realizados, Series, Repeticiones,
-- Peso utilizado"), que workout_exercises (la plantilla) no puede representar
-- porque cambia sesión a sesión.
create table public.workout_session_exercises (
  id uuid primary key default gen_random_uuid(),
  session_id uuid not null references public.workout_sessions (id) on delete cascade,
  exercise_id uuid not null references public.exercises (id),
  "order" integer not null default 0,
  sets integer,
  reps integer,
  weight numeric,
  notes text
);

create index workout_session_exercises_session_id_idx
  on public.workout_session_exercises (session_id);
