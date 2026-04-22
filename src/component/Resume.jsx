import React from 'react';
import { FaWhatsapp, FaInstagram, FaLinkedin, FaFacebook, FaEnvelope } from "react-icons/fa";
import html2pdf from "html2pdf.js";
import { useLanguage } from '../context/LanguageContext';

function Resume() {
    const { t } = useLanguage();

    const downloadPDF = () => {
        const element = document.getElementById("resume");
        html2pdf().from(element).save("Tejas_Resume.pdf");
    };

    return (
        <div className="resume-container">

            <div className="resume-card" id="resume">

                {/* NAME */}
                <div className="nameresume">
                    <h1>{t.myName}</h1>
                    <h3>Software Developer</h3>
                </div>

                {/* CONTACT */}
                <div className="address">
                    <h3>Pune, Maharashtra</h3>
                    <h3>Email: tejaslavhale008@gmail.com</h3>

                    <div className="social-icons">
                        <FaEnvelope size={25} onClick={() => window.open("mailto:tejaslavhale008@gmail.com")} />
                        <FaWhatsapp size={25} onClick={() => window.open("https://wa.me/918329610279")} />
                        <FaInstagram size={25} onClick={() => window.open("https://www.instagram.com/tejas_lavhale_008/")} />
                        <FaLinkedin size={25} onClick={() => window.open("https://www.linkedin.com/in/tejas-lavhale-1b30b2384/")} />
                    </div>
                </div>

                {/* OBJECTIVE */}
                <div className="section">
                    <h1>Career Objective</h1>
                    <p>
                        Passionate Software Developer with experience in building responsive web applications
                        using modern technologies like React, Node.js, and MongoDB. Focused on writing clean
                        and efficient code.
                    </p>
                </div>

                {/* EDUCATION */}
                <div className="section">
                    <h1>Education</h1>
                    <ul className='liItems'>
                        <li className='liItems'>BCA - SRTMU Nanded</li>
                        <li className='liItems'>Logistic Management - PCET Pune (2025)</li>
                    </ul>
                </div>

                {/* EXPERIENCE */}
                <div className="section">
                    <h1>Experience</h1>
                    <h3 className='liItems'>Frontend Developer Intern - THE BAAP COMPANY</h3>
                    <ul className='liItems'> 
                        <li className='liItems'>Developed React.js web applications</li>
                        <li className='liItems'>Worked with REST APIs</li>
                        <li className='liItems'>Built responsive UI using Tailwind & Bootstrap</li>
                        <li className='liItems'>Used Git & GitHub for version control</li>
                    </ul>
                </div>

                {/* SKILLS */}
                <div className="section">
                    <h1 >Technical Skills</h1>
                    <ul>
                        <li className='liItems'><b>Frontend:</b> HTML5, CSS3, JavaScript (ES6+), React.js, Bootstrap, Tailwind CSS</li>
                        <li className='liItems'><b>Backend:</b> Node.js, Express.js, REST API</li>
                        <li className='liItems'><b>Database:</b> MongoDB</li>
                        <li className='liItems'><b>Tools:</b> Git, GitHub, VS Code</li>
                        <li className='liItems'><b>Design:</b> Figma (Basic)</li>
                    </ul>
                </div>

                {/* LANGUAGES */}
                <div className="section">
                    <h1>Languages</h1>
                    <ul>
                        <li className='liItems'>Marathi</li>
                        <li className='liItems'>Hindi</li>
                        <li className='liItems'>English</li>
                    </ul>
                </div>

                {/* DOWNLOAD BUTTON */}
                <button onClick={downloadPDF} className="download-btn">
                    Download Resume
                </button>

            </div>
        </div>
    );
}

export default Resume;
