// Logo.js
import React from 'react';
import './Logo.css'; // CSS for the LogoImage

const LogoImage = ({ src, alt }) => {
    return (
        <div className="logo">
            <img src={src} alt={alt} />
        </div>
    );
};

export default LogoImage;
