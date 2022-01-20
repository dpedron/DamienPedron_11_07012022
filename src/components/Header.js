import logo from '../assets/logo.png';
import '../styles/css/Header.css';
import { Link } from 'react-router-dom';

/**
 * This is the header used in every pages
 */

function Header() {
  return (
    <header className="header">
      <div className="header--content">
        <img src={logo} alt="Kasa" className="header--logo" />
        <nav>
          <ul>
            <li>
              <Link
                to="/DamienPedron_11_07012022/"
                onClick={() => (document.documentElement.scrollTop = 0)}
              >
                Accueil
              </Link>
            </li>
            <li>
              <Link
                to="/DamienPedron_11_07012022/about"
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
