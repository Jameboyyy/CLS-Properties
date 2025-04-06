import React, { useState, useEffect, useRef } from "react";
import "./galleryP.css";
import { useParams } from "react-router-dom";
import { supabase } from "../services/supabaseClient";
import { fetchPropertyImages } from "../services/api/propertyImages";


function fromSlug(slug) {
  return slug
    .split("-")
    .map((word) => 
      word.toLowerCase() === "and" ? "and" : word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join(" ")
    .replace(" 26 3", " 26-3")
    .replace(" 24 12", " 24-12")
    .replace(" 27 19", " 27-19");
}

const GalleryP = () => {
  const [images, setImages] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [imageSpans, setImageSpans] = useState([]);
  const hasInitializedSpans = useRef(false);

  const { city, property } = useParams(); // you'll need to extract these from your route
  const [propertyId, setPropertyId] = useState(null); // this will be fetched based on slug

  useEffect(() => {
    async function fetchPropertyAndImages() {
      const formattedName = fromSlug(property); // 🔥 deslugify to match DB
  
      const { data: propData, error: propError } = await supabase
        .from("properties")
        .select("id")
        .ilike("property_name", formattedName)
        .single();
  
      if (propError || !propData) {
        console.error("❌ Property not found:", propError);
        return;
      }
  
      const images = await fetchPropertyImages(propData.id);
      setImages(images);
    }
  
    fetchPropertyAndImages();
  }, [property]);

  const rowLayouts = [[1, 1, 1], [2, 1], [1, 2]];

  const getRandomRowLayout = () =>
    rowLayouts[Math.floor(Math.random() * rowLayouts.length)];

  const setGridSpans = () => {
    const spans = [];
    let currentRowWidth = 0;
    let rowIndex = 0;
    const totalCards = images.length;
    let previousRowLayout = null;

    while (rowIndex * 3 < totalCards) {
      let rowLayout = getRandomRowLayout();
      while (rowLayout === previousRowLayout) {
        rowLayout = getRandomRowLayout();
      }

      rowLayout.forEach((span) => {
        if (currentRowWidth + span <= 3) {
          spans.push(span);
          currentRowWidth += span;
        }
      });

      previousRowLayout = rowLayout;
      rowIndex += 1;
      if (currentRowWidth === 3) {
        currentRowWidth = 0;
      }
    }

    setImageSpans(spans);
  };

  useEffect(() => {
    if (images.length && !hasInitializedSpans.current) {
      setGridSpans();
      hasInitializedSpans.current = true;
    }
  }, [images]);

  const handleImageClick = (index) => {
    setActiveIndex(index);
    setIsExpanded(true);
  };

  const handleCloseExpandedImage = () => {
    setIsExpanded(false);
    setActiveIndex(null);
  };

  return (
    <section className="carousel-container">
      <div className="carousel-heading">
        <h2 className="property__heading">{property?.replace(/-/g, " ")}</h2>
      </div>

      <div className="image-grid">
        {images.map((img, index) => {
          const columnSpan = imageSpans[index] || 1;
          return (
            <div
              key={img.id}
              className="image-card"
              style={{ gridColumn: `span ${columnSpan}` }}
              onClick={() => handleImageClick(index)}
            >
              <img src={img.image_url} alt={`Image ${index + 1}`} className="card-image" />
            </div>
          );
        })}
      </div>

      {isExpanded && activeIndex !== null && (
        <div className="expanded-image-container" onClick={handleCloseExpandedImage}>
          <div className="expanded-card">
            <img
              src={images[activeIndex].image_url}
              alt={`Expanded Image ${activeIndex + 1}`}
              className="expanded-image"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default GalleryP;
