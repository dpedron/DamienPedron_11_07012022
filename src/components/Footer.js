import logo from "../assets/logo-footer.svg"
import "../styles/css/Footer.css"

function Footer() {
    return (
        <footer>
            <img src={logo} alt="Kasa" className="footer--logo" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer;