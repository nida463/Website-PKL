import React from 'react';
import '../../styles/Atoms.css'; 

const Image = ({ src, alt }) => {
  return <img src={src} alt={alt} className="image" />;
};

export default Image;
