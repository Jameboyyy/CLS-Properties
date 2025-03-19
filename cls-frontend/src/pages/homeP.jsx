import React from 'react';
import './homeP.css';
import LandscapeH from '../sections/landscapeH';
import WhyChooseUs from '../sections/whyChooseUs';
import Carousel from '../sections/carousel';
import Eoc from '../sections/eoc';
import Testimony from '../sections/testimony';
// import homepage sections from sections folder here

const Homep = () => {
    return (
        <div id='homepage'>
            <LandscapeH />
            <WhyChooseUs /> 
            <Carousel />
            <Testimony />
            <Eoc />
        </div>
    );
}

export default Homep;
