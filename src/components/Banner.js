import React from "react";
import logo from "../assets/logo.png"
import "../styles/css/Banner.css"

class Banner extends React.Component {
    render(){
        return (
            <header>
                <div className="banner">
                    <img src={logo} alt="Kasa" className="banner--logo" />
                    <nav>
                        <ul>
                            <li><a>Accueil</a></li>
                            <li><a>A Propos</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        )
    }
}

export default Banner;