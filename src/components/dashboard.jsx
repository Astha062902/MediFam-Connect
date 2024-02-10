import React from "react";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="patient-info">
        <div className="patient-header">
          <img
            src="https://cdn.vectorstock.com/i/1000x1000/32/76/cartoon-senior-elderly-old-man-vector-25043276.webp"
            alt="Patient"
            className="patient-photo"
          />
        </div>
        <h2 className="patient-name">Arun Aggarwal</h2>
        <div className="patient-details">
          <div className="detail">
            <i className="fas fa-birthday-cake"></i>
            <p>Age: 65</p>
          </div>
          <div className="detail">
            <i className="fas fa-ruler-vertical"></i>
            <p>Height: 175 cm</p>
          </div>
          <div className="detail">
            <i className="fa-solid fa-weight-scale"></i>
            <p>Weight: 70 kg</p>
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
            <span className="allergy-text">Peanut Allergy</span>
          </div>
          <div className="allergy-item">
            <div className="allergy-bump severe"></div>
            <span className="allergy-text">Seafood Allergy</span>
          </div>
        </div>
      </div>
      <div className="medical-history-container">
      <h3><i className="fas fa-notes-medical"></i> Medical History</h3>
        <div className="medical-history-content">
          <div className="medical-condition">
            <h4>Pacemaker Surgery</h4>
            <ul>
              <li>Date: January 10, 2010</li>
              <li>Treatment: Pacemaker implantation</li>
            </ul>
            <div className="view-details">
              <button className="view-details-button">
                View Details <i className="fas fa-chevron-down"></i>
              </button>
              {/* Dropdown content can be added here */}
            </div>
          </div>
          <div className="medical-condition">
            <h4>High Blood Pressure</h4>
            <ul>
              <li>Date: February 15, 2015</li>
              <li>Treatment: Medication, lifestyle changes</li>
            </ul>
            <div className="view-details">
              <button className="view-details-button">
                View Details <i className="fas fa-chevron-down"></i>
              </button>
              {/* Dropdown content can be added here */}
            </div>
          </div>
          <div className="medical-condition">
            <h4>Diabetes</h4>
            <ul>
              <li>Date: March 20, 2020</li>
              <li>Treatment: Insulin therapy, diet control</li>
            </ul>
            <div className="view-details">
              <button className="view-details-button">
                View Details <i className="fas fa-chevron-down"></i>
              </button>
              {/* Dropdown content can be added here */}
            </div>
          </div>
        </div>
      </div>
      <div className="screenings-container">
      <h3><i className="fas fa-file-medical"></i> Recent Screenings</h3> 
        <div className="screenings-content">
          <table className="screenings-table">
            <thead>
              <tr>
                <th>Test</th>
                <th>Date</th>
                <th>Results</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              <tr className="screenings-row">
                <td>Blood Test</td>
                <td>January 25, 2024</td>
                <td>Normal</td>
                <td>
                <button className="view-details">
                    <i className="fas fa-info-circle"></i>{" "}
                    {/* Add the icon JSX element */}
                    More Details
                  </button>
                </td>
              </tr>
              <tr className="screenings-row">
                <td>MRI Scan</td>
                <td>February 10, 2024</td>
                <td>Abnormal - Further evaluation needed</td>
                <td>
                  <button className="view-details">
                    <i className="fas fa-info-circle"></i>{" "}
                    {/* Add the icon JSX element */}
                    More Details
                  </button>
                </td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
