import type { Session } from "@supabase/supabase-js";
import { create } from "zustand";

import { supabase } from "@/lib/supabase";

interface AuthState {
  session: Session | null;
  isLoading: boolean;
  initialize: () => () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  session: null,
  isLoading: true,

  /** Loads the current session and subscribes to changes. Returns an unsubscribe function. */
  initialize: () => {
    supabase.auth.getSession().then(({ data }) => {
      set({ session: data.session, isLoading: false });
    });

    const { data: subscription } = supabase.auth.onAuthStateChange((_event, session) => {
      set({ session, isLoading: false });
    });

    return () => subscription.subscription.unsubscribe();
  },
}));
