

//MedicationsPage.js
import React, { useState, useEffect } from 'react';
import './med.css';

const MedicationsPage = () => {
  const [medications, setMedications] = useState([]);
  const [newMedication, setNewMedication] = useState({
    type: 'tablet',
    name: '',
    dosage: '',
    dosageFrequency: 'daily',
    dosageTimes: 'once',
    timing: [],
    instructions: '',
  });

  useEffect(() => {
    // Define initial medication data
    const initialMedications = [
       
        { 
          name: "Omeprazole",
          dosage: "20mg",
          dosageFrequency: "Daily",
          dosageTimes: "Once",
          timing: ["Morning"],
          instructions: "Take before breakfast",
          type: "capsule"
        },
        { 
          name: "Ibuprofen ",
          dosage: "200mg",
          dosageFrequency: "Daily",
          dosageTimes: "Once",
          timing: ["Afternoon"],
          instructions: "Take with/after food",
          type: "tablet"
        },
        { 
            name: "Eye Drop",
            dosage: "1 drop",
            dosageFrequency: "Daily",
            dosageTimes: "Once",
            timing: ["Night"],
            instructions: "Administer one drop in each eye",
            type: "eye-drops"
          }
      ];
      
    setMedications(initialMedications);
  }, []); // Run once on component mount

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMedication({ ...newMedication, [name]: value });
  };

  const handleTimingSelection = (time) => {
    const timing = newMedication.timing.includes(time)
      ? newMedication.timing.filter(t => t !== time)
      : [...newMedication.timing, time];
    setNewMedication({ ...newMedication, timing });
  };

  const handleAddMedication = () => {
    // Add new medication to the list
    setMedications([...medications, newMedication]);
    // Reset form fields after adding medication
    setNewMedication({
      type: 'tablet',
      name: '',
      dosage: '',
      dosageFrequency: 'daily',
      dosageTimes: 'once',
      timing: [],
      instructions: '',
    });
  };

  return (
    <div className="container">
      <div className="medication-cards">
        <h1>Current Medications</h1>
        {medications.map((medication, index) => (
          <div key={index} className="medication-card">
            <div className="medication-details">
              <img src={`${medication.type}.png`} alt={medication.type} />
              <p className="medication-name">{medication.name}</p>
              </div>
              <p className="medication-dosage">{`Dosage: ${medication.dosage},  ${medication.dosageFrequency}-${medication.dosageTimes} `}</p>
            <p className="medication-timing">{`Time: ${medication.timing.join(', ')}`}</p>
            <p className="medication-instructions">{`Instructions: ${medication.instructions}`}</p>
          </div>
        ))}
      </div>


        <div className="container">
        <div className="form-container">
          <div className="new-medication-form">
            <h2>Add New Medication</h2>
            <div className="medication-icons">
            <label className={`medication-option ${newMedication.type === 'tablet' ? 'selected' : ''}`}>
                <input
                  type="radio"
                  name="type"
                  value="tablet"
                  checked={newMedication.type === 'tablet'}
                  onChange={handleInputChange}
                />
                <div className="medication-option-content">
                  <div className="medication-option-icon">
                    <img src="tablet.png" alt="tablet" />
                  </div>
                  <span>Tablet</span>
                </div>
              </label>
              <label className={`medication-option ${newMedication.type === 'capsule' ? 'selected' : ''}`}>
                <input
                  type="radio"
                  name="type"
                  value="capsule"
                  checked={newMedication.type === 'capsule'}
                  onChange={handleInputChange}
                />
                <div className="medication-option-content">
                  <div className="medication-option-icon">
                    <img src="capsule.png" alt="Capsule" />
                  </div>
                  <span>Capsule</span>
                </div>
              </label>
              <label className={`medication-option ${newMedication.type === 'syrup' ? 'selected' : ''}`}>
                <input
                  type="radio"
                  name="type"
                  value="syrup"
                  checked={newMedication.type === 'syrup'}
                  onChange={handleInputChange}
                />
                <div className="medication-option-content">
                  <div className="medication-option-icon">
                    <img src="syrup.png" alt="Syrup" />
                  </div>
                  <span>Syrup</span>
                </div>
              </label>
              <label className={`medication-option ${newMedication.type === 'syringe' ? 'selected' : ''}`}>
                <input
                  type="radio"
                  name="type"
                  value="syringe"
                  checked={newMedication.type === 'syringe'}
                  onChange={handleInputChange}
                />
                <div className="medication-option-content">
                  <div className="medication-option-icon">
                    <img src="syringe.png" alt="syringe" />
                  </div>
                  <span>Injections</span>
                </div>
              </label>
              <label className={`medication-option ${newMedication.type === 'inhaler' ? 'selected' : ''}`}>
                <input
                  type="radio"
                  name="type"
                  value="inhaler"
                  checked={newMedication.type === 'inhaler'}
                  onChange={handleInputChange}
                />
                <div className="medication-option-content">
                  <div className="medication-option-icon">
                    <img src="inhaler.png" alt="inhaler" />
                  </div>
                  <span>Inhaler</span>
                </div>
              </label>
              <label className={`medication-option ${newMedication.type === 'medicine-powder' ? 'selected' : ''}`}>
                <input
                  type="radio"
                  name="type"
                  value="medicine-powder"
                  checked={newMedication.type === 'medicine-powder'}
                  onChange={handleInputChange}
                />
                <div className="medication-option-content">
                  <div className="medication-option-icon">
                    <img src="medicine-powder.png" alt="medicine-powder" />
                  </div>
                  <span>Powder</span>
                </div>
              </label>
              <label className={`medication-option ${newMedication.type === 'eye-drops' ? 'selected' : ''}`}>
                <input
                  type="radio"
                  name="type"
                  value="eye-drops"
                  checked={newMedication.type === 'eye-drops'}
                  onChange={handleInputChange}
                />
                <div className="medication-option-content">
                  <div className="medication-option-icon">
                    <img src="eye-drops.png" alt="eye-drops" />
                  </div>
                  <span>Eye Drops</span>
                </div>
              </label>
              {/* Add more icons for different types of medications */}
            </div>
    

        <form>
          <div className="form-group">
            <label>Name of Medicine:</label>
            <input
              type="text"
              name="name"
              value={newMedication.name}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label>Dosage (in mg/ml):</label>
            <input
              type="text"
              name="dosage"
              value={newMedication.dosage}
              onChange={handleInputChange}
            />
            <select
              name="dosageFrequency"
              value={newMedication.dosageFrequency}
              onChange={handleInputChange}
            >
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
            </select>
            <select
              name="dosageTimes"
              value={newMedication.dosageTimes}
              onChange={handleInputChange}
            >
              <option value="once">Once</option>
              <option value="twice">Twice</option>
              <option value="thrice">Thrice</option>
              <option value="four times">Four Times</option>
            </select>
          </div>

          <div className="form-group">
          <label>Timing:</label>
          <div className="timing-icons">
            <label className={`medication-option ${newMedication.timing.includes('morning') ? 'selected' : ''}`}>
              <input
                type="checkbox"
                name="morning"
                checked={newMedication.timing.includes('morning')}
                onChange={() => handleTimingSelection('morning')}
              />
              <div className="medication-option-content">
                <div className="medication-option-icon">
                  <img src="sunrise.png" alt="Morning" />
                </div>
                <span>Morning</span>
              </div>
            </label>
            <label className={`medication-option ${newMedication.timing.includes('afternoon') ? 'selected' : ''}`}>
              <input
                type="checkbox"
                name="afternoon"
                checked={newMedication.timing.includes('afternoon')}
                onChange={() => handleTimingSelection('afternoon')}
              />
              <div className="medication-option-content">
                <div className="medication-option-icon">
                  <img src="sun.png" alt="Afternoon" />
                </div>
                <span>Afternoon</span>
              </div>
            </label>
            <label className={`medication-option ${newMedication.timing.includes('evening') ? 'selected' : ''}`}>
              <input
                type="checkbox"
                name="evening"
                checked={newMedication.timing.includes('evening')}
                onChange={() => handleTimingSelection('evening')}
              />
              <div className="medication-option-content">
                <div className="medication-option-icon">
                  <img src="sunset.png" alt="Evening" />
                </div>
                <span>Evening</span>
              </div>
            </label>
            <label className={`medication-option ${newMedication.timing.includes('night') ? 'selected' : ''}`}>
              <input
                type="checkbox"
                name="night"
                checked={newMedication.timing.includes('night')}
                onChange={() => handleTimingSelection('night')}
              />
              <div className="medication-option-content">
                <div className="medication-option-icon">
                  <img src="moon.png" alt="Night" />
                </div>
                <span>Night</span>
              </div>
            </label>
          </div>
        </div>

          <div className="form-group">
            <label>Instructions:</label>
            <textarea
              name="instructions"
              value={newMedication.instructions}
              onChange={handleInputChange}
            ></textarea>
          </div>

          <button type="button" onClick={handleAddMedication}>
            Add Medication
          </button>
        </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default MedicationsPage;







// MedicationsPage.js

// import React, { useState, useEffect } from 'react';
// import './med.css';

// const MedicationsPage = () => {
//   const [medications, setMedications] = useState([]);
//   const [newMedication, setNewMedication] = useState({
//     type: 'tablet',
//     name: '',
//     dosage: '',
//     dosageFrequency: 'daily',
//     dosageTimes: 'once',
//     timing: [],
//     instructions: '',
//   });

//   useEffect(() => {
//     // Define initial medication data
//     const initialMedications = [
//       { name: "Aspirin", dosage: "500mg", dosageFrequency: "daily", dosageTimes: "once", timing: ["morning"], instructions: "Take with food", type: "tablet" },
//       { name: "Amoxicillin", dosage: "250mg", dosageFrequency: "daily", dosageTimes: "twice", timing: ["morning", "night"], instructions: "Take on an empty stomach", type: "capsule" },
//       // Add more medication objects as needed
//     ];
//     setMedications(initialMedications);
//   }, []); // Run once on component mount

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewMedication({ ...newMedication, [name]: value });
//   };

//   const handleTimingSelection = (time) => {
//     const timing = newMedication.timing.includes(time)
//       ? newMedication.timing.filter(t => t !== time)
//       : [...newMedication.timing, time];
//     setNewMedication({ ...newMedication, timing });
//   };

//   const handleAddMedication = () => {
//     // Add new medication to the list
//     setMedications([...medications, newMedication]);
//     // Reset form fields after adding medication
//     setNewMedication({
//       type: 'tablet',
//       name: '',
//       dosage: '',
//       dosageFrequency: 'daily',
//       dosageTimes: 'once',
//       timing: [],
//       instructions: '',
//     });
//   };

//   return (
//     <div className="container">
//       <div className="new-medication-form">
//         <h2>Add New Medication</h2>
//         <div className="medication-icons">
//           <label className={`medication-option ${newMedication.type === 'tablet' ? 'selected' : ''}`}>
//             <input
//               type="radio"
//               name="type"
//               value="tablet"
//               checked={newMedication.type === 'tablet'}
//               onChange={handleInputChange}
//             />
//             <div className="medication-option-content">
//               <div className="medication-option-icon">
//                 <img src="tablet.png" alt="Tablet" />
//               </div>
//               <span>Tablet</span>
//             </div>
//           </label>
//           <label className={`medication-option ${newMedication.type === 'capsule' ? 'selected' : ''}`}>
//             <input
//               type="radio"
//               name="type"
//               value="capsule"
//               checked={newMedication.type === 'capsule'}
//               onChange={handleInputChange}
//             />
//             <div className="medication-option-content">
//               <div className="medication-option-icon">
//                 <img src="capsule.png" alt="Capsule" />
//               </div>
//               <span>Capsule</span>
//             </div>
//           </label>
//           {/* Add more icons for different types of medications */}
//         </div>

//         <div className="form-group">
//           <label>Timing:</label>
//           <div className="timing-icons">
//             <label className={`medication-option ${newMedication.timing.includes('morning') ? 'selected' : ''}`}>
//               <input
//                 type="checkbox"
//                 name="morning"
//                 checked={newMedication.timing.includes('morning')}
//                 onChange={() => handleTimingSelection('morning')}
//               />
//               <div className="medication-option-content">
//                 <div className="medication-option-icon">
//                   <img src="sunrise.png" alt="Morning" />
//                 </div>
//                 <span>Morning</span>
//               </div>
//             </label>
//             <label className={`medication-option ${newMedication.timing.includes('afternoon') ? 'selected' : ''}`}>
//               <input
//                 type="checkbox"
//                 name="afternoon"
//                 checked={newMedication.timing.includes('afternoon')}
//                 onChange={() => handleTimingSelection('afternoon')}
//               />
//               <div className="medication-option-content">
//                 <div className="medication-option-icon">
//                   <img src="sun.png" alt="Afternoon" />
//                 </div>
//                 <span>Afternoon</span>
//               </div>
//             </label>
//             <label className={`medication-option ${newMedication.timing.includes('evening') ? 'selected' : ''}`}>
//               <input
//                 type="checkbox"
//                 name="evening"
//                 checked={newMedication.timing.includes('evening')}
//                 onChange={() => handleTimingSelection('evening')}
//               />
//               <div className="medication-option-content">
//                 <div className="medication-option-icon">
//                   <img src="sunset.png" alt="Evening" />
//                 </div>
//                 <span>Evening</span>
//               </div>
//             </label>
//             <label className={`medication-option ${newMedication.timing.includes('night') ? 'selected' : ''}`}>
//               <input
//                 type="checkbox"
//                 name="night"
//                 checked={newMedication.timing.includes('night')}
//                 onChange={() => handleTimingSelection('night')}
//               />
//               <div className="medication-option-content">
//                 <div className="medication-option-icon">
//                   <img src="moon.png" alt="Night" />
//                 </div>
//                 <span>Night</span>
//               </div>
//             </label>
//           </div>
//         </div>

//         {/* Rest of the form */}
//         {/* ... */}
//       </div>
//     </div>
//   );
// };

// export default MedicationsPage;

