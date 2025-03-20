import { supabase } from "../supabaseClient";

export async function fetchAboutUs() {
    const { data, error } = await supabase
        .from("aboutus") // aboutus__section table
        .select('*') // selects all columns
        .limit(1) //retrieves only 1 row
        .maybeSingle();

    console.log("Fetched data:", data);
    console.log("Error:", error);

    if (error) {
        console.error("Error fetching aboutus section:", error);
        return null;
    }
    return data;
}