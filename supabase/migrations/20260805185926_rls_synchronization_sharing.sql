-- Partner read-access into personal data, gated by the per-category toggles
-- in profiles.privacy_settings (modules/perfil.md "Privacidad y Sincronización":
-- "Cada categoría... puede activarse o desactivarse de forma independiente").
--
-- Goals are intentionally excluded here: sharing a goal is an explicit,
-- per-goal action ("Compartir objetivos", "Crear objetivos conjuntos" in
-- contracts/objetivos.contract.md), not a blanket category toggle, and the
-- schema doesn't yet have a per-goal is_shared flag to key off (Phase 2 —
-- see docs/11-roadmap.md "Objetivos compartidos").

create or replace function public.can_view_shared(target_user_id uuid, category text)
returns boolean
language sql
security definer
set search_path = public
stable
as $$
  select exists (
    select 1
    from public.synchronizations s
    join public.profiles p on p.user_id = target_user_id
    where s.status = 'accepted'
      and auth.uid() in (s.requester_id, s.partner_id)
      and target_user_id in (s.requester_id, s.partner_id)
      and auth.uid() <> target_user_id
      and coalesce((p.privacy_settings ->> category)::boolean, false)
  );
$$;

create policy "habits_partner_read" on public.habits
  for select to authenticated using (public.can_view_shared(user_id, 'disciplina'));

create policy "habit_logs_partner_read" on public.habit_logs
  for select to authenticated using (
    exists (
      select 1 from public.habits h
      where h.id = habit_logs.habit_id and public.can_view_shared(h.user_id, 'disciplina')
    )
  );

create policy "workouts_partner_read" on public.workouts
  for select to authenticated using (public.can_view_shared(user_id, 'fitness'));

create policy "workout_sessions_partner_read" on public.workout_sessions
  for select to authenticated using (
    exists (
      select 1 from public.workouts w
      where w.id = workout_sessions.workout_id and public.can_view_shared(w.user_id, 'fitness')
    )
  );

create policy "recovery_checkins_partner_read" on public.recovery_checkins
  for select to authenticated using (public.can_view_shared(user_id, 'recuperacion'));

create policy "meal_logs_partner_read" on public.meal_logs
  for select to authenticated using (public.can_view_shared(user_id, 'nutricion'));

create policy "hydration_logs_partner_read" on public.hydration_logs
  for select to authenticated using (public.can_view_shared(user_id, 'nutricion'));

create policy "procrastination_history_partner_read" on public.procrastination_history
  for select to authenticated using (public.can_view_shared(user_id, 'productividad'));
