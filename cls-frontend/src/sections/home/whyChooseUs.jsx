import React, { useState, useEffect} from 'react';
import './whyChooseUs.css'
import { fetchWhyChooseUs } from '../../services/api/whyChooseUs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faUser, faClipboardList, faHandshakeAngle } from '@fortawesome/free-solid-svg-icons';
import { motion } from "framer-motion";
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
                <motion.h2 
                    className="whyChooseUs__heading"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    Why Choose Us?
                </motion.h2>
                <motion.h3 
                    className="whyChooseUs__subheading"
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    >
                        {whyChooseUsData?.subheading}
                </motion.h3>
            </div>
            <div className="wcu__card--wrapper">
                {whyChooseUsData?.reasons?.slice(0, 4).map((reason, index) => (
                    <motion.div
                        key={index} 
                        className="whyChooseUs__card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: index * 0.4 }}
                    >
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
                    </motion.div>
                ))}
            </div>  
        </section>
    );
}

export default WhyChooseUs;
