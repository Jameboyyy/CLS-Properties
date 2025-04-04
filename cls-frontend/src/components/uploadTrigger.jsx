import React from 'react';
import { insertImagesForProperty } from '../services/api/uploadImagesFromFolder';

    const propertiesToInsert = [
        {
            city: "Bohol",
            propertyFolderName: "Ashton",
            propertyId: "fecf337a-9771-4e8a-a650-5eeab01e376b",
        },
        {
            city: "Cebu",
            propertyFolderName: "Daanbantayan",
            propertyId: "0eb3c232-ca1f-41f2-9c0d-3c1a9dbe09ab",
        },
        {
            city: "Cebu",
            propertyFolderName: "Greenville Heights 26-3",
            propertyId: "19213864-40f6-4fa5-8a08-e7d5178b14c1",
        },
        {
            city: "Cebu",
            propertyFolderName: "Greenville Heights 24-12",
            propertyId: "c2f737fa-279c-40fb-bb72-061d877d4683",
        },
        {
            city: "Cebu",
            propertyFolderName: "Greenville Heights 27-19",
            propertyId: "cd131ca3-9d56-4439-995c-7834e3aedd3b",
        },
        {
            city: "Dumaguete",
            propertyFolderName: "Talay",
            propertyId: "c0f4dc7b-928e-4f06-a1da-245e1f99ebc7",
        },
        {
            city: "Valencia",
            propertyFolderName: "Jawa",
            propertyId: "173a0c95-4d87-466e-b2dc-aa80527577de",
        },
    ];


const UploadTrigger = () => {

    const handleBulkInsert = async () => {
        for (const prop of propertiesToInsert) {
            console.log(` Inserting images for ${prop.propertyFolderName} in ${prop.city}`);
            await insertImagesForProperty({
                city: prop.city,
                propertyFolderName: prop.propertyFolderName,
                propertyId: prop.propertyId,
            });
        }

        alert(" All images inserted for all properties!");
    };

    return (
        <div style={{ padding: "2rem" }}>
          <h2>🛠️ Dev Tool: Bulk Insert Property Images</h2>
          <button
            onClick={handleBulkInsert}
            style={{
              padding: "0.75rem 1.5rem",
              fontSize: "16px",
              backgroundColor: "#2d6a4f",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Insert All Property Galleries
          </button>
        </div>
      );
    };
export default UploadTrigger;
