import React from 'react';
import TestiBodyText from './TestiBodyTeks';
import Avatar from "../../atoms/Image";
import Star from "../../atoms/";


const TestimoniFooter = ({ avatarSrc, avatarAlt, nama, company }) => {
  return (
    <div className="testimoni-footer">
      <Avatar src={avatarSrc} alt={avatarAlt} />
      <div className="testimoni-detile">
        <div className="testimoni-start">
          <Star src="/img/testimoni/Star.png" alt="Star" />
          <Star src="/img/testimoni/Star.png" alt="Star" />
          <Star src="/img/testimoni/Star.png" alt="Star" />
          <Star src="/img/testimoni/Star.png" alt="Star" />
          <Star src="/img/testimoni/Star.png" alt="Star" />
        </div>
        <TestiBodyText nama={nama} company={company} />
      </div>
    </div>
  );
};

export default TestimoniFooter;
