-- Row Level Security baseline (docs/06-database-design.md Decision 002 & "Seguridad":
-- "Cada usuario únicamente accede a sus propios datos").
--
-- This migration covers: (a) strict owner-only access for personal tables,
-- (b) read-only catalog tables, and (c) the inherently two-party tables
-- (synchronizations, challenges) where both linked users must see the same
-- rows. Partner visibility INTO personal tables (goals/fitness/recovery/etc.,
-- gated by profiles.privacy_settings) is handled separately in
-- 20260805185926_rls_synchronization_sharing.sql.

-- Returns true if the signed-in user is one of the two people in the given
-- synchronization. security definer so it can be used inside RLS policies
-- without each policy needing its own grant on public.synchronizations.
create or replace function public.is_synchronization_party(sync_id uuid)
returns boolean
language sql
security definer
set search_path = public
stable
as $$
  select exists (
    select 1 from public.synchronizations s
    where s.id = sync_id
      and s.status = 'accepted'
      and auth.uid() in (s.requester_id, s.partner_id)
  );
$$;

alter table public.users enable row level security;
alter table public.profiles enable row level security;
alter table public.goals enable row level security;
alter table public.habits enable row level security;
alter table public.habit_logs enable row level security;
alter table public.muscle_groups enable row level security;
alter table public.exercise_categories enable row level security;
alter table public.exercises enable row level security;
alter table public.workouts enable row level security;
alter table public.workout_exercises enable row level security;
alter table public.workout_sessions enable row level security;
alter table public.workout_session_exercises enable row level security;
alter table public.recovery_checkins enable row level security;
alter table public.nutrition_plans enable row level security;
alter table public.meal_plan_items enable row level security;
alter table public.meal_logs enable row level security;
alter table public.hydration_logs enable row level security;
alter table public.synchronizations enable row level security;
alter table public.challenge_types enable row level security;
alter table public.challenges enable row level security;
alter table public.challenge_participants enable row level security;
alter table public.notification_templates enable row level security;
alter table public.notifications enable row level security;
alter table public.argus_insights enable row level security;
alter table public.recommendations enable row level security;
alter table public.procrastination_history enable row level security;
alter table public.devices enable row level security;
alter table public.integrations enable row level security;
alter table public.subscriptions enable row level security;
alter table public.score_history enable row level security;
alter table public.daily_snapshots enable row level security;

-- Users: any signed-in user can look someone up (needed to send a
-- synchronization invite by username, modules/perfil.md), but only the
-- owner can change their own row. No client insert policy: rows are created
-- exclusively by the handle_new_user() trigger.
create policy "users_select_authenticated" on public.users
  for select to authenticated using (true);
create policy "users_update_own" on public.users
  for update to authenticated using (auth.uid() = id) with check (auth.uid() = id);

-- Owner-only tables: identical shape, one per table.
create policy "profiles_owner" on public.profiles
  for all to authenticated using (auth.uid() = user_id) with check (auth.uid() = user_id);

create policy "goals_owner" on public.goals
  for all to authenticated using (auth.uid() = user_id) with check (auth.uid() = user_id);

create policy "habits_owner" on public.habits
  for all to authenticated using (auth.uid() = user_id) with check (auth.uid() = user_id);

create policy "recovery_checkins_owner" on public.recovery_checkins
  for all to authenticated using (auth.uid() = user_id) with check (auth.uid() = user_id);

create policy "nutrition_plans_owner" on public.nutrition_plans
  for all to authenticated using (auth.uid() = user_id) with check (auth.uid() = user_id);

create policy "meal_plan_items_owner" on public.meal_plan_items
  for all to authenticated using (auth.uid() = user_id) with check (auth.uid() = user_id);

create policy "meal_logs_owner" on public.meal_logs
  for all to authenticated using (auth.uid() = user_id) with check (auth.uid() = user_id);

create policy "hydration_logs_owner" on public.hydration_logs
  for all to authenticated using (auth.uid() = user_id) with check (auth.uid() = user_id);

create policy "notifications_owner" on public.notifications
  for all to authenticated using (auth.uid() = user_id) with check (auth.uid() = user_id);

create policy "argus_insights_owner" on public.argus_insights
  for all to authenticated using (auth.uid() = user_id) with check (auth.uid() = user_id);

create policy "recommendations_owner" on public.recommendations
  for all to authenticated using (auth.uid() = user_id) with check (auth.uid() = user_id);

create policy "procrastination_history_owner" on public.procrastination_history
  for all to authenticated using (auth.uid() = user_id) with check (auth.uid() = user_id);

create policy "devices_owner" on public.devices
  for all to authenticated using (auth.uid() = user_id) with check (auth.uid() = user_id);

create policy "integrations_owner" on public.integrations
  for all to authenticated using (auth.uid() = user_id) with check (auth.uid() = user_id);

create policy "subscriptions_owner" on public.subscriptions
  for all to authenticated using (auth.uid() = user_id) with check (auth.uid() = user_id);

create policy "score_history_owner" on public.score_history
  for all to authenticated using (auth.uid() = user_id) with check (auth.uid() = user_id);

create policy "daily_snapshots_owner" on public.daily_snapshots
  for all to authenticated using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- Tables owned indirectly through a parent row.
create policy "habit_logs_via_habit" on public.habit_logs
  for all to authenticated using (
    exists (select 1 from public.habits h where h.id = habit_logs.habit_id and h.user_id = auth.uid())
  ) with check (
    exists (select 1 from public.habits h where h.id = habit_logs.habit_id and h.user_id = auth.uid())
  );

create policy "workouts_owner" on public.workouts
  for all to authenticated using (auth.uid() = user_id) with check (auth.uid() = user_id);

create policy "workout_exercises_via_workout" on public.workout_exercises
  for all to authenticated using (
    exists (select 1 from public.workouts w where w.id = workout_exercises.workout_id and w.user_id = auth.uid())
  ) with check (
    exists (select 1 from public.workouts w where w.id = workout_exercises.workout_id and w.user_id = auth.uid())
  );

create policy "workout_sessions_via_workout" on public.workout_sessions
  for all to authenticated using (
    exists (select 1 from public.workouts w where w.id = workout_sessions.workout_id and w.user_id = auth.uid())
  ) with check (
    exists (select 1 from public.workouts w where w.id = workout_sessions.workout_id and w.user_id = auth.uid())
  );

create policy "workout_session_exercises_via_session" on public.workout_session_exercises
  for all to authenticated using (
    exists (
      select 1 from public.workout_sessions ws
      join public.workouts w on w.id = ws.workout_id
      where ws.id = workout_session_exercises.session_id and w.user_id = auth.uid()
    )
  ) with check (
    exists (
      select 1 from public.workout_sessions ws
      join public.workouts w on w.id = ws.workout_id
      where ws.id = workout_session_exercises.session_id and w.user_id = auth.uid()
    )
  );

-- Read-only catalogs: writable only by the service role (bypasses RLS), so no
-- insert/update/delete policy is defined for the client roles.
create policy "muscle_groups_read" on public.muscle_groups
  for select to authenticated using (true);
create policy "exercise_categories_read" on public.exercise_categories
  for select to authenticated using (true);
create policy "challenge_types_read" on public.challenge_types
  for select to authenticated using (true);

-- Exercises: global catalog is readable by everyone; only the exercise's
-- creator can modify the custom exercises they added.
create policy "exercises_read" on public.exercises
  for select to authenticated using (true);
create policy "exercises_insert_own" on public.exercises
  for insert to authenticated with check (created_by = auth.uid());
create policy "exercises_modify_own" on public.exercises
  for update to authenticated using (created_by = auth.uid()) with check (created_by = auth.uid());
create policy "exercises_delete_own" on public.exercises
  for delete to authenticated using (created_by = auth.uid());

-- notification_templates: no policy for authenticated/anon — only the
-- service role (which bypasses RLS) manages these.

-- Synchronizations: both people in the link can see and respond to it;
-- only the requester can create the invite.
create policy "synchronizations_select" on public.synchronizations
  for select to authenticated using (auth.uid() = requester_id or auth.uid() = partner_id);
create policy "synchronizations_insert" on public.synchronizations
  for insert to authenticated with check (auth.uid() = requester_id);
create policy "synchronizations_update" on public.synchronizations
  for update to authenticated using (auth.uid() = requester_id or auth.uid() = partner_id);

-- Challenges always belong to an accepted synchronization; both people in
-- that synchronization see and manage the challenge (contracts/synchronization
-- .contract.md Decision 005, systems/challenge-engine.md).
create policy "challenges_select" on public.challenges
  for select to authenticated using (public.is_synchronization_party(synchronization_id));
create policy "challenges_insert" on public.challenges
  for insert to authenticated
  with check (auth.uid() = creator_id and public.is_synchronization_party(synchronization_id));
create policy "challenges_update" on public.challenges
  for update to authenticated using (public.is_synchronization_party(synchronization_id));

create policy "challenge_participants_select" on public.challenge_participants
  for select to authenticated using (
    exists (
      select 1 from public.challenges c
      where c.id = challenge_participants.challenge_id
        and public.is_synchronization_party(c.synchronization_id)
    )
  );
create policy "challenge_participants_insert" on public.challenge_participants
  for insert to authenticated with check (
    exists (
      select 1 from public.challenges c
      where c.id = challenge_participants.challenge_id
        and public.is_synchronization_party(c.synchronization_id)
    )
  );
create policy "challenge_participants_update_own" on public.challenge_participants
  for update to authenticated using (auth.uid() = user_id) with check (auth.uid() = user_id);
