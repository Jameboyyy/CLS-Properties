import { supabase } from "../supabaseClient";

// Accepts city name like "bohol" from the URL
export async function fetchPropertiesByCityName(cityName) {
  // Step 1: Get city ID based on name
  const { data: cityData, error: cityError } = await supabase
    .from("cities")
    .select("id")
    .ilike("city", cityName) // case-insensitive match
    .single();

  if (cityError || !cityData) {
    console.error("City not found:", cityError);
    return [];
  }

  // Step 2: Fetch properties for that city_id
  const { data: properties, error: propError } = await supabase
    .from("properties")
    .select("id, property_name, cover_img_url, property_desc")
    .eq("city_id", cityData.id);

  if (propError) {
    console.error("Error fetching properties: ", propError);
    return [];
  }

  return properties;
}
