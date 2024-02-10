// Header.tsx

import React from "react";
import "./Header.css"; // Import your CSS file

const Header: React.FC = () => {
  return (
    <header className="main-header">
      <div className="logo-container">
        <img
          src="/Users/anamikakumari/hacky/src/components/logo.png"
          alt="Medifam Connect Logo"
        />
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
            <a href="#pricing">Pricing</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
          <li>
            <a href="#signin">Sign In/Sign Up</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
