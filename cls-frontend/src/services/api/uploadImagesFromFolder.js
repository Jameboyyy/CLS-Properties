import { supabase } from "../supabaseClient";

export async function insertImagesForProperty({ city, propertyFolderName, propertyId }) {
    const folderPath = `cities/${city}/${propertyFolderName}`;
  
    console.log("📂 Folder path:", folderPath);
  
    const result = await supabase
      .storage
      .from("company-assets")
      .list(folderPath, { limit: 100 });
  
    console.log("🧪 Raw result:", result);
  
    const files = result.data;
    const error = result.error;
  
    if (error) {
      console.error("Error listing images:", error);
      return;
    }
  
    if (!files || files.length === 0) {
      console.warn(`⚠️ No files found in ${folderPath}`);
      return;
    }
  
    const imageUrls = files.map((file) => {
      const { publicUrl } = supabase
        .storage
        .from("company-assets")
        .getPublicUrl(`${folderPath}/${file.name}`).data;
  
      return publicUrl;
    });
  
    const inserts = imageUrls.map((url) => ({
      property_id: propertyId,
      image_url: url,
    }));
  
    const { error: insertError } = await supabase
      .from("property_images")
      .insert(inserts);
  
    if (insertError) {
      console.error("Insert failed:", insertError);
    } else {
      console.log(`✅ Inserted ${inserts.length} images for ${propertyFolderName}`);
    }
  }
  