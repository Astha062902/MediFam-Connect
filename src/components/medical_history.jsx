import React from 'react';
import './medical_history.css';

const MedicalHistory = () => {
    // Fake encounter data
    const encounters = [
        { id: 1, 'date-year': '2022', 'date-month': 'January 1', condition: 'Pacemaker Surgery', medication: ['Painkillers', 'Antibiotics'], location: 'Cardiology Center', procedures:['Implantation of Pacemaker'], immunizations: ['Tetanus Shot'] },
        { id: 2, 'date-year': '2023', 'date-month': 'March 20', condition: 'Annual Checkup', medication: 'None', location: 'Local Clinic', procedures:['Physical Examination', 'Blood Tests'], immunizations: ['Flu Shot'] },
    ];

    return (
        <div className="timeline-container">
            <div className="timeline-line"></div>
            {encounters.map(encounter => (
                <div key={encounter.id} className="timeline-item">
                    <div className="timeline-bump"></div>
                    <div className="timeline-date">
                        <span className="date-year">{encounter['date-year']}</span><br />
                        <span className="date-month">{encounter['date-month']}</span>
                    </div>
                    <div className="timeline-content">
                        <h3>{encounter.condition}</h3>
                        <p className="hospital-name"><i className="fas fa-hospital"></i> {encounter.location}</p> {/* Display hospital name */}
                        <hr />
                        <h4>Procedures</h4>
                        <ul>
                            {encounter.procedures.map((procedure, index) => (
                                <li key={index}>{procedure}</li>
                            ))}
                        </ul>
                        <h4>Immunizations</h4>
                        <ul>
                            {encounter.immunizations.map((immunization, index) => (
                                <li key={index}>{immunization}</li>
                            ))}
                        </ul>
                        <hr />
                        <div className="clinical-reports">
                            <p className="clinical-reports-text">Clinical Reports</p>
                            <div className="view-details-container">
                                <p className="view-details-text">View Details <i className="fas fa-chevron-down"></i></p>
                            </div>
                        </div>
                        <div className="notes-section">
                            <div className="attachments-icon">
                                <i className="fas fa-paperclip"></i>
                            </div>
                            <div className="notes-box">
                                <p> Add notes here</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            {/* Add button */}
            <div className="add-button-container">
                <p className="add-button"><i className="fas fa-plus"></i>&nbsp;Add</p>
            </div>
        </div>
    );
};

export default MedicalHistory;
