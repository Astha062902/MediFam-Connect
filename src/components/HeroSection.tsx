// HeroSection.tsx

import React from "react";
import "./HeroSection.css"; // Import your CSS file

const HeroSection: React.FC = () => {
  const backgroundImageUrl =
    "https://www.fortishealthcare.com/drupal-data/styles/banner_image/azblob/2023-03/New-Web-Banner-03.jpg?itok=cxkOaBxp";

  return (
    <section
      className="hero-section"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <div className="hero-content">
        <h1>Medifam Connect: Your Family's Health, Simplified</h1>
        <p>Streamline and organize your family's health records with ease.</p>
        <a href="#signup" className="cta-button">
          Get Started
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
