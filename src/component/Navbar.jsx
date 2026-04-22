import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Chatbot from './Chatbot'
import Sidebar from './Sidebar'
import { LuBell, LuLanguages, LuBot, LuMenu, LuX } from 'react-icons/lu'
import { useLanguage } from '../context/LanguageContext'
import { FaPlus } from "react-icons/fa";
import { FaExchangeAlt } from "react-icons/fa";

function Navbar() {
    const { lang, toggleLanguage, t } = useLanguage();
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [clickCount, setClickCount] = useState(0);

    useEffect(() => {
        const updateCount = () => {
            setClickCount(parseInt(localStorage.getItem('hire_me_clicks') || '0'));
        };
        updateCount();
        const interval = setInterval(updateCount, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <div className="navbar">
                <h3 className='navbar__logo'>
                    <img src="/t.png" alt="logo" className="navbar__logo-img" />
                </h3>

                <ul className={`navbar__menu ${isMobileMenuOpen ? 'active' : ''}`}>
                    <Link to={"/"} onClick={() => setIsMobileMenuOpen(false)}><li className='navbar__item'>{t.home}</li></Link>
                    <Link to={"/about"} onClick={() => setIsMobileMenuOpen(false)}> <li className='navbar__item'>{t.about}</li></Link>
                    <Link to={"/resume"} onClick={() => setIsMobileMenuOpen(false)}>   <li className='navbar__item'>{t.resume}</li></Link>
                    <Link to={"/skill"} onClick={() => setIsMobileMenuOpen(false)}>  <li className='navbar__item'>{t.skill}</li></Link>
                    <Link to={"/contact"} onClick={() => setIsMobileMenuOpen(false)}>  <li className='navbar__item'>{t.contact}</li></Link>
                    {/* <Link to={"/projects"} onClick={() => setIsMobileMenuOpen(false)}>  <li className='navbar__item'>{t.projects}</li></Link> */}
                </ul>

                <div className="navbar__actions">
                    <button className="lang-toggle-btn translate-icon" onClick={toggleLanguage}>
                      <FaExchangeAlt /> {lang === 'en' ? 'मराठी' : 'EN'}
                    </button>
                    <div className="notification-bell">
                        <LuBell />
                        {clickCount > 0 && <span className="bell-badge">{clickCount}</span>}
                    </div>
                    <div className="navbar__chatbot-icon" onClick={() => setIsChatOpen(!isChatOpen)}>
                        <LuBot /> 
                    </div>
                    
                    <button className="mobile-menu-toggle chat-icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        {isMobileMenuOpen ? <FaRobot /> : <LuMenu />}
                    </button>

                   
                </div>
            </div>
            <Chatbot isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
            <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
        </div>
    )
}

export default Navbar
