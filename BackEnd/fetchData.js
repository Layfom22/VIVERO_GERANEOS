// fetchData.js
import { supabase } from "./supabaseClient.js";

async function fetchData() {
  let { data, error } = await supabase.from("TBL_CAJAS").select("*");

  if (error) {
    console.error('Error:', error.message);
    return [];
  }

  console.log("Data:", data);

  return data;
}

export default fetchData;
