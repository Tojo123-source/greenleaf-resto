import { createClient } from '@supabase/supabase-js';
import type { Reservation } from '@/types';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  // Avoid printing secret values; only indicate presence
  console.error('Supabase env variables missing or empty', { supabaseUrl: !!supabaseUrl, supabaseAnonKey: !!supabaseAnonKey });
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function saveReservation(reservation: Reservation) {
  const { data, error } = await supabase
    .from('reservations')
    .insert([reservation])
    .select();

  if (error) {
    console.error('Supabase insert error', { status: (error as any)?.status, message: error.message });
    throw error;
  }

  return data;
}
