import React from 'react';
import { Helmet } from 'react-helmet'
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
            <Helmet>
                <title>We Turn Your Dream Into Adress</title>
                <meta name="description" content="Explore properties across top cities. Discover your next home with us." />
                <meta property="og:title" content="Find Your Dream Property" />
                <meta property="og:description" content="Search, compare, and explore real estate listings all in one place." />
            </Helmet>

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
