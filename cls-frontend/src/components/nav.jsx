import React, { useState } from 'react';
import './nav.css';
import data from '../data/data.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Nav = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <nav className='nav__container'>
            <div className="nav__wrapper">
                <div className="nav__sect">
                    <Link to="/">
                        <img src={data.company.logo} alt="Company Logo" className="company__logo" />
                    </Link>
                </div>

                <ul className={`nav__lists ${sidebarOpen ? 'nav__lists--open' : ''}`}>
                    <Link to="/" style={{ textDecoration: 'none' }} onClick={() => setSidebarOpen(false)}><li className="nav__list">HOME</li></Link>
                    <Link to="/projects" style={{ textDecoration: 'none' }} onClick={() => setSidebarOpen(false)}><li className="nav__list">PROJECTS</li></Link>
                    <Link to="/about-us" style={{ textDecoration: 'none' }} onClick={() => setSidebarOpen(false)}><li className="nav__list">ABOUT US</li></Link>
                    <Link to="/contact-us" style={{ textDecoration: 'none' }}onClick={() => setSidebarOpen(false)}><li className="nav__list nav__contact">CONTACT US</li></Link>
                </ul>

                <div className="social__links">
                    <a href="https://www.facebook.com/clspropertiesinc2020" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faSquareFacebook} className="messenger-icon" />
                    </a>
                </div>

                <button className="hamburger-menu" onClick={() => setSidebarOpen(!sidebarOpen)}>
                    <FontAwesomeIcon icon={sidebarOpen ? faTimes : faBars} />
                </button>
            </div>

            {/* Sidebar */}
            <div className={`sidebar ${sidebarOpen ? 'sidebar--open' : ''}`}>
                <ul>
                    <Link to="/" style={{ textDecoration: 'none' }} onClick={() => setSidebarOpen(false)}><li className='nav__list'>HOME</li></Link>
                    <Link to="/projects" style={{ textDecoration: 'none' }} onClick={() => setSidebarOpen(false)}><li className='nav__list'>PROJECTS</li></Link>
                    <Link to="/about-us" style={{ textDecoration: 'none' }} onClick={() => setSidebarOpen(false)}><li className='nav__list'>ABOUT US</li></Link>
                    <Link to="/contact-us" style={{ textDecoration: 'none' }} onClick={() => setSidebarOpen(false)}><li className='nav__list'>CONTACT US</li></Link>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;
