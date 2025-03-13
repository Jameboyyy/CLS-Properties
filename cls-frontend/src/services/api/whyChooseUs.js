import { supabase } from "../supabaseClient";

export async function fetchWhyChooseUs() {
  const { data, error } = await supabase
    .from("whychooseus__section") // landscapeh__section table
    .select('subheading, reasons')
    .limit(1) //retrieves only 1 row
    .maybeSingle();

  console.log("Fetched whychooseus data:", data);
  console.log("Error:", error);

  if (error) {
    console.error("Error fetching whyChooseUs section:", error);
    return null;
  }
  return data;
}
