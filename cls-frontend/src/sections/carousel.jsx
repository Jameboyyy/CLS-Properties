import React, {useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "./carousel.css";

const Carousel = () => {
  const swiperRef = useRef(null);
  const images = [
    "/images/image1.jpg",
    "/images/image2.jpg",
    "/images/image3.jpg",
    "/images/image4.jpg",
    "/images/image5.jpg",
    "/images/image6.jpg",
    "/images/image7.jpg",
  ];

  const goNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  return (
    <section id="carousel--container">
      <div className="carousel--heading--wrapper">
        <div className="carousel--heading">
          <h2>Explore Our Properties</h2>
        </div>
      </div>

    <div className="carousel--image--holder">
      <Swiper
          className="carousel--images"
          modules={[Navigation, Pagination, Scrollbar, Autoplay]}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false
          }}
          spaceBetween={0}
          slidesPerView={5} // Show 5 images at once
          loopAdditionalSlides={1}
          loop={true}
          centeredSlides={true}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 0,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 0,
            },
          }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} className="carousel--slide">
              <img
                src={image}
                alt={`Image ${index + 1}`}
                className="carousel--image"
              />
            </SwiperSlide>
          ))}
        </Swiper>
    </div>
    </section>
  );
};

export default Carousel;
