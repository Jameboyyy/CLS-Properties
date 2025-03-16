import React from 'react';
import LandscapeH from '../sections/landscapeH';
import WhyChooseUs from '../sections/whyChooseUs';
import Carousel from '../sections/carousel';
import Eoc from '../sections/eoc';
// import homepage sections from sections folder here

const Homep = () => {
    return (
        <div id='homepage'>
            <LandscapeH />
            <WhyChooseUs /> 
            <Carousel />
            <Eoc />
        </div>
    );
}

export default Homep;
