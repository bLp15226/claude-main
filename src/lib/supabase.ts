import { createClient, type SupabaseClient } from '@supabase/supabase-js'

const url = import.meta.env.VITE_SUPABASE_URL
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

/**
 * True only when both Supabase env vars are present. The app uses this to
 * decide between the local (device) data layer and the cloud one — see
 * src/features/groceries/repo.ts.
 */
export const isSupabaseConfigured = Boolean(url && anonKey)

/**
 * Shared Supabase client, or null when the app isn't configured for cloud.
 * Always guard with isSupabaseConfigured before using it.
 */
export const supabase: SupabaseClient | null = isSupabaseConfigured
  ? createClient(url!, anonKey!)
  : null
