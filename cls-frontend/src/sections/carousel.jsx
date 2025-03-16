import React, { useState } from "react";
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

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="landscapeH__container">
      <div className="carousel">
        <div className="carousel--images">
          <img
            src={images[(currentIndex - 2 + images.length) % images.length]}
            alt="Previous Image"
            className="carousel--image previous"
          />
          <img
            src={images[(currentIndex - 1 + images.length) % images.length]}
            alt="Previous Image"
            className="carousel--image behind"
          />
          <img
            src={images[currentIndex]}
            alt="Current Image"
            className="carousel--image current"
          />
          <img
            src={images[(currentIndex + 1) % images.length]}
            alt="Next Image"
            className="carousel--image next"
          />
          <img
            src={images[(currentIndex + 2) % images.length]}
            alt="Next Image"
            className="carousel--image next--far"
          />
        </div>

        {/* Dots Navigation */}
        <div className="carousel--dots--container">
          <button
            className="carousel--arrow--left"
            onClick={prevImage}
          >
            <i className="fas fa-chevron-left"></i>
          </button>

          <div className="carousel--dots">
            {images.map((_, index) => (
              <div
                key={index}
                className={`dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
              ></div>
            ))}
          </div>

          <button
            className="carousel--arrow--right"
            onClick={nextImage}
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
