// FeaturesSection.tsx

import React from "react";
import "./FeaturesSection.css"; // Import your CSS file
import SecureIcon from "./icons/secure-icon.png"; // Import your secure icon
import DashboardIcon from "./icons/dashboard-icon.png"; // Import your dashboard icon
import ReminderIcon from "./icons/reminder-icon.png"; // Import your reminder icon

const FeaturesSection: React.FC = () => {
  return (
    <section className="features-section">
      <h2>Key Features</h2>
      <div className="feature">
        <img src={SecureIcon} alt="Secure Health Records Icon" />
        <p>Secure Health Records</p>
      </div>
      <div className="feature">
        <img src={DashboardIcon} alt="Family Dashboard Icon" />
        <p>Family Dashboard</p>
      </div>
      <div className="feature">
        <img src={ReminderIcon} alt="Appointment Reminders Icon" />
        <p>Appointment Reminders</p>
      </div>
      {/* Add more features as needed */}
    </section>
  );
};

export default FeaturesSection;
