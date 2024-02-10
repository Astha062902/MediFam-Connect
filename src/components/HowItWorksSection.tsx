// HowItWorksSection.tsx

import React from 'react';
import './HowItWorksSection.css'; // Import your CSS file
import StepImage1 from './images/step1.png'; // Import your step 1 image
import StepImage2 from './images/step2.png'; // Import your step 2 image
import StepImage3 from './images/step3.png'; // Import your step 3 image

const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      image: StepImage1,
      title: 'Step 1',
      description: 'Create a Medifam Connect account.'
    },
    {
      image: StepImage2,
      title: 'Step 2',
      description: 'Add your family members and their health records.'
    },
    {
      image: StepImage3,
      title: 'Step 3',
      description: 'Explore the family dashboard and set up appointment reminders.'
    },
    // Add more steps as needed
  ];

  return (
    <section className="how-it-works-section">
      <h2>How It Works</h2>
      <div className="steps-container">
        {steps.map((step, index) => (
          <div className="step" key={index}>
            <img src={step.image} alt={`Step ${index + 1}`} />
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorksSection;
