import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer--container">
            {/* Project Footer */}
            <div className="footer--section">
                <h4>Projects</h4>
                <ul>
                    <Link to='/projects/Bohol' className='footer--links'>
                        <li>Bohol</li>
                    </Link>
                    <li>Cebu</li>
                    <li>Dumaguete</li>
                    <li>Ormoc</li>
                    <li>Palawon</li>
                </ul>
            </div>

            {/* About Us Footer */}
            <div className='footer--section'>
                <h4>About Us</h4>
                <ul>
                    <li>Story</li>
                    <li>Our Leaders</li>
                </ul>
            </div>

            {/* Support */}
            <div className="footer--section">
                <h4>Support</h4>
                <ul>
                    <li>FAQ</li>
                    <li>Contact Us</li>
                    <li>Messenger</li>
                </ul>
            </div>

            {/* CLS Properties Inc */}
            <div className="footer--section">
                <h4>CLS Properties</h4>
                <address>
                    7th Floor Unit 702, Apple One Equicom Tower,<br />
                    Mindanao Ave., Cebu Business Park,<br />
                    Cebu City, Philippines, 6000
                </address>
            </div>

            {/* Contact Information */}
            <div className="footer--section">
                <h4>Mobile:</h4>
                <ul>
                    <li>0917-825-6646</li>
                    <li>0932-868-9629</li>
                    <li>0939-912-7027</li>
                </ul>
                <h4>Fax:</h4> 
                <p>(032) 233-3982</p>
            </div>

            {/* Copyright Section */}
            <div className="footer--copyright">
                <h5>&copy; {new Date().getFullYear()} CLS Properties. All Rights reserved.</h5>
            </div>
        </footer>
    );
};

export default Footer;
