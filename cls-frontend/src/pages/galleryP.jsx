import React, { useState } from "react";
import "./galleryP.css"; // Make sure to import the CSS

const GalleryP = () => {
  const [isExpanded, setIsExpanded] = useState(false); // State for full-screen image view
  const [activeIndex, setActiveIndex] = useState(null); // Index of the selected image

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
  ];

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
        <h2>Explore Our Cards</h2>
      </div>

      {/* Image Grid */}
      <div className="image-grid">
        {cards.map((card, index) => (
          <div key={index} className="image-card" onClick={() => handleImageClick(index)}>
            <img
              src={card.image}
              alt={card.title}
              className="card-image"
            />
          </div>
        ))}
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
              {/* Single line of text below the expanded image */}
              <p>{cards[activeIndex].title}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GalleryP;
