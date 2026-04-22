import React, { useState, useEffect } from 'react';
import { FaTrash, FaPlus } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import Sidebar from './Sidebar';

const Projects = () => {
    const { t } = useLanguage();
    const [projects, setProjects] = useState([]);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    useEffect(() => {
        loadProjects();

        const handler = () => loadProjects();
        window.addEventListener("projectAdded", handler);

        return () => window.removeEventListener("projectAdded", handler);
    }, []);

    const loadProjects = () => {
        const saved = JSON.parse(localStorage.getItem('portfolio_projects') || '[]');
        setProjects(saved);
    };

    const handleDelete = (id) => {
        const updated = projects.filter(p => p.id !== id);
        setProjects(updated);
        localStorage.setItem('portfolio_projects', JSON.stringify(updated));
    };

    return (
        <div className="projects-page">

            <button className="add-btn" onClick={() => setIsSidebarOpen(true)}>
                <FaPlus /> Add Project
            </button>

            <h1 className="projects-title">{t.projectsTitle}</h1>

            <div className="projects-grid">
                {projects.length === 0 ? (
                    <p className="no-projects">{t.noProjects}</p>
                ) : (
                    projects.map(project => (
                        <div key={project.id} className="project-card">
                            <img src={project.image} alt="project" />

                            <div className="project-card-info">
                                <p>{project.description}</p>
                                <span>{project.date}</span>

                                <button onClick={() => handleDelete(project.id)}>
                                    <FaTrash />
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {/* ✅ Sidebar render */}
            {isSidebarOpen && (
                <Sidebar 
                    isOpen={isSidebarOpen}
                    onClose={() => setIsSidebarOpen(false)} 
                />
            )}

        </div>
    );
};

export default Projects;