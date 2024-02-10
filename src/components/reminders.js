
// import React, { useState } from 'react';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
// import './reminders.css';
// import CalendarSlider from './CalendarSlider'; // Import your CalendarSlider component

// const RemindersPage = () => {
//   const [date, setDate] = useState(new Date());

//   const onChange = (newDate) => {
//     setDate(newDate);
//   };

//   // Dummy data for reminder items
//   const reminders = [
//     { time: '8:30 AM', category: 'Medicines', name:  "Omeprazole", description: "Take before breakfast" },
//     { time: '2:30 AM', category: 'Medicines', name: "Ibuprofen", description: "Take with/after food" },
//     { time: '9:00 PM', category: 'Medicines', name: "Eye Drops", description: "Administer one drop in each eye" },
//     { time: '1:00 PM', category: 'Appointments', name: "Visit the Dentist", description: "Dr. Pranali, Model Town" },
  
//   ];

//   // Keep track of rendered categories to avoid repetition
//   const renderedCategories = {};

//   return (
//     <div className="container">
//       <div className="calendar-container">
//         <CalendarSlider /> {/* Render your CalendarSlider component */}
//         <h2 className="calendar-header">Calendar</h2>
//         <Calendar
//           onChange={onChange}
//           value={date}
//         />
//       </div>
//       <div className="reminders-container">
//         <h2>Reminders</h2>
//         <div className="timeline"></div>
//         {/* Render reminder items */}
//         {reminders.map((reminder, index) => {
//           // Render category name only if it hasn't been rendered yet
//           if (!renderedCategories[reminder.category]) {
//             renderedCategories[reminder.category] = true; // Mark category as rendered
//             return (
//               <React.Fragment key={reminder.category}>
//                 <h3>{reminder.category}</h3>
//                 <div className="reminder-item">
                  
//                   <div className="circle"></div>
//                   <div className="time">{reminder.time}</div>
//                   <div className="reminder-content">
//                     <b><p>{reminder.name}</p></b>
//                     <p>{reminder.description}</p>
//                   </div>
//                 </div>
//               </React.Fragment>
//             );
//           } else {
//             return (
//               <div className="reminder-item" key={index}>
//                 <div className="timeline"></div>
//                 <div className="circle"></div>
//                 <div className="time">{reminder.time}</div>
//                 <div className="reminder-content">
//                   <b><p>{reminder.name}</p></b>
//                   <p>{reminder.description}</p>
//                 </div>
//               </div>
//             );
//           }
//         })}
//       </div>
//     </div>
    
//   );
// };

// export default RemindersPage;
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './reminders.css';
import CalendarSlider from './CalendarSlider'; // Import your CalendarSlider component

const RemindersPage = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (newDate) => {
    setDate(newDate);
  };

  // Dummy data for reminder items
  const reminders = [
    { time: '8:30 AM', category: 'Medicines', name:  "Omeprazole", description: "Take before breakfast" },
    { time: '2:30 AM', category: 'Medicines', name: "Ibuprofen", description: "Take with/after food" },
    { time: '9:00 PM', category: 'Medicines', name: "Eye Drops", description: "Administer one drop in each eye" },
    { time: '1:00 PM', category: 'Appointments', name: "Visit the Dentist", description: "Dr. Pranali, Model Town" },
  ];

  // Keep track of rendered categories to avoid repetition
  const renderedCategories = {};

  return (
    <div className="container">
      <div className="calendar-container">
        <CalendarSlider /> {/* Render your CalendarSlider component */}
        <h2 className="calendar-header">Calendar</h2>
        <Calendar
          onChange={onChange}
          value={date}
        />
      </div>
      <div className="reminders-container">
        <h2>Reminders</h2>
        <div className="timeline"></div>
        {/* Render reminder items */}
        {reminders.map((reminder, index) => {
          // Render category name only if it hasn't been rendered yet
          if (!renderedCategories[reminder.category]) {
            renderedCategories[reminder.category] = true; // Mark category as rendered
            return (
              <React.Fragment key={reminder.category}>
                <h3>{reminder.category}</h3>
                <div className="reminder-item">
                  <div className="circle"></div>
                  <div className="time">{reminder.time}</div>
                  <div className="reminder-content">
                    <b><p>{reminder.name}</p></b>
                    <p>{reminder.description}</p>
                  </div>
                </div>
              </React.Fragment>
            );
          } else {
            return (
              <div className="reminder-item" key={index}>
                <div className="timeline"></div>
                <div className="circle"></div>
                <div className="time">{reminder.time}</div>
                <div className="reminder-content">
                  <b><p>{reminder.name}</p></b>
                  <p>{reminder.description}</p>
                </div>
              </div>
            );
          }
        })}
        {/* Add Reminder button */}
        <button className="add-reminder-btn">Add Reminder</button>
      </div>
    </div>
  );
};

export default RemindersPage;
