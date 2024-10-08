import React from 'react';
import './Atoms.css';

const Image = ({ src, alt }) => {
  return <img src={src} alt={alt} className="image" />;
};

export default Image;
