import React from 'react';
import './homeP.css';
import LandscapeH from '../sections/home/landscapeH';
import WhyChooseUs from '../sections/home/whyChooseUs';
import Carousel from '../sections/home/carousel';
import Eoc from '../sections/home/eoc';
import Testimony from '../sections/home/testimony';
import UploadTrigger from '../components/uploadTrigger';
// import homepage sections from sections folder here

const Homep = () => {
    return (
        <div id='homepage'>
            <LandscapeH />
            <WhyChooseUs /> 
            <Carousel />
            <Testimony />
            <Eoc />
            {/*<UploadTrigger /> */}
        </div>
    );
}

export default Homep;
