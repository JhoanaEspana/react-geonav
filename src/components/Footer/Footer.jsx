import './Footer.css';
import logoInalambria from '../../assets/inalambria.png';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-logo">
          <img src={logoInalambria} alt="logo inalambria" />
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
        <div className="copyright">
          <p>Copyright <a href="https://github.com/JhoanaEspana" target="_blank">@JhoEspana</a> 2023 All rights reserved.</p>
        </div>
    </footer>
  );
};

export default Footer;
