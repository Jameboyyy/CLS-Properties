import React, { useState, useEffect } from "react";
import "./carousel.css";

const Carousel = () => {
  const images = [
    "/images/image1.jpg",
    "/images/image2.jpg",
    "/images/image3.jpg",
    "/images/image4.jpg",
    "/images/image5.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState(2); // Start with the third image (index 2)
  const [transitioning, setTransitioning] = useState(false); // To track transition state

  // Function to move to the next image
  const nextImage = () => {
    if (transitioning) return; // Prevent change during transition
    setTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to move to the previous image
  const prevImage = () => {
    if (transitioning) return; // Prevent change during transition
    setTransitioning(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Handle click on an image
  const handleImageClick = (index) => {
    setCurrentIndex(index); // Set current image to clicked image
  };

  // Automatically move to the next image at a set interval
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage(); // Trigger next image automatically
    }, 3000); // Change image every 3 seconds

    // Clear interval when the component unmounts
    return () => clearInterval(interval);
  }, [currentIndex, transitioning]); // Effect will depend on currentIndex

  // Reset transitioning state after the animation completes
  useEffect(() => {
    if (!transitioning) return;
    const timeout = setTimeout(() => setTransitioning(false), 500); // Wait for transition to finish
    return () => clearTimeout(timeout);
  }, [transitioning]);

  // Define the image offsets to maintain the structure
  const imageOffsets = [-2, -1, 0, 1, 2];

  return (
    <section id="landscapeH__container">
      <div className="carousel">
        <div className="carousel--images">
          {imageOffsets.map((offset) => {
            const imageIndex = (currentIndex + offset + images.length) % images.length;
            const imageClasses = [
              "carousel--image",
              offset === -2 && "previous",
              offset === -1 && "behind",
              offset === 0 && "current",
              offset === 1 && "next",
              offset === 2 && "next--far",
              transitioning && "transitioning" // Add transitioning class for smooth effect
            ]
              .filter(Boolean)
              .join(" ");

            return (
              <img
                key={imageIndex}
                src={images[imageIndex]}
                alt={`Image ${imageIndex}`}
                className={imageClasses}
                onClick={() => handleImageClick(imageIndex)}
              />
            );
          })}
        </div>

        {/* Dots Navigation */}
        <div className="carousel--dots--container">
          <button
            className="carousel--arrow--left"
            onClick={prevImage}
          >
            <i className="fa-sharp fa-solid fa-arrow-left"></i>
          </button>

          <div className="carousel--dots">
            {images.map((_, index) => (
              <div
                key={index}
                className={`dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => handleImageClick(index)}
              ></div>
            ))}
          </div>

          <button
            className="carousel--arrow--right"
            onClick={nextImage}
          >
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
