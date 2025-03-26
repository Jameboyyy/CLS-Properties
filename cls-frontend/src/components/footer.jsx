import React, { useState, useEffect } from 'react';
import './footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    const [isAccordion, setIsAccordion] = useState(window.innerWidth <= 770);
    const [openSections, setOpenSections] = useState({});

    useEffect(() => {
        const handleResize = () => {
            setIsAccordion(window.innerWidth <= 770);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleSection = (section) => {
        setOpenSections((prev) => ({
            ...prev,
            [section]: !prev[section],
        }));
    };

    return (
        <footer className="footer--container">
            {[
                { title: "Projects", items: ["Bohol", "Cebu", "Dumaguete", "Ormoc", "Palawon"], links: true },
                { title: "About Us", items: ["Story", "Our Leaders"] },
                { title: "Support", items: ["FAQ", "Contact Us", "Messenger"] },
                { title: "CLS Properties", content: (
                    <address>
                        7th Floor Unit 702, Apple One Equicom Tower,<br />
                        Mindanao Ave., Cebu Business Park,<br />
                        Cebu City, Philippines, 6000
                    </address>
                ) },
                { title: "Contact", items: ["0917-825-6646", "0932-868-9629", "0939-912-7027"], extra: <p>Fax: (032) 233-3982</p> }
            ].map(({ title, items, content, links, extra }, index) => (
                <div className={`footer--section ${isAccordion ? 'accordion' : ''}`} key={index}>
                    <h4 onClick={() => isAccordion && toggleSection(title)} className="footer--title">
                        {title}
                        {isAccordion && <span className="accordion-icon">{openSections[title] ? "−" : "+"}</span>}
                    </h4>
                    <div className={`footer--content ${openSections[title] ? 'open' : ''}`}>
                        {items && (
                            <ul>
                                {items.map((item, i) => links ? (
                                    <Link key={i} to={`/projects/${item}`} className='footer--links'><li>{item}</li></Link>
                                ) : (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        )}
                        {content && content}
                        {extra}
                    </div>
                </div>
            ))}

            <div className="footer--copyright">
                <h5>&copy; {new Date().getFullYear()} CLS Properties. All Rights Reserved.</h5>
            </div>
        </footer>
    );
};

export default Footer;
