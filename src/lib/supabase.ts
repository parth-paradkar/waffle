import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

export const getSupabaseClient = () => {
    if (!supabaseUrl || !supabaseAnonKey) {
        throw new Error('Missing env variables for Supabase')
    }
    return createClient(supabaseUrl, supabaseAnonKey)
}