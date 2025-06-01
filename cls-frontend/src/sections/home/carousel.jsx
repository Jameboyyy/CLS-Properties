import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";
import { motion, useInView } from "framer-motion"; 
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "./carousel.css";

const Carousel = () => {
  const swiperRef = useRef(null);
  const images = [
    "/images/Aston.jpg",
    "/images/24-12.jpg",
    "/images/Talay.jpg",
    "/images/Valencia.jpg",
    "/images/Daan.jpg",
    "/images/26-3.jpg",
    "/images/27-19.jpg",
  ];

  const carouselRef = useRef(null);
  const isInView = useInView(carouselRef, { once: true, margin: "-50px" }); 

  return (
    <section id="carousel--container">
      <div className="carousel--heading--wrapper">
        <motion.div
          className="carousel--heading"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
         >
          <h2>Explore Our Properties</h2>
        </motion.div>
      </div>
      <motion.div
        className="carousel--image--holder"
        ref={carouselRef}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <Swiper
          className="carousel--images"
          modules={[Navigation, Pagination, Scrollbar, Autoplay]}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          spaceBetween={0}
          slidesPerView={5}
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
                alt={`${index + 1}`}
                className="carousel--image"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
};

export default Carousel;
