import React from 'react';
import TestimonialItem from '../molecules/TestimonialItem';
import './Testimonial.css';  // CSS untuk Testimonial section

const Testimonial = () => {
  return (
    <div className="testimonial-section">
      <TestimonialItem 
        avatar="/img/client.png"
        name="Gemma Nolen"
        company="Google"
        testimonial="Amazing experience working with this team."
      />
      <TestimonialItem 
        avatar="/img/client2.png"
        name="John Doe"
        company="Nike"
        testimonial="Very professional and creative!"
      />
    </div>
  );
};

export default Testimonial;
