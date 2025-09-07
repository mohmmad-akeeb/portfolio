import React, { FormEvent } from 'react';
import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';

export const Contact: React.FC = () => {
    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;
        const formData = new FormData(form);

        formData.append("access_key", "1ddb24a6-3980-4e81-a3a1-8b2448d251c6");

        const object = Object.fromEntries(formData.entries());
        const json = JSON.stringify(object);

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: json
            });
            const data = await res.json();

            if (data.success) {
                alert(data.message);
                form.reset();
            } else {
                alert("Something went wrong. Please try again.");
            }
        } catch (error) {
            alert("An error occurred. Please try again later.");
            console.error(error);
        }
    };

    return (
        <div id='contact' className='contact'>
            <div className="contact-title">
                <h1>Get in touch</h1>
                <img src={theme_pattern} alt="Theme pattern" />
            </div>
            <div className="contact-section">
                <div className='contact-left'>
                    <h1>Let's talk</h1>
                    <p>I'm currently available to take new projects, so feel free to send me a message about anything that you want me to work on. You can contact me anytime.</p>
                    <div className='contact-details'>
                        <div className="contact-detail">
                            <img src={mail_icon} alt="Mail icon" /> <p>someone@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <img src={call_icon} alt="Call icon" /> <p>+91 9541703344</p>
                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} alt="Location icon" /> <p>Kashmir, India</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className='contact-right'>
                    <label htmlFor="name">Your Name</label>
                    <input id="name" type="text" placeholder='Enter your name' name='name' required />
                    <label htmlFor="email">Your Email</label>
                    <input id="email" type="email" placeholder='Enter your email' name='email' required />
                    <label htmlFor="message">Write your message here</label>
                    <textarea id="message" name="message" rows={8} placeholder='Enter your message' required></textarea>
                    <button type='submit' className='contact-submit'>Submit now</button>
                </form>
            </div>
        </div>
    );
};
