import { useState, useEffect } from 'react';
import './header.css'

function Header() {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'dark';
        setTheme(savedTheme);
        document.documentElement.setAttribute('data-theme', savedTheme);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    };

    return (
        <header className="header">
            <nav className="header-nav">
                <ul className="nav-list">
                    <li>
                        <ul className="sub-list">
                            <h3>Maulik Sharma</h3>
                            <li>Home</li>
                            <li>About</li>
                        </ul>
                    </li>

                    <li>
                        <ul className="sub-list">
                            <h3>Projects</h3>
                            <li>Project 1</li>
                            <li>Project 2</li>
                        </ul>
                    </li>

                    <li>
                        <ul className="sub-list">
                            <h3>Contact</h3>
                            <li>Bleh</li>
                            <li>Bleh</li>
                        </ul>
                    </li>

                </ul>
            </nav>
            <button 
                className="theme-toggle" 
                onClick={toggleTheme} 
                aria-label="Toggle Theme"
                style={{ position: 'absolute', right: '3%', top: '1vh' }}
            >
                {theme === 'light' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
                )}
            </button>
        </header>
        
    )
}

export default Header