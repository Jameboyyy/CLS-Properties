import React, { useState, useEffect } from 'react';
import './eoc.css';
import { fetchCities } from '../../services/api/cities';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

const Eoc = () => {
    const [cityData, setCityData] = useState([]);
    const [isCarousel, setIsCarousel] = useState(window.innerWidth <= 1024);
    
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
        <section id="eoc__container">
            <h2 className="eoc__heading">Explore Our Cities</h2>
            {isCarousel ? (
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={30}
                    slidesPerView={window.innerWidth < 768 ? 1 : 2}
                    centeredSlides={true}
                    navigation
                    pagination={{ clickable: true }}
                    loop={true}
                    className="eoc__carousel"
                >
                    {cityData.map((city, index) => (
                        <SwiperSlide key={index} className="eoc__card">
                            <div className="eoc__card--imgwrapper">
                                <img src={city.main_img_url} alt={city.city} className="city__img" />
                            </div>
                            <h5 className="property__amount">
                                {Array.isArray(city.properties?.property) ? city.properties.property.length : 0} Properties
                            </h5>
                            <h4 className="city__name">{city.city}</h4>
                        </SwiperSlide>
                    ))}
                </Swiper>
            ) : (
                <div className="eoc__card--wrapper">
                    {cityData.map((city, index) => (
                        <div key={index} className="eoc__card">
                            <div className="eoc__card--imgwrapper">
                                <img src={city.main_img_url} alt={city.city} className="city__img" />
                            </div>
                            <h5 className="property__amount">
                                {Array.isArray(city.properties?.property) ? city.properties.property.length : 0} Properties
                            </h5>
                            <h4 className="city__name">{city.city}</h4>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
};

export default Eoc;