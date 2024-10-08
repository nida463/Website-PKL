// Logo.js
import React from 'react';
import './Lo.css'; // CSS for the LogoImage

const LogoImage = ({ src, alt }) => {
    return (
        <div className="logo">
            <img src={src} alt={alt} />
        </div>
    );
};

export default LogoImage;
