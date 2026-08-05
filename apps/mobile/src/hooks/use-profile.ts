import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { supabase } from '@/lib/supabase';
import { useAuthStore } from '@/store/auth.store';

export function useUserId() {
  return useAuthStore((state) => state.session?.user.id);
}

export interface Profile {
  user_id: string;
  height: number | null;
  weight: number | null;
  target_weight: number | null;
  activity_level: string | null;
  fitness_level: string | null;
  trains_days_per_week: number | null;
  goes_to_gym: boolean | null;
  wake_time: string | null;
  sleep_time: string | null;
  notification_preferences: Record<string, boolean>;
  privacy_settings: Record<string, boolean>;
  onboarding_completed_at: string | null;
}

export function useProfile() {
  const userId = useUserId();

  return useQuery({
    queryKey: ['profile', userId],
    queryFn: async (): Promise<Profile | null> => {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('user_id', userId!)
        .maybeSingle();
      if (error) throw error;
      return data;
    },
    enabled: !!userId,
  });
}

export function useUpdateProfile() {
  const userId = useUserId();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (updates: Partial<Omit<Profile, 'user_id'>>) => {
      // Upsert instead of update: the handle_new_user() trigger creates an
      // empty profiles row for new sign-ups, but accounts created before that
      // trigger existed (or edge cases) might not have one yet.
      const { error } = await supabase.from('profiles').upsert({ user_id: userId!, ...updates });
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['profile', userId] });
    },
  });
}

export function useUpdateUser() {
  const userId = useUserId();

  return useMutation({
    mutationFn: async (updates: { fullname?: string; birthday?: string; gender?: string }) => {
      const { error } = await supabase.from('users').update(updates).eq('id', userId!);
      if (error) throw error;
    },
  });
}
