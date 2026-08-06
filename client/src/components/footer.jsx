import './footer.css'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <>
        <div className="footer-hr"></div>
        <footer className="footer">
            <div className="footer-item" style={{paddingRight: "20%"}}>
                <h2>Contact</h2>
                    <div>
                        <a className="label" href='mailto:maulik.jaipur@gmail.com' target='_blank' rel="noopener noreferrer" aria-label="Send email">Email</a>
                        <a className="value" href='mailto:maulik.jaipur@gmail.com' target='_blank' rel="noopener noreferrer" aria-label="Email address: maulik.jaipur@gmail.com">maulik.jaipur@gmail.com</a>
                    </div>
                    <div>
                        <a className="label" href='https://www.linkedin.com/in/maulik-sharma-0b5989352' target='_blank' rel="noopener noreferrer" aria-label="LinkedIn profile">Linkedin</a>
                        <a className="value" href='https://www.linkedin.com/in/maulik-sharma-0b5989352' target='_blank' rel="noopener noreferrer" aria-label="Maulik Sharma on LinkedIn">maulik-sharma</a>
                    </div>
                    <div>
                        <a className="label" href='https://github.com/maulik-sharma' target='_blank' rel="noopener noreferrer" aria-label="GitHub profile">Github</a>
                        <a className="value" href='https://github.com/maulik-sharma' target='_blank' rel="noopener noreferrer" aria-label="Maulik Sharma on GitHub">maulik-sharma</a>
                    </div>

            </div>
        <div className="footer-item" style={{paddingRight: "3%"}}>
            <h2>Navigation</h2>
                <div>
                    <Link className="label" to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Navigate to home page">Maulik Sharma</Link>
                    <Link className="value" to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Go to top of home page">&uarr;</Link>
                </div>
                <div>
                    <Link to="/projects" className="label" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Navigate to projects page">Projects</Link>
                    <Link className="value" to="/projects" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Go to top of projects page">&uarr;</Link>
                </div>
                <div>
                    <Link className="label" to='/contact' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Navigate to contact page">Contact</Link>
                    <Link className="value" to='/contact' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Go to top of contact page">&uarr;</Link>
                </div>

        </div>
        </footer>
    </>
    )   
}