// fetchData.js
import { Console } from "console";
import { supabase } from "./supabaseClient";

async function fetchData() {
  let { data: TBL_CAJAS, error } = await supabase.from("TBL_CAJAS").select("*");

  if (error) {
    console.error("Código de error:", error.code);
    console.error("Mensaje de error:", error.message);
    console.error("Detalles:", error.details);
    console.error("Sugerencias:", error.hint);
    return [];
  }

  console.log("Data:", data);

  return data;
}

export default fetchData;
