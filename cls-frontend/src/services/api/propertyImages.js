import { supabase } from "../supabaseClient";

export async function fetchPropertyImages(propertyId) {
    const { data, error } = await supabase
    .from("property_images")
    .select("id, image_url")
    .eq("property_id", propertyId);
    
    if(error) {
        console.error("Error fetching property images: ", error);
        return [];
    }

    return data;
}