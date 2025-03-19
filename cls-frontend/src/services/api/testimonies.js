import { supabase } from "../supabaseClient";

export async function fetchTestimonies() {
    const { data, error } = await supabase
    .from("testimonies")
    .select("name, testimony, testimony__img__url")

    if (error) {
        console.error("Error fetching testimonies: ", error)
        return null;
    }
    return data;
}