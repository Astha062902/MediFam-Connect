import React from "react";
import "./dashboard_mother.css";

const DashboardMom = () => {
  // Mock data for menstrual information
  const menstrualInfo = {
    lastMenstrualPeriod: "February 1, 2024",
    cycleLength: 28,
    duration: 5,
    flow: "Medium",
  };

  // Mock data for obstetric history
  const obstetricHistory = [
    {
      id: 1,
      pregnancyNumber: 1,
      gestationalAge: "40 weeks",
      deliveryDate: "December 15, 2018",
      modeOfDelivery: "Vaginal",
      complications: "None",
    },
    {
      id: 2,
      pregnancyNumber: 2,
      gestationalAge: "38 weeks",
      deliveryDate: "June 20, 2020",
      modeOfDelivery: "C-section",
      complications: "Postpartum hemorrhage",
    },
  ];

  return (
    <div className="dashboard-container">
      <div className="patient-info">
        <div className="patient-header">
          <img
            src="https://img.freepik.com/premium-vector/happy-positive-young-woman-showing-gesture-concept-sign-language-gestures_697837-65.jpg?w=740"
            alt="Patient"
            className="patient-photo"
          />
        </div>
        <h2 className="patient-name">Megha Aggarwal</h2>
        <div className="patient-details">
          <div className="detail">
            <i className="fas fa-birthday-cake"></i>
            <p>Age: 32</p>
          </div>
          <div className="detail">
            <i className="fas fa-ruler-vertical"></i>
            <p>Height: 160 cm</p>
          </div>
          <div className="detail">
            <i className="fa-solid fa-weight-scale"></i>
            <p>Weight: 55 kg</p>
          </div>
          <div className="detail">
            <i className="fas fa-tint" style={{ color: "red" }}></i>
            <p>Blood Group: A+</p>
          </div>
        </div>
      </div>
      <div className="allergies-container">
      <h3><i className="fas fa-allergies"></i> Allergies</h3>
        <div className="legend">
          <div className="legend-item">
            <div className="legend-bump light"></div>
            <span className="legend-text">Mild</span>
          </div>
          <div className="legend-item">
            <div className="legend-bump moderate"></div>
            <span className="legend-text">Moderate</span>
          </div>
          <div className="legend-item">
            <div className="legend-bump severe"></div>
            <span className="legend-text">Severe</span>
          </div>
        </div>
        <div className="allergies-content">
          <div className="allergy-item">
            <div className="allergy-bump light"></div>
            <span className="allergy-text">Dairy Allergy</span>
          </div>
          <div className="allergy-item">
            <div className="allergy-bump severe"></div>
            <span className="allergy-text">Soy Allergy</span>
          </div>
        </div>
      </div>
      <div className="menstrual-info-container">
        <h3><i className="fas fa-calendar-alt"></i> Menstrual Information</h3>
        <div className="menstrual-info-content">
          <p><i className="fas fa-history"></i> Last Menstrual Period: {menstrualInfo.lastMenstrualPeriod}</p>
          <p><i className="fas fa-clock"></i> Cycle Length: {menstrualInfo.cycleLength} days</p>
          <p><i className="fas fa-hourglass-half"></i> Duration: {menstrualInfo.duration} days</p>
          <p><i className="fas fa-tint"></i> Flow: {menstrualInfo.flow}</p>
        </div>
      </div>
      <div className="obstetric-history-container">
        <h3><i className="fas fa-baby-carriage"></i> Obstetric History</h3>
        <div className="obstetric-history-content">
          <table className="obstetric-history-table">
            <thead>
              <tr>
                <th>Pregnancy #</th>
                <th>Gestational Age</th>
                <th>Delivery Date</th>
                <th>Mode of Delivery</th>
                <th>Complications</th>
              </tr>
            </thead>
            <tbody>
              {obstetricHistory.map((pregnancy) => (
                <tr key={pregnancy.id}>
                  <td>{pregnancy.pregnancyNumber}</td>
                  <td>{pregnancy.gestationalAge}</td>
                  <td>{pregnancy.deliveryDate}</td>
                  <td>{pregnancy.modeOfDelivery}</td>
                  <td>{pregnancy.complications}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
    </div>
  );
};

export default DashboardMom;
