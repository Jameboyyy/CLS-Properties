import { supabase } from "../supabaseClient";

export async function fetchWhyChooseUs() {
  const { data, error } = await supabase
    .from("whychooseus__section") 
    .select('subheading, reasons')
    .limit(1)

  console.log("Fetched whychooseus data:", data);
  console.log("Error:", error);


  if (error) {
    console.error("Error fetching whyChooseUs section:", error);
    return null;
  }
  return data.length > 0 ? data[0] : null;
}
