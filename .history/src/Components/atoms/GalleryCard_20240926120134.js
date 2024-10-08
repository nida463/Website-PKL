// GalleryCard.js
import React from 'react';
import './GalleryCard.css'; // CSS untuk GalleryCard

const GalleryCard = ({ src, alt, title, subtitle }) => {
    return (
        <div className="gallery-card">
            <img src={src} alt={alt} className="gallery-image" />
            <div className="gallery-text">
                <h3 className="gallery-title">{title}</h3>
                <p className="gallery-subtitle">{subtitle}</p>
            </div>
        </div>
    );
};

export default GalleryCard;
