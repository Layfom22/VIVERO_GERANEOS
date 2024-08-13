// supabaseClient.js
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';


// Reemplaza con la URL y la clave de tu proyecto Supabase
const supabaseUrl = 'https://ivhdwqxxxchhkuhtstjl.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml2aGR3cXh4eGNoaGt1aHRzdGpsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI2MTM2NjMsImV4cCI6MjAzODE4OTY2M30.sEIiZaU5UEF9KhMJyKN-wn9OdqDLBC3qL1Ss7B1KRMY';
//const supabaseUrl = process.env.SUPABASEURL;
//const supabaseKey = process.env.SUPABASEKEY;


export const supabase = createClient(supabaseUrl, supabaseKey);