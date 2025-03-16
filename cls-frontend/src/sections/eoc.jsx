import React, { useState, useEffect } from 'react';
import './eoc.css';
import { fetchCities } from '../services/api/cities';

const Eoc = () => {

    const [cityData, setCityData] = useState([]);

    useEffect(() => {
        async function loadCityData() {
            const data = await fetchCities();
            setCityData(data);
        }
        loadCityData()
    }, []);

    return (
        <section id="eoc__container">
            <div className="eoc__wrapper">
                <h2 className="eoc__heading">Explore Our Cities</h2>
                <div className="eoc__card--wrapper">
                    {cityData?.slice(0, 5).map((city, index) => (
                        <div key={index} className="eoc__card">
                                {console.log("City:", city.city, "Properties:", city.properties)}
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
            </div>
        </section>
    );
}

export default Eoc;
