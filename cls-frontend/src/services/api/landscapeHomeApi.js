import { supabase } from "../supabaseClient";

export async function fetchLandscapeHome() {
  const { data, error } = await supabase
    .from("landscapeh__section") // landscapeh__section table
    .select('*') // selects all columns
    .limit(1) //retrieves only 1 row
    .maybeSingle();

  console.log("Fetched data:", data);
  console.log("Error:", error);

  if (error) {
    console.error("Error fetching landscapeH section:", error);
    return null;
  }
  return data;
}
