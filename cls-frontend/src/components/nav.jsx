import React from 'react';
import './nav.css'
import data from '../data/data.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className='nav__container'>
            <div className="nav__wrapper">
                <div className="nav__sect">
                    <Link to ="/">
                        <img src={data.company.logo} alt="" className="company__logo" />
                    </Link>
                </div>
                <div className="nav__sect">
                    <ul className="nav__lists">
                        <Link to='/' style={{ textDecoration: 'none' }}>
                            <li className="nav__list">HOME</li>
                        </Link>

                        <Link to='/featured-projects' style={{ textDecoration: 'none' }}>
                            <li className="nav__list">FEATURED PROJECTS</li>
                        </Link>
                        <Link to='/about-us' style={{ textDecoration: 'none' }}>
                            <li className="nav__list">ABOUT US</li>
                        </Link>
                        <Link to='/contact-us' style={{ textDecoration: 'none' }}>
                            <li className="nav__list nav__contact">CONTACT US</li>
                        </Link>
                    </ul>
                </div>
                <div className="social__links">
                    <FontAwesomeIcon icon={faFacebookMessenger} className='messenger-icon'/>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
