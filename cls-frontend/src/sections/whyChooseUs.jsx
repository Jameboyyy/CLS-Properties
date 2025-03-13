import React, { useState, useEffect} from 'react';
import './whyChooseUs.css'
import { fetchWhyChooseUs } from '../services/api/whyChooseUs';

const WhyChooseUs = () => {

    const [whyChooseUsData, setWhyChooseUsData] = useState(null);   

    useEffect(() => {
        async function loadWhyChooseUsData() {
            const data = await fetchWhyChooseUs();
            setWhyChooseUsData(data);
        }
        loadWhyChooseUsData();
    }, []);    

    return (
        <section className='whyChooseUs__container'>
            <h2 className="whyChooseUs__heading">Why Choose Us?</h2>
            <h4 className="whyChooseUs__subheading">{whyChooseUsData?.subheading}</h4>
        </section>
    );
}

export default WhyChooseUs;
