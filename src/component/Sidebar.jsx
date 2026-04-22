import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Sidebar = ({ isOpen, onClose }) => {
    const { t } = useLanguage();
    const [image, setImage] = useState(null);
    const [description, setDescription] = useState('');

    const handleSave = () => {
        const newProject = { id: Date.now(), image, description, date: new Date().toLocaleDateString() };
        const saved = JSON.parse(localStorage.getItem('portfolio_projects') || '[]');
        localStorage.setItem('portfolio_projects', JSON.stringify([...saved, newProject]));
        onClose();
    };

    return (
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
            <div className="sidebar-header">
                <h2>{t.addProject}</h2>
                <button onClick={onClose} className="close-btn">&times;</button>
            </div>
            <div className="input-group">
                <label>{t.uploadImg}</label>
                <input type="file" onChange={(e) => {
                    const reader = new FileReader();
                    reader.onload = () => setImage(reader.result);
                    reader.readAsDataURL(e.target.files[0]);
                }} />
            </div>
            <div className="input-group">
                <label>{t.projDesc}</label>
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>
            <button onClick={handleSave} className="save-project-btn">{t.newProj}</button>
        </div>
    );
};

export default Sidebar;
