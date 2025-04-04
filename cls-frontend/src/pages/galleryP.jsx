import React, { useState, useEffect, useRef } from "react";
import "./galleryP.css"; // Make sure to import the CSS

const GalleryP = () => {
  const [isExpanded, setIsExpanded] = useState(false); // State for full-screen image view
  const [activeIndex, setActiveIndex] = useState(null); // Index of the selected image
  const [imageSpans, setImageSpans] = useState([]); // State to store random spans for each image
  const hasInitializedSpans = useRef(false); // Ref to ensure spans are set only once

  const cards = [
    {
      image: "/images/image1.jpg",
      title: "Card 1",
    },
    {
      image: "/images/image2.jpg",
      title: "Card 2",
    },
    {
      image: "/images/image3.jpg",
      title: "Card 3",
    },
    {
      image: "/images/image4.jpg",
      title: "Card 4",
    },
    {
      image: "/images/image5.jpg",
      title: "Card 5",
    },
    {
      image: "/images/image6.jpg",
      title: "Card 6",
    },
    {
        image: "/images/image7.jpg",
        title: "Card 7",
    },
    {
        image: "/images/image2.jpg",
        title: "Card 8",
    },
  ];

  // Function to get random grid span (ensuring the row always fills)
  const getRandomGridSpan = () => {
    return Math.random() > 0.5 ? 1 : 2; // Randomly return 1 or 2 for column span
  };

  // Set random spans for the images only once when the component mounts
  useEffect(() => {
    if (!hasInitializedSpans.current) {
      const spans = [];
      let currentRowWidth = 0;
      
      // Loop through each image and assign a column span
      cards.forEach(() => {
        let span;
        if (currentRowWidth === 3) {
          span = 1; // If row is already full, the next image must take 1 column
        } else {
          span = getRandomGridSpan();
          if (currentRowWidth + span > 3) {
            span = 1; // If adding span exceeds 3 columns, reset to 1 column
          }
        }
        spans.push(span);
        currentRowWidth += span; // Update current row width
        if (currentRowWidth === 3) {
          currentRowWidth = 0; // Reset row width if it reaches 3
        }
      });
      
      setImageSpans(spans);
      hasInitializedSpans.current = true; // Mark spans as initialized
    }
  }, []); // Empty dependency array to run effect only once on mount

  // Handle image click to open the full-screen card
  const handleImageClick = (index) => {
    setActiveIndex(index); // Set the active index for the selected image
    setIsExpanded(true); // Open full-screen view on image click
  };

  // Close the expanded image view
  const handleCloseExpandedImage = () => {
    setIsExpanded(false);
    setActiveIndex(null); // Reset the active index when closed
  };

  return (
    <section className="carousel-container">
      <div className="carousel-heading">
        <h2>City Name Here</h2>
      </div>

      {/* Image Grid */}
      <div className="image-grid">
        {cards.map((card, index) => {
          const columnSpan = imageSpans[index]; // Get the fixed grid span for this image

          return (
            <div
              key={index}
              className="image-card"
              style={{
                gridColumn: `span ${columnSpan}`, // Apply the fixed column span
              }}
              onClick={() => handleImageClick(index)}
            >
              <img
                src={card.image}
                alt={card.title}
                className="card-image"
              />
            </div>
          );
        })}
      </div>

      {/* Full-Screen Expanded Image View with Text */}
      {isExpanded && activeIndex !== null && (
        <div className="expanded-image-container" onClick={handleCloseExpandedImage}>
          <div className="expanded-card">
            <img
              src={cards[activeIndex].image}
              alt={`Expanded Image ${activeIndex + 1}`}
              className="expanded-image"
            />
            <div className="expanded-text">
              <p>{cards[activeIndex].title}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GalleryP;
