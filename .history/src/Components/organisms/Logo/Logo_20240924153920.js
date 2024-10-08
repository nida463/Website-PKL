// src/Components/organisms/logo/Logo.js
import React from 'react';
import LogoGroup from '../molecules/logo/LogoGroup';
import './Logo.css';

const Logo = () => {
  return (
    <div className="logo-organism">
      <LogoGroup />
    </div>
  );
};

export default Logo;