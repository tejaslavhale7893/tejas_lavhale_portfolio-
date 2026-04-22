import React from "react";
import { useLanguage } from "../context/LanguageContext";

function About() {
    const { t } = useLanguage();

    return (
        <div className="about_page">

            {/* Title */}
            <h1 className="about_title">
                About <span>Me</span>
            </h1>

            <p className="about_subtitle">
                Here you will find more information about me
            </p>

            <div className="about_container">

                {/* Left Image */}
                <div className="left_about">
                    <div className="profile_box">
                        <img src="/tej.png" alt="profile" />
                    </div>
                </div>

                {/* Right Content */}
                <div className="about_right">
                    <p className="about_desc">
                        Hi! I am a Software Developer passionate about building responsive and user-friendly web applications using modern technologies.
                         I enjoy solving problems and continuously learning new skills.
                    </p>

                    <p className="about_desc">
                        I love learning new technologies and solving real-world problems through code.
                    </p>

                    {/* Cards */}
                    <div className="about_cards">
                        <div className="card">
                            <h4>NAME</h4>
                            <p>Tejas Lavhale</p>
                        </div>

                        <div className="card">
                            <h4>EMAIL</h4>
                            <p>tejaslavhale008@gmail.com</p>
                        </div>

                        <div className="card">
                            <h4>PHONE</h4>
                            <p>+91 8329610279</p>
                        </div>

                        <div className="card">
                            <h4>FROM</h4>
                            <p>Pune,Maharashtra</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default About;