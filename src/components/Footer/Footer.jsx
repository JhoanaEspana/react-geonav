import './Footer.css';
import logo from '../../assets/logoapp.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="footer-links">
          <ul>
            <li>
              <a href="#">Nosotros</a>
            </li>
            <li>
              <a href="#">Cuenta</a>
            </li>
          </ul>
        </div>
        <div className="footer-support">
          <h4>Support</h4>
        </div>
        <div className="footer-app">
          <img src={logo} alt="app-logo" />
          <h4>Get our app</h4>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
