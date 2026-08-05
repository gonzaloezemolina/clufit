import { useMutation } from '@tanstack/react-query';

import { supabase } from '@/lib/supabase';
import { useUserId } from '@/hooks/use-profile';

interface NewMainGoal {
  title: string;
  category: string;
  targetDate: string;
}

/** Creates the user's first goal, marked as the Objetivo Principal (docs/01-vision.md). */
export function useCreateMainGoal() {
  const userId = useUserId();

  return useMutation({
    mutationFn: async ({ title, category, targetDate }: NewMainGoal) => {
      const { error } = await supabase.from('goals').insert({
        user_id: userId!,
        title,
        category,
        target_date: targetDate,
        is_main_goal: true,
      });
      if (error) throw error;
    },
  });
}
