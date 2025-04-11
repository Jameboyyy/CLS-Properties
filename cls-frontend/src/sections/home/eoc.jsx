import React, { useState, useEffect, useRef } from 'react';
import './eoc.css';
import { fetchCities } from '../../services/api/cities';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            delay: i * 0.4, 
        },
    }),
};

const Eoc = () => {
    const [cityData, setCityData] = useState([]);
    const [isCarousel, setIsCarousel] = useState(window.innerWidth <= 1024);

    const eocRef = useRef(null);
    const isInView = useInView(eocRef, { once: true, margin: "-50px" });

    useEffect(() => {
        const handleResize = () => {
            setIsCarousel(window.innerWidth <= 1024);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        async function loadCityData() {
            const data = await fetchCities();
            setCityData(data);
        }
        loadCityData();
    }, []);

    return (
        <section id="eoc__container" ref={eocRef}>
            <motion.h2
                className="eoc__heading"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                Explore Our Cities
            </motion.h2>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1.5, ease: "easeOut" }}
            >
                {isCarousel ? (
                    <Swiper
                        modules={[Autoplay, Navigation, Pagination]}
                        spaceBetween={30}
                        slidesPerView={window.innerWidth < 768 ? 1 : 2}
                        centeredSlides={true}
                        navigation
                        pagination={{ clickable: true }}
                        loop={true}
                        autoplay={{ delay: 2000, disableOnInteraction: false }}
                        className="eoc__carousel"
                    >
                        {cityData.map((city, index) => (
                            <SwiperSlide key={index} className="eoc__card">
                                <div className="eoc__card--imgwrapper">
                                    <img src={city.main_img_url} alt={city.city} className="city__img" />
                                </div>
                                <h4 className="city__name">{city.city}</h4>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                ) : (
                    <div className="eoc__card--wrapper">
                        {cityData.map((city, index) => (
                            <motion.div
                                key={index}
                                className="eoc__card"
                                variants={cardVariants}
                                initial="hidden"
                                animate={isInView ? "visible" : "hidden"}
                                custom={index}
                            >
                                <Link to={`/properties/${city.city}`} className="eoc__card--link">
                                    <div className="eoc__card--imgwrapper">
                                        <img src={city.main_img_url} alt={city.city} className="city__img" />
                                    </div>
                                </Link>
                                <h4 className="city__name">{city.city}</h4>
                            </motion.div>
                        ))}
                    </div>
                )}
            </motion.div>
        </section>
    );
};

export default Eoc;
