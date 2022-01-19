import logo from '../assets/logo.png';
import '../styles/css/Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="header--content">
        <img src={logo} alt="Kasa" className="header--logo" />
        <nav>
          <ul>
            <li>
              <Link
                to="/"
                onClick={() => (document.documentElement.scrollTop = 0)}
              >
                Accueil
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={() => (document.documentElement.scrollTop = 0)}
              >
                A propos
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
