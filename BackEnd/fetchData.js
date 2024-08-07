// fetchData.js
import { supabase } from './supabaseClient';

async function fetchData() {
  const { data, error } = await supabase
    .from('TBL_CAJAS')
    .select('*');

  if (error) {
    console.error('Error al obtener datos:', error);
    return [];
  }

  return data;
}

export default fetchData;
