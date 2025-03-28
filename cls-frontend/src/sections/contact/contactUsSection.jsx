import React, { useRef } from 'react';
import './contactUsSection.css';
import emailjs from '@emailjs/browser';

const ContactUsSection = () => {
    
    // EmailJs
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        
        // sendForm(SERVICE_ID, TEMPLATE_ID)
        emailjs
            .sendForm('service_7qzpels', 'template_bsqr1uv', form.current, {
                publicKey: 'Oap0hlrzyVN5GbZdF',
            })
            .then(
                () => {
                    console.log('YESSIR!');
                },
                (error) => {
                    console.log('Sadge. . . ', error.text);
                },
            );
    };

    return (
        <section id="container">
            <div className="row">
                <div className="column">
                    <div className="leftColumnText">
                        <h1>Contact Us</h1>
                        <h2>Feel free to reach out with any questions, and our team will reach out to you! </h2>
                    </div>
                </div>

                <div className="column">
                <form ref={form} onSubmit={sendEmail}>
                    {/* Row 1 */}
                    <div className="form--row">
                        <div className="form--group">
                            <label htmlFor="first-name">First Name:</label>
                            <input required type="text" id="first-name" name="First Name" placeholder="James" />
                        </div>
                        <div className="form--group">
                            <label htmlFor="last-name">Last Name:</label>
                            <input required type="text" id="last-name" name="Last Name" placeholder="Tran" />
                        </div>
                    </div>

                    {/* Row 2 */}
                    <div className="form--row">
                        <div className="form--group">
                            <label htmlFor="email">Email:</label>
                            <input required type="email" id="email" name="Email"  placeholder="james@example.com"/>
                        </div>
                        <div className="form--group">
                            <label htmlFor="phone-number">Phone Number:</label>
                            <input required type="tel" id="phone-number" name="Phone Number"  placeholder="(714)-204-7537"/>
                        </div>
                    </div>

                    {/* Row 3 */}
                    <div className="form--row">
                        <div className="form--group">
                            <label htmlFor="project">Project:</label>
                            <input required type="text" id="project" name="Project"  placeholder="Project Name"/>
                        </div>
                        <div className="form--group">
                            <label htmlFor="subject">Subject:</label>
                            <input required type="text" id="subject" name="Subject"  placeholder="Inquiry"/>
                        </div>
                    </div>

                    {/* Message Row */}
                    <div className="message--field">
                        <label htmlFor="message">Message:</label>
                        <textarea required id="message" name="message" rows="8" required></textarea>
                    </div>

                    <button className="submit--button" type="submit">Submit</button>
                </form>
                </div>
            </div>
        </section>
    );
}

export default ContactUsSection;
