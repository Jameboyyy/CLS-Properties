import React, { useRef } from 'react';
import './contactUsSection.css';
import emailjs from '@emailjs/browser';

const ContactUsSection = () => {
    // EmailJs
    const form = useRef();

    // Handle email form submission
    const sendEmail = (e) => {
        e.preventDefault();

        // Check if the honeypot field is filled (bot trap)
        const honeypot = e.target.honeypot.value;
        if (honeypot) {
            console.log("Bot detected, form submission rejected.");
            return; // Stop form submission if honeypot is filled
        }

        // Disable the submit button to prevent multiple submissions
        const submitButton = e.target.querySelector(".submit--button");
        submitButton.disabled = true;

        // Wait for a few seconds before allowing the next form submission
        setTimeout(() => {
            submitButton.disabled = false;
        }, 5000); // Re-enable button after 5 seconds

        // Send the form data with EmailJS
        emailjs
            .sendForm('service_7qzpels', 'template_bsqr1uv', form.current, {
                publicKey: 'Oap0hlrzyVN5GbZdF',
            })
            .then(
                () => {
                    // Show success alert
                    alert("Your message has been sent successfully!");

                    // Reset the form
                    form.current.reset();

                    // Refresh the page
                    window.location.reload();
                },
                (error) => {
                    // Show error alert
                    alert(`Error: ${error.text}`);
                },
            );
    };

    return (
        <section id="container">
            <div className="row">
                <div className="column">
                    <div className="leftColumnText">
                        <h1>Contact Us</h1>
                        <h2>Feel free to reach out with any questions, and our team will reach out to you!</h2>
                    </div>
                </div>

                <div className="column">
                    <form ref={form} onSubmit={sendEmail}>
                        {/* Honeypot Field */}
                        <div style={{ display: "none" }}>
                            <label htmlFor="honeypot">Leave this field empty:</label>
                            <input type="text" id="honeypot" name="honeypot" />
                        </div>

                        {/* Row 1 */}
                        <div className="form--row">
                            <div className="form--group">
                                <label htmlFor="first-name">First Name:</label>
                                <input required type="text" id="first-name" name="first-name" placeholder="First Name" />
                            </div>
                            <div className="form--group">
                                <label htmlFor="last-name">Last Name:</label>
                                <input required type="text" id="last-name" name="last-name" placeholder="Last Name" />
                            </div>
                        </div>

                        {/* Row 2 */}
                        <div className="form--row">
                            <div className="form--group">
                                <label htmlFor="email">Email:</label>
                                <input required type="email" id="email" name="email" placeholder="email@example.com" />
                            </div>
                            <div className="form--group">
                                <label htmlFor="phone-number">Phone Number:</label>
                                <input required type="tel" id="phone-number" name="phone-number" placeholder="(xxx) xxx-xxx" />
                            </div>
                        </div>

                        {/* Row 3 */}
                        <div className="form--row">
                            <div className="form--group">
                                <label htmlFor="project">Project:</label>
                                <input required type="text" id="project" name="project" placeholder="Project Name" />
                            </div>
                            <div className="form--group">
                                <label htmlFor="subject">Subject:</label>
                                <input required type="text" id="subject" name="subject" placeholder="Inquiry" />
                            </div>
                        </div>

                        {/* Message Row */}
                        <div className="message--field">
                            <label htmlFor="message">Message:</label>
                            <textarea required id="message" name="message" rows="8"></textarea>
                        </div>

                        <button className="submit--button" type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactUsSection;
