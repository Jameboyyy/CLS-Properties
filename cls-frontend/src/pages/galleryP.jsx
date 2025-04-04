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

  // Predefined row layout patterns
  const rowLayouts = [
    [1, 1, 1], // All images take 1 column
    [2, 1], // One image takes 2 columns, the other 1
    [1, 2], // One image takes 1 column, the other 2
  ];

  // Function to get a random layout for a row
  const getRandomRowLayout = () => {
    return rowLayouts[Math.floor(Math.random() * rowLayouts.length)];
  };

  // Function to set spans for each image based on row layout
  const setGridSpans = () => {
    const spans = [];
    let currentRowWidth = 0;
    let rowIndex = 0;
    const totalCards = cards.length;

    let previousRowLayout = null; // Variable to track the previous row layout

    // Get layouts for each row
    while (rowIndex * 3 < totalCards) {
      let rowLayout = getRandomRowLayout(); // Get random layout for the row

      // Ensure the layout is not the same as the previous row's layout
      while (rowLayout === previousRowLayout) {
        rowLayout = getRandomRowLayout();
      }

      // Set spans for the current row
      rowLayout.forEach((span) => {
        if (currentRowWidth + span <= 3) {
          spans.push(span);
          currentRowWidth += span;
        }
      });

      previousRowLayout = rowLayout; // Update the previous row layout
      rowIndex += 1;
      if (currentRowWidth === 3) {
        currentRowWidth = 0; // Reset row width when it reaches 3
      }
    }

    setImageSpans(spans);
  };

  // Set spans once when the component mounts
  useEffect(() => {
    if (!hasInitializedSpans.current) {
      setGridSpans(); // Set the layout spans
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
