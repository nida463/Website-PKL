import React from 'react';
import LogoGroup from '../molecules/LogoGroup'; // Path disesuaikan
import '../../styles/logo.css'; // Path CSS juga diperbaiki

const Logo = () => {
  return (
    <div className="logo-section">
      <LogoGroup />
    </div>
  );
};

export default Logo;
