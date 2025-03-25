import { supabase } from "../supabaseClient";

export async function fetchOurLeaders() {
    const { data, error } = await supabase
        .from("ourleaders")
        .select('*')

    console.log("Fetched Leaders data: ", data);
    console.log("Error: ", error);

    if (error) {
        console.error("Error fetching ourleaders:", error);
        return null;
    }

    return data;
}