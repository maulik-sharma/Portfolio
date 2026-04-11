import './footer.css'
import { Link, useNavigate } from 'react-router-dom'

export default function Footer() {
    return (
        <>
        <div className="footer-hr"></div>
        <footer className="footer">
            <div className="footer-item" style={{paddingRight: "20%"}}>
                <h2>Contact</h2>
                    <div>
                        <a className="label" href='mailto:maulik.jaipur@gmail.com' target='_blank'>Email</a>
                        <a className="value" href='mailto:maulik.jaipur@gmail.com' target='_blank'>maulik.jaipur@gmail.com</a>
                    </div>
                    <div>
                        <Link className="label" to='https://www.linkedin.com/in/maulik-sharma-0b5989352' target='_blank'>Linkedin</Link>
                        <Link className="value" to='https://www.linkedin.com/in/maulik-sharma-0b5989352' target='_blank'>maulik-sharma</Link>
                    </div>
                    <div>
                        <Link className="label" to='https://github.com/maulik-sharma' target='_blank'>Github</Link>
                        <Link className="value" to='https://github.com/maulik-sharma' target='_blank'>maulik-sharma</Link>
                    </div>

            </div>
        <div className="footer-item" style={{paddingRight: "3%"}}>
            <h2>Navigation</h2>
                <div>
                    <Link className="label" to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Maulik Sharma</Link>
                    <Link className="value" to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>&uarr;</Link>
                </div>
                <div>
                    <Link to="/projects" className="label" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Projects</Link>
                    <Link className="value" to="/projects" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>&uarr;</Link>
                </div>
                <div>
                    <Link className="label" to='/contact' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Contact</Link>
                    <Link className="value" to='/contact' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>&uarr;</Link>
                </div>

        </div>
        </footer>
    </>
    )   
}