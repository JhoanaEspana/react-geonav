import React from 'react';
import { useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../../assets/logoapp.svg';
import './MenuBar.css';

const MenuBar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav');
  };

  return (
      <header>
        <img src={logo} alt="logo" />
        <nav ref={navRef}>
          <a href="/#">Home</a>
          <a href="/#">About us</a>
          <a href="/#">Contact</a>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </header>
  );
};

export default MenuBar;
