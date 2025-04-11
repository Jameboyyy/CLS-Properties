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

const Eoc = () => {
    const [cityData, setCityData] = useState([]);
    const [isCarousel, setIsCarousel] = useState(window.innerWidth <= 1024);
    const [slidesPerView, setSlidesPerView] = useState(window.innerWidth < 768 ? 1 : 2);

    const eocRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            setIsCarousel(window.innerWidth <= 1024);
            setSlidesPerView(window.innerWidth < 768 ? 1 : 2);
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
            <h2 className="eoc__heading">
                Explore Our Cities
            </h2>

            <div>
                {isCarousel ? (
                    <Swiper
                        key={isCarousel ? "carousel" : "grid"}  // Add a key to force re-render
                        modules={[Autoplay, Navigation, Pagination]}
                        spaceBetween={30}
                        slidesPerView={slidesPerView}  // Use slidesPerView from state
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
                            <div key={index} className="eoc__card">
                                <Link to={`/properties/${city.city}`} className="eoc__card--link">
                                    <div className="eoc__card--imgwrapper">
                                        <img src={city.main_img_url} alt={city.city} className="city__img" />
                                    </div>
                                </Link>
                                <h4 className="city__name">{city.city}</h4>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Eoc;
