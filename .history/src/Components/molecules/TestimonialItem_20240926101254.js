import React from 'react';
import ImageAtom from '../atoms/ImageAtom';
import DescriptionAtom from '../atoms/DescriptionAtom';
import './Testimonial.css';  // CSS untuk testimonial item

const TestimonialItem = ({ avatar, name, company, testimonial }) => {
  return (
    <div className="testimonial-item">
      <ImageAtom src={avatar} alt={name} width="50" height="50" />
      <DescriptionAtom text={testimonial} size="small" color="gray" />
      <DescriptionAtom text={name} size="medium" color="black" />
      <DescriptionAtom text={company} size="small" color="gray" />
    </div>
  );
};

export default TestimonialItem;
