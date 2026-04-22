import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiFigma, SiNodedotjs } from "react-icons/si";

function Skill() {
    const { t } = useLanguage();

    const skills = [
        { name: "HTML5", icon: <FaHtml5 color="#e34c26" /> },
        { name: "CSS3", icon: <FaCss3Alt color="#264de4" /> },
        { name: "JavaScript", icon: <FaJs color="#f0db4f" /> },
        { name: "React.js", icon: <FaReact color="#61DBFB" /> },
        { name: "Node.js", icon: <SiNodedotjs color="#3C873A" /> },
        { name: "Git", icon: <FaGitAlt color="#f34f29" /> },
        { name: "GitHub", icon: <FaGithub /> },
        { name: "Figma", icon: <SiFigma color="#f24e1e" /> },
        { name: "Tailwind", icon: <SiTailwindcss color="#38bdf8" /> },
        { name: "MongoDB", icon: <SiMongodb color="#4DB33D" /> },
        { name: "REST API", icon: "🔗" },
        { name: "Bootstrap", icon: <FaBootstrap color="#7952B3" /> }
    ];

    return (
        <div className="skill-page">
            <h1 className="titleskill">{t.skill}</h1>

            <div className="skill-grid">
                {skills.map((skill, index) => (
                    <div key={index} className="skill-card">
                        <div className="skill-icon">{skill.icon}</div>
                        <h3>{skill.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skill;