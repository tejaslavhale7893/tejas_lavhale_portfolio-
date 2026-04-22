import React, { useState, useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'

function Home() {
    const { t } = useLanguage();
    const [clickCount, setClickCount] = useState(() => {
        return parseInt(localStorage.getItem('hire_me_clicks') || '0');
    });

    const handleHireClick = () => {
        const newCount = clickCount + 1;
        setClickCount(newCount);
        localStorage.setItem('hire_me_clicks', newCount.toString());
    };

    return (
        <div className="home_container">
            <div className="click-counter">
              
            </div>

            <div className="info">
                <h1 className='Heading_Home'>{t.greeting}</h1>
                <h2 className='developer'>{t.developer}</h2>

                <h4>{t.aboutDescription}</h4>
                <button className="Hire_btn" onClick={handleHireClick}>{t.hireMe}</button>
            </div>
            <div className="image_portfolio">
                <img src="/tej.png" alt="image " />
            </div>
        </div>
    )
}

export default Home
