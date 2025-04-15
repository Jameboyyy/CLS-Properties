import React from 'react';
import './loadingScreen.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import data from '../data/data.json';


const LoadingScreen = () => {
    return (
        <div className='loading__container'>
            <img src={data.company.logo} className="loading__company--logo" alt="" />
            <div className="loading__bar">
                <div className="loading__progress"></div>
            </div>
        </div>
    );
}

export default LoadingScreen;
