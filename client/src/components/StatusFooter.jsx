import { useState, useEffect } from 'react';
import './StatusFooter.css';

export default function StatusFooter() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            // Check window scroll or document scroll (more robust for different browsers/layouts)
            const scrollY = window.scrollY || document.documentElement.scrollTop;
            
            // Reappear when scrolled to the very top (model is fully in display)
            if (scrollY < 50) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        // Initial check
        handleScroll();
        
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`status-footer ${isVisible ? 'visible' : 'hidden'}`}>
            <div className="status-item">
                <p className="status-label">AVAILABILITY</p>
                <div className="status-value">
                    Available Today <span className="status-dot"></span>
                </div>
            </div>
            
            <div className="status-item right-align">
                <p className="status-label">LOCATION</p>
                <div className="status-value">
                    Jaipur, India
                </div>
            </div>
        </div>
    );
}
