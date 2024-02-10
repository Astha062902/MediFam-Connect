// ContactSection.tsx

import React from "react";
import "./ContactSection.css"; // Import your CSS file

const ContactSection: React.FC = () => {
  return (
    <section className="contact-section">
      <h2>Contact Information</h2>
      <p>For support or inquiries, reach out to us:</p>
      <div className="contact-info">
        <p>Email: support@medifamconnect.com</p>
        {/* Add more contact information as needed */}
      </div>
      {/* Optionally, include a contact form here */}
    </section>
  );
};

export default ContactSection;
