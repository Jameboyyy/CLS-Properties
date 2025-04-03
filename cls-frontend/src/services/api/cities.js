import { supabase } from "../supabaseClient";

export async function fetchCities() {
  const { data, error } = await supabase
    .from("cities") 
    .select('city, main_img_url')
    .order("city", { ascending: true })

  console.log("Fetched City data:", data);
  console.log("Error:", error);


  if (error) {
    console.error("cities", error);
    return [];
  }
  
  return data;
}