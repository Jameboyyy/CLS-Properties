import React from 'react';
import './footer.css'

const Footer = () => {
    return (
        <footer className="footer__container">
            <div className="footer__sect">
                <h4>Projects</h4>
                <ul>
                    <li>Bohol</li>
                    <li>Cebu</li>
                    <li>Dumaguete</li>
                    <li>Ormoc</li>
                    <li>Palawon</li>
                </ul>
            </div> 
            <div className="footer__sect">
                <h5 className="footer__company">&copy; {new Date().getFullYear()} CLS Properties. All Rights reserved.</h5>
            </div>
        </footer>
    );
}

export default Footer;
