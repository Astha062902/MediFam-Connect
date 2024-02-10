// HeroSection.tsx

import React from "react";
import "./HeroSection.css"; // Import your CSS file

const HeroSection: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Medifam Connect: Your Family's Health, Simplified</h1>
        <p>Streamline and organize your family's health records with ease.</p>
        <a href="#signup" className="cta-button">
          Get Started
        </a>
      </div>
      <div className="hero-image">
        <img src="/path/to/family-image.jpg" alt="Happy and Healthy Family" />
      </div>
    </section>
  );
};

export default HeroSection;
