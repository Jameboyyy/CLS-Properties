import React, { useState, useEffect } from 'react';
import './eoc.css';
import { fetchCities } from '../services/api/cities';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Eoc = () => {
    const [cityData, setCityData] = useState([]);
    const [isCarousel, setIsCarousel] = useState(window.innerWidth < 1300);

    useEffect(() => {
        async function loadCityData() {
            const data = await fetchCities();
            setCityData(data);
        }
        loadCityData();

        const handleResize = () => {
            setIsCarousel(window.innerWidth < 1300);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Slick Carousel Settings
    const settings = {
        className: "center",
        centerMode: true,  // Ensures the center slide is in focus
        infinite: true,  // Allows smooth looping
        slidesToShow: window.innerWidth < 600 ? 1 : 3,  // Show 1 slide < 600px, 3 slides < 1300px
        slidesToScroll: 1,  // Moves one slide at a time
        speed: 500,
        initialSlide: Math.floor(cityData.length / 2),  // Starts at the middle slide
        dots: true,  // Enables pagination dots
        arrows: true,  // Enables next/prev buttons
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    centerPadding: "40px",
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: "20px",
                }
            }
        ]
    };
    

    return (    
        <section id="eoc__container">
            <h2 className="eoc__heading">Explore Our Cities</h2>
            
            {isCarousel ? (
                <Slider {...settings} className="eoc__carousel">
                    {cityData.slice(0, 5).map((city, index) => (
                        <div key={index} className="eoc__card">
                            <div className="eoc__card--imgwrapper">
                                <img src={city.main_img_url} alt={city.city} className="city__img" />
                            </div>
                            <h5 className="property__amount">
                                {Array.isArray(city.properties.property) ? city.properties.property.length : 0} Properties
                            </h5>
                            <h4 className="city__name">{city.city}</h4>
                        </div>
                    ))}
                </Slider>
            ) : (
                <div className="eoc__card--wrapper">
                    {cityData.slice(0, 5).map((city, index) => (
                        <div key={index} className="eoc__card">
                            <div className="eoc__card--imgwrapper">
                                <img src={city.main_img_url} alt={city.city} className="city__img" />
                            </div>
                            <h5 className="property__amount">
                                {Array.isArray(city.properties.property) ? city.properties.property.length : 0} Properties
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
