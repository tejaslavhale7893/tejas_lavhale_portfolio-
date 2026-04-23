import React from "react";
import {
    FaWhatsapp,
    FaInstagram,
    FaLinkedin,
    FaEnvelope
} from "react-icons/fa";
import html2pdf from "html2pdf.js";
import { useLanguage } from "../context/LanguageContext";

function Resume() {
    const { t } = useLanguage();

  const downloadPDF = () => {
    const link = document.createElement("a");
    link.href = "/Tejas-Resume.pdf";   // public folder path
    link.download = "Tejas-Resume.pdf";
    link.click();
};

    return (
        <div className="resume-container">

            <div className="resume-card" id="resume">

                {/* NAME */}
                <div className="nameresume">
                    <h1>{t?.myName || "Tejas Lavhale"}</h1>
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
                        Passionate Software Developer skilled in React, Node.js and MongoDB.
                        Focused on clean and efficient code.
                    </p>
                </div>

                {/* EDUCATION */}
                <div className="section">
                    <h1>Education</h1>
                    <ul>
                        <li className="liItems">BCA - SRTMU Nanded</li>
                        <li  className="liItems">Logistic Management - PCET Pune (2025)</li>
                    </ul>
                </div>

                {/* EXPERIENCE */}
                <div className="section">
                    <h1 >Experience</h1>
                    <h3  className="liItems">Frontend Developer Intern - THE BAAP COMPANY</h3>
                    <ul>
                        <li  className="liItems">React.js web apps developed</li>
                        <li  className="liItems">Worked with REST APIs</li>
                        <li  className="liItems">Responsive UI using Tailwind & Bootstrap</li>
                        <li  className="liItems">Git & GitHub version control</li>
                    </ul>
                </div>

                {/* SKILLS */}
                <div className="section">
                    <h1>Technical Skills</h1>
                    <ul>
                        <li  className="liItems"><b>Frontend:</b> HTML, CSS, JS, React.js, Tailwind</li>
                        <li  className="liItems"><b>Backend:</b> Node.js, Express.js</li>
                        <li  className="liItems"><b>Database:</b> MongoDB</li>
                        <li  className="liItems"><b>Tools:</b> Git, GitHub, VS Code</li>
                        <li  className="liItems"><b>Design:</b> Figma</li>
                    </ul>
                </div>

                {/* LANGUAGES */}
                <div className="section">
                    <h1>Languages</h1>
                    <ul>
                        <li  className="liItems">Marathi</li>
                        <li  className="liItems">Hindi</li>
                        <li  className="liItems">English</li>
                    </ul>
                </div>

                {/* DOWNLOAD BUTTON */}
                <button className="download-btn" onClick={downloadPDF}>
                    Download Resume
                </button>

            </div>
        </div>
    );
}

export default Resume;