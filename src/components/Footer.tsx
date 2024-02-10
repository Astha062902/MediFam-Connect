// Footer.tsx

import React from "react";
import "./Footer.css"; // Import your CSS file

const Footer: React.FC = () => {
  return (
    <footer className="main-footer">
      <div className="footer-links">
        <a href="/privacy-policy">Privacy Policy</a>
        <a href="/terms-of-service">Terms of Service</a>
        {/* Add more legal information links as needed */}
      </div>
      <div className="social-media-links">
        <a
          href="https://facebook.com/medifamconnect"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/path/to/facebook-icon.png" alt="Facebook" />
        </a>
        <a
          href="https://twitter.com/medifamconnect"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/path/to/twitter-icon.png" alt="Twitter" />
        </a>
        {/* Add more social media links as needed */}
      </div>
    </footer>
  );
};

export default Footer;
