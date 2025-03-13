import React from 'react';
import './footer.css'

const Footer = () => {
    return (
        <footer className="footer__container">
            <div className="footer__sect">

            </div>
            <div className="footer__sect">
                <h1 className="footer__company">&copy; {new Date().getFullYear()}CLS Properties. All Rights reserved.</h1>
                <h4 className="footer__subcompany">Where Dreams Come Home</h4>
            </div>
        </footer>
    );
}

export default Footer;
