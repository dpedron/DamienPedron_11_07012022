import logo from '../assets/logo-footer.svg';
import '../styles/css/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <img src={logo} alt="Kasa" className="footer--logo" />
      <p className="footer--copyright">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
