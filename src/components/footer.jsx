import './footer.css'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-item" style={{paddingRight: "20%"}}>
                <h2>Contact</h2>
                    <div>
                        <p>Email</p>
                        <p>maulik.jaipur@gmail.com</p>
                    </div>
                    <div>
                        <p>Linkedin</p>
                        <p>Linkedin</p>
                    </div>
                    <div>
                        <p>Github</p>
                        <p>Github</p>
                    </div>
                    <div>
                        <p>Instagram</p>
                        <p>Instagram</p>
                    </div>

            </div>
            <div className="footer-item" style={{paddingRight: "3%"}}>
                <h2>Navigation</h2>
                    <div>
                        <p>Maulik Sharma</p>
                        <p>&uarr;</p>
                    </div>
                    <div>
                        <p>Projects</p>
                        <p>&uarr;</p>
                    </div>
                    <div>
                        <p>Contact</p>
                        <p>&uarr;</p>
                    </div>

            </div>
        </footer>
    )
}