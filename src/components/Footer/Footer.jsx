import './Footer.css';
import logo from '../../assets/logoapp.svg';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="footer-links">
        <h4>Menu</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="footer-support footer-links">
          <h4>Support</h4>
          <ul>
            <li><a href="#">Account</a></li>
            <li><a href="#">Support Center</a></li>
            <li><a href="#">Feedback</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
