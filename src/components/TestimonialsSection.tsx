// TestimonialsSection.tsx

import React from "react";
import "./TestimonialsSection.css"; // Import your CSS file

interface Testimonial {
  name: string;
  image: string;
  statement: string;
}

const testimonials: Testimonial[] = [
  {
    name: "John Doe",
    statement:
      "Medifam Connect has made it incredibly easy for our family to keep track of our health records. The family dashboard is a game-changer!",
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="testimonials-section">
      <h2>Customer Testimonials</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial" key={index}>
            <p>{testimonial.statement}</p>
            <cite>{testimonial.name}</cite>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
