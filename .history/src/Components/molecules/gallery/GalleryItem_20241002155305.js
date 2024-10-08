// src/components/molecules/GalleryItem.js
import React from "react";
import GalleryImage from "../../atoms//GalleryImage";

const GalleryItem = ({ src, alt, title, description }) => {
  return (
    <div className="gallery-item" >
      <GalleryImage src={src} alt={alt} />
      <div className="gallery-text">
        <h3 className="gallery-subtitle">{title}</h3>
        <p className="gallery-body-text">{description}</p>
      </div>
    </div>
  );
};

export default GalleryItem;
