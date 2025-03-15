import React, { useState, useEffect} from 'react';
import './whyChooseUs.css'
import { fetchWhyChooseUs } from '../services/api/whyChooseUs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faUser, faClipboardList, faHandshakeAngle } from '@fortawesome/free-solid-svg-icons';
//niggs
const WhyChooseUs = () => {

    const [whyChooseUsData, setWhyChooseUsData] = useState(null);   

    
    useEffect(() => {
        async function loadWhyChooseUsData() {
            const data = await fetchWhyChooseUs();
            setWhyChooseUsData(data);
        }
        loadWhyChooseUsData();
    }, []);    

    const icons = [faLocationDot, faUser, faClipboardList, faHandshakeAngle]; 

    return (
        <section className='whyChooseUs__container'>
            <div className="whyChooseUs__heading--wrapper">
                <h2 className="whyChooseUs__heading">Why Choose Us?</h2>
                <h3 className="whyChooseUs__subheading">{whyChooseUsData?.subheading}</h3>
            </div>
            <div className="wcu__card--wrapper">
                {whyChooseUsData?.reasons?.slice(0, 4).map((reason, index) => (
                    <div key={index} className="whyChooseUs__card">
                        <div className="icon__bg">
                            <FontAwesomeIcon 
                                icon={icons[index]} 
                                className={`card__icon ${icons[index] === faHandshakeAngle ? "handshake__icon" : ""}`} 
                            />
                        </div>
                        <div className="wcu__text--wrapper">
                            <h4 className="card__title">{reason.title}</h4>
                            <h5 className="card__descr">{reason.description}</h5>
                        </div>
                    </div>
                ))}
            </div>  
        </section>
    );
}

export default WhyChooseUs;
