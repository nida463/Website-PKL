
import React from 'react';
import './LogoImage.css';

const LogoImage = ({ src, alt }) => {
  return (
    <div className="logo">
      <img src={src} alt={alt} />
    </div>
  );
};

export default LogoImage;
