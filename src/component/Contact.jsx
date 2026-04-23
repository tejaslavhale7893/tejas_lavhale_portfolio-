import React, { useRef } from 'react';
import emailjs from '@emailjs/browser'
import { FaWhatsapp, FaInstagram, FaLinkedin, FaFacebook, FaEnvelope } from "react-icons/fa";
import { useLanguage } from '../context/LanguageContext';

function Contact() {
    const { t } = useLanguage();
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_8pslffe', 'template_q8ivstm', form.current, 'GtzWvdl_tKRHUGqWZ')
            .then(() => alert("✅"), () => alert("❌"));
    };

    return (
        <div className='contact-container'>
            <div className='contact-card'>
                <h1 className='contactName'>{t.contactMe}</h1>
                <form ref={form} onSubmit={sendEmail}>
                    <label>{t.nameLabel}</label>
                    <input type="text" name="name" required />
                    <label>{t.emailLabel}</label>
                    <input type="email" name="email" required />
                    <label>{t.messageLabel}</label>
                    <textarea name="message" required />
                    <button type="submit" className='sendmsg'>{t.sendBtn}</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;