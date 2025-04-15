import React, { useEffect, useState } from 'react';
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

      {/* Swiper for mobile/tablet only, hidden on desktop */}
      <div className="eoc__carousel--mobile">
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
          }}
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
      </div>

      {/* Grid layout for desktop, hidden on smaller screens */}
      <div className="eoc__card--wrapper eoc__grid--desktop">
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
    </section>
  );
};

export default Eoc;
