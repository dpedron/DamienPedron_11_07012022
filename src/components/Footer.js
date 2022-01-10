import React from "react";
import logo from "../assets/logo-footer.svg"
import "../styles/css/Footer.css"

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <img src={logo} alt="Kasa" className="footer--logo" />
                <p>© 2020 Kasa. All rights reserved</p>
            </footer>
        )
    }
}

export default Footer;