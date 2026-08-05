import "server-only";

import { createSupabaseClient } from "@clufit/api";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

/**
 * Service-role client — bypasses RLS. Server-only: never import this from
 * client components, and never expose SUPABASE_SERVICE_ROLE_KEY to the browser.
 */
export const supabaseAdmin = createSupabaseClient(supabaseUrl, serviceRoleKey);
