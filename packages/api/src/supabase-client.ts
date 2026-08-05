import { createClient, type SupabaseClient } from "@supabase/supabase-js";

/**
 * Framework-agnostic factory: the mobile app (Expo) and the admin app (Next.js)
 * read their own env vars (EXPO_PUBLIC_* / NEXT_PUBLIC_*) and pass them in here,
 * so this package stays independent of either framework's env var convention.
 */
export function createSupabaseClient(supabaseUrl: string, supabaseAnonKey: string): SupabaseClient {
  return createClient(supabaseUrl, supabaseAnonKey);
}
