import React, { useState, useEffect, useRef } from 'react';
import { fetchTestimonies } from '../../services/api/testimonies';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { motion } from "framer-motion"; 

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import './testimony.css';

const Testimony = () => {
    const [testimonyData, setTestimonyData] = useState([]);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);
    const swiperRef = useRef(null);

    useEffect(() => {
        async function loadTestimonyData() {
            const data = await fetchTestimonies();
            setTestimonyData(data);
        }
        loadTestimonyData();
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1024);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.autoplay.start();
        }
    }, [isMobile]);

    return (
        <section id='testimony__container'>
            <motion.h2
                className="testimony__heading"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                What Our Clients Say
            </motion.h2>

            <div className="testimony__wrapper">
                {isMobile ? (
                    <div>
                        <Swiper
                            ref={swiperRef}
                            modules={[Autoplay, Navigation, Pagination]}
                            spaceBetween={20}
                            slidesPerView={1}
                            navigation
                            pagination={{ clickable: true }}
                            loop
                            autoplay={{ delay: 2000, disableOnInteraction: false }}
                            className="testimony__swiper"
                        >
                            {testimonyData.map((testimony, index) => (
                                <SwiperSlide key={index}>
                                    <motion.div
                                        className="testimony__card"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                    >
                                        <div className="t__img__wrapper">
                                            <img src={testimony.testimony__img__url} alt="" className="t__img" />
                                        </div>
                                        <h4 className="t__name">{testimony.name}</h4>
                                        <p className="t__descr">{testimony.testimony}</p>
                                    </motion.div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                ) : (
                    <div className="t__wrapper--container">
                        {testimonyData.slice(0, 3).map((testimony, index) => (
                            <motion.div
                                key={index}
                                className="testimony__card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: index * 0.4 }}
                            >
                                <div className="t__img__wrapper">
                                    <img src={testimony.testimony__img__url} alt="" className="t__img" />
                                </div>
                                <h4 className="t__name">{testimony.name}</h4>
                                <p className="t__descr">{testimony.testimony}</p>
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Testimony;
