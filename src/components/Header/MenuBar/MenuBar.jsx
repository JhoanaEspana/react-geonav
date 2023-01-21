import { useState } from 'react';
import { FaStream } from "react-icons/fa";
import logo from '../../../assets/logoapp.svg';
import './MenuBar.css';

const MenuBar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const handleClick = () => {
    setMenuActive(!menuActive);
  };

  return (
    <header className="menu-bar">
      <img src={logo} alt="logo" />
      <nav className={`menu-bar-nav ${menuActive ? 'active' : ''}`}>
        <a href="/#">Home</a>
        <a href="/#">About us</a>
        <a href="/#">Contact</a>
      </nav>
      <button className="menu-button" onClick={handleClick}>
        <FaStream />
      </button>
    </header>
  );
};

export default MenuBar;

