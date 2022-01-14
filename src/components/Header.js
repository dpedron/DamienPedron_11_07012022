import logo from "../assets/logo.png"
import "../styles/css/Header.css"

function Header(){
    return (
        <header>
            <div className="header-content">
                <img src={logo} alt="Kasa" className="header-content--logo" />
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

export default Header;