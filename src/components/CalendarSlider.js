

import React, { useState } from 'react';
import './CalendarSlider.css'; // Import your CSS file

const CalendarSlider = () => {
  const [currentWeekStart, setCurrentWeekStart] = useState(new Date());
  const [selectedDateIndex, setSelectedDateIndex] = useState(null);

  const generateDateCards = () => {
    const dates = [];
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const startDate = new Date(currentWeekStart);
    for (let i = 0; i < 7; i++) {
      const date = new Date(startDate);
      date.setDate(date.getDate() + i);
      const dayOfWeek = daysOfWeek[date.getDay()];
      dates.push(
        <div
          key={i}
          className={`date-card ${selectedDateIndex === i ? 'selected' : ''}`}
          onClick={() => setSelectedDateIndex(i)}
        >
          <p><div className="date">{date.getDate()}</div></p>
          <div className="day">{dayOfWeek}</div>
        </div>
      );
    }
    return dates;
  };

  const navigatePrev = () => {
    const newWeekStart = new Date(currentWeekStart);
    newWeekStart.setDate(newWeekStart.getDate()-1);
    setCurrentWeekStart(newWeekStart);
  };

  const navigateNext = () => {
    const newWeekStart = new Date(currentWeekStart);
    newWeekStart.setDate(newWeekStart.getDate()+1);
    setCurrentWeekStart(newWeekStart);
  };

  return (
    <div className="calendar-slider">
      <button className="prev-btn" onClick={navigatePrev}>&lt;</button>
      <div className="dates-wrapper">
        {generateDateCards()}
      </div>
      <button className="next-btn" onClick={navigateNext}>&gt;</button>
    </div>
  );
};

export default CalendarSlider;
