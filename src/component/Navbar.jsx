import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Chatbot from './Chatbot'
import Sidebar from './Sidebar'
import { LuBell, LuBot, LuMenu } from 'react-icons/lu'
import { FaRobot } from "react-icons/fa"
import { FaExchangeAlt } from "react-icons/fa"
import { useLanguage } from '../context/LanguageContext'

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

    const handleMenuClick = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <div>
            {/* NAVBAR */}
            <div className="navbar">
                
                {/* LOGO */}
                <h3 className='navbar__logo'>
                    <img src="/t.png" alt="logo" className="navbar__logo-img" />
                </h3>

                {/* MENU */}
                <ul className={`navbar__menu ${isMobileMenuOpen ? 'active' : ''}`}>
                    <Link to="/" onClick={handleMenuClick}><li className='navbar__item'>{t.home}</li></Link>
                    <Link to="/about" onClick={handleMenuClick}><li className='navbar__item'>{t.about}</li></Link>
                    <Link to="/resume" onClick={handleMenuClick}><li className='navbar__item'>{t.resume}</li></Link>
                    <Link to="/skill" onClick={handleMenuClick}><li className='navbar__item'>{t.skill}</li></Link>
                    <Link to="/contact" onClick={handleMenuClick}><li className='navbar__item'>{t.contact}</li></Link>
                </ul>

                {/* ACTIONS */}
                <div className="navbar__actions">

                    {/* LANGUAGE */}
                    <button className="lang-toggle-btn" onClick={toggleLanguage}>
                        <FaExchangeAlt /> {lang === 'en' ? 'मराठी' : 'EN'}
                    </button>

                    {/* NOTIFICATION */}
                    <div className="notification-bell">
                        <LuBell />
                        {clickCount > 0 && <span className="bell-badge">{clickCount}</span>}
                    </div>

                    {/* CHATBOT */}
                    <div className="navbar__chatbot-icon" onClick={() => setIsChatOpen(!isChatOpen)}>
                        <LuBot />
                    </div>

                    {/* MOBILE MENU BUTTON */}
                    <button
                        className="mobile-menu-toggle"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <FaRobot /> : <LuMenu />}
                    </button>

                </div>
            </div>

            {/* COMPONENTS */}
            <Chatbot isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
            <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
        </div>
    )
}

export default Navbar