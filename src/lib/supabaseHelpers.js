import { supabase } from '../constants/supabase';

export async function fetchSessionUser() {
  if (!supabase) return null;
  const { data } = await supabase.auth.getSession();
  return data?.session?.user || null;
}

export async function signOutUser() {
  if (!supabase) return { error: null };
  return supabase.auth.signOut();
}
