// src/Components/molecules/logo/LogoGroup.js
import React from 'react';
import LogoImage from '../atoms/logo/LogoImage';
import './LogoGroup.css';

const LogoGroup = () => {
  return (
    <div className="logo-bar">
      <LogoImage src="/img/Google.png" alt="Google Logo" />
      <LogoImage src="/img/Nike.png" alt="Nike Logo" />
      <LogoImage src="/img/Samsung.png" alt="Samsung Logo" />
      <LogoImage src="/img/Apple.png" alt="Apple Logo" />
      <LogoImage src="/img/Adidas.png" alt="Adidas Logo" />
    </div>
  );
};

export default LogoGroup;
