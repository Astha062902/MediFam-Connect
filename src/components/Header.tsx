// Header.tsx

import React from "react";
import "./Header.css"; // Import your CSS file
import logo from "./logo.png";
const Header: React.FC = () => {
  return (
    <header className="main-header">
      <div className="logo-container">
        <img src={logo} alt="Medifam Connect Logo" />
      </div>
      <nav className="main-nav">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#features">Features</a>
          </li>
          <li>
            <a href="#about">About Us</a>
          </li>
          <li>
            <a href="#contact">Contact Us</a>
          </li>
          <li>
            <a href="#login">Login</a>
          </li>
          <li>
            <a href="#signup">Sign Up</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

