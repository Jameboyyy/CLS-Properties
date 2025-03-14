import React, { useState, useEffect} from 'react';
import './whyChooseUs.css'
import { fetchWhyChooseUs } from '../services/api/whyChooseUs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faUser, faClipboardList, faHandshake } from '@fortawesome/free-solid-svg-icons';

const WhyChooseUs = () => {

    const [whyChooseUsData, setWhyChooseUsData] = useState(null);   

    useEffect(() => {
        async function loadWhyChooseUsData() {
            const data = await fetchWhyChooseUs();
            setWhyChooseUsData(data);
        }
        loadWhyChooseUsData();
    }, []);    

    const icons = [faLocationDot, faUser, faClipboardList, faHandshake]; 

    return (
        <section className='whyChooseUs__container'>
            <h2 className="whyChooseUs__heading">Why Choose Us?</h2>
            <h4 className="whyChooseUs__subheading">{whyChooseUsData?.subheading}</h4>
                {whyChooseUsData?.reasons?.slice(0,4).map((reason, index) => (
                    <div key={index} className="whyChooseUs__card">
                        <FontAwesomeIcon icon={icons[index]} className='card__icon' />
                        <h4 className="card__title">{reason.title}</h4>
                        <h5 className="card__descr">{reason.description}</h5>
                    </div>
                ))}
        </section>
    );
}

export default WhyChooseUs;
