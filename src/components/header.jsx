import { useState, useEffect } from 'react';
import {motion} from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import './header.css'

const listContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -15 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.4, ease: "easeOut" } 
  }
};

function Header({ setIsNavHovered }) {
    const [theme, setTheme] = useState('light');
    const navigate = useNavigate();
    const location = useLocation();

    const getRouteIndex = () => {
        if (location.pathname.includes('/projects')) return 1;
        if (location.pathname.includes('/contact')) return 2;
        return 0;
    };
    const activeIndex = getRouteIndex();

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
        <header className="header"
            onMouseEnter={() => setIsNavHovered && setIsNavHovered(true)}
            onMouseLeave={() => setIsNavHovered && setIsNavHovered(false)}
        >
            <nav className="header-nav">
                <motion.ul 
                    className="nav-list"
                    initial="hidden"
                    animate="visible"
                    variants={listContainerVariants}
                >
                    <motion.li variants={listContainerVariants}>
                        <motion.ul className={`sub-list ${activeIndex === 0 ? '' : 'inactive'}`} variants={listContainerVariants} onMouseEnter={() => navigate('/')}>
                            <h3>Maulik Sharma</h3>
                            <motion.li variants={itemVariants}>Home</motion.li>
                            <motion.li variants={itemVariants}>About</motion.li>
                        </motion.ul>
                    </motion.li>

                    <motion.li variants={listContainerVariants}>
                        <motion.ul className={`sub-list ${activeIndex === 1 ? '' : 'inactive'}`} variants={listContainerVariants} onMouseEnter={() => navigate('/projects')}>
                            <h3>Projects</h3>
                            <motion.li variants={itemVariants}>Project 1</motion.li>
                            <motion.li variants={itemVariants}>Project 2</motion.li>
                        </motion.ul>
                    </motion.li>

                    <motion.li variants={listContainerVariants}>
                        <motion.ul className={`sub-list ${activeIndex === 2 ? '' : 'inactive'}`} variants={listContainerVariants} onMouseEnter={() => navigate('/contact')}>
                            <h3>Contact</h3>
                            <motion.li variants={itemVariants}>Bleh</motion.li>
                            <motion.li variants={itemVariants}>Bleh</motion.li>
                        </motion.ul>
                    </motion.li>
                </motion.ul>
            </nav>
            <motion.button 
                className="theme-toggle" 
                onClick={toggleTheme}
                whileHover={{scale: 1.2}}
                whileTap={{scale: .85}}
                transition={{duration:.05}} 
                aria-label="Toggle Theme"
                style={{ position: 'absolute', right: '3%', top: '1vh' }}
            >
                {theme === 'dark' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
                )}
            </motion.button>
        </header>
        
    )
}

export default Header