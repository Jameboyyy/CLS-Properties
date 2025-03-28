import React, { useState, useEffect, use } from 'react';
import './aulandscape.css';
import { fetchAboutUs } from '../../services/api/aboutus.js'

const Aulandscape = () => {

   const [auData, setAuData] = useState([]);

   useEffect(() => {
    async function loadAuData() {
        const data = await fetchAboutUs();
        setAuData(data);
    }
    loadAuData();
   }, []);
    
    return (
        <section className='aulandscape__container'>
            <h2 className="aulandscape__heading">"Where Dreams Come Home"</h2>
            <div className="au__info--container">
                <div className="au__info--card--tl">
                    <div className="au__info--text">
                        <h1 className="au__info--heading">About Us</h1>
                        <h3 className="au__info--desc">{auData?.description}</h3>
                    </div>
                </div>
                <div className="au__info--card--tr">
                    <img src={auData?.team__img__url} alt="" className="au__info--img" />
                </div>
                <div className="au__info--card--bl">
                    <img src={auData?.property__img__url} alt="" className="au__info--img" />
                </div>
                <div className="au__info--card--br">
                    <div className="au__info--text">
                        <h1 className="au__info--heading">Mission</h1>
                        <h3 className="au__info--desc">{auData?.mission}</h3>
                        <h1 className="au__info--heading">Vision</h1>
                        <h3 className="au__info--desc">{auData?.vision}</h3>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Aulandscape;
