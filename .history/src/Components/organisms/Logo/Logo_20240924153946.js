// src/Components/organisms/logo/Logo.js
import React from 'react';
import LogoGroup from '../molecules/logo/LogoGroup';
import '../../../styles/header.css';

const Logo = () => {
  return (
    <div className="logo-organism">
      <LogoGroup />
    </div>
  );
};

export default Logo;
