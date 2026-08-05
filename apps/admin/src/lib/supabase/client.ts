import { createSupabaseClient } from "@clufit/api";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

/** Browser-safe client, scoped by RLS to the signed-in admin user. */
export const supabase = createSupabaseClient(supabaseUrl, supabaseAnonKey);
