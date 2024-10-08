import React from 'react';
import '.././styles/Atoms.css';

const StarRating = ({ rating }) => {
  return (
    <div className="star-rating">
      {Array.from({ length: 5 }, (_, index) => (
        <span key={index} className={index < rating ? 'filled' : ''}>★</span>
      ))}
    </div>
  );
};

export default StarRating;
