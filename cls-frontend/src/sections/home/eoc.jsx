import React, { useState, useEffect } from 'react';
import './eoc.css';
import { fetchCities } from '../../services/api/cities';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Eoc = () => {
    const [cityData, setCityData] = useState([]);
    const [isCarousel, setIsCarousel] = useState(window.innerWidth < 1300);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
            setIsCarousel(window.innerWidth < 1300);
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

    // Slick Carousel Settings
    const [currentSlide, setCurrentSlide] = useState(0);

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        slidesToShow: isCarousel && cityData.length > 0 
            ? (windowWidth < 900 ? 1 : windowWidth < 1100 ? 2 : 3) // Adjust slides based on width
            : 5,  
        slidesToScroll: 1,
        speed: 500,
        initialSlide: 0, 
        dots: true,
        arrows: true,
        beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex), 
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
                breakpoint: 1100,
                settings: {
                    slidesToShow: 2, // ✅ Show 2 cards here
                    slidesToScroll: 1,
                    centerPadding: "30px",
                }
            },
            {
                breakpoint: 900,
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
                                {Array.isArray(city.properties?.property) ? city.properties.property.length : 0} Properties
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
