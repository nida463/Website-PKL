import React from 'react';
import LogoGroup from '../../molecules/logo/LogoGroup';  // Mengimpor molekul LogoGroup
import './Logo.css';  // CSS untuk organism logo

const Logo = () => {
  return (
    <div className="logo-organism">
      <LogoGroup />
    </div>
  );
};

export default Logo;
