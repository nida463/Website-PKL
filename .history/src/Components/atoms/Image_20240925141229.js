// src/Components/atoms/Image.js
import React from 'react';
import './Image.css'; // CSS untuk Image

const Image = ({ src, alt }) => {
  return (
    <div className="image-section">
      <img src={src} alt={alt} />
    </div>
  );
};

export default Image;
