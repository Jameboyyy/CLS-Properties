import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { fetchPropertiesByCityName } from '../services/api/properties';

const ProductP = () => {

    const { city } = useParams();
    const navigate = useNavigate();
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        async function loadData() {
            console.log("Fetching properties for: ", city);
            const props = await fetchPropertiesByCityName(city);
            console.log("Fetched properties: ", props);
            setProperties(props);
        }

        loadData();
    }, [city]);

    return (
        <div className="product__page--container">
            <h2 className='product__page--title'>Properties in {city.charAt(0).toUpperCase() + city.slice(1)}</h2>
            <div className="property__list">
                {properties.length === 0 ? (
                <p>No properties found for this city.</p>
                ) : (
                properties.map((property) => (
                    <div
                    className="property-card"
                    key={property.id}
                    onClick={() =>
                        navigate(`/properties/${city}/${property.property_name.toLowerCase().replace(/\s+/g, "-")}`)
                    }
                    style={{ cursor: "pointer" }}
                    >
                    <img src={property.cover_img_url} alt={property.property_name} />
                    <h3>{property.property_name}</h3>
                    <p>{property.property_desc}</p>
                    </div>
                ))
                )}
            </div>
        </div>
    );
}

export default ProductP;
