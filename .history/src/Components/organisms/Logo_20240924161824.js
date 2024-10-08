import React from 'react';
import LogoGroup from '../../molecules/logo/LogoGroup'; // Menyesuaikan path
import '../../styles/logo.css'; // Path untuk CSS logo

const Logo = () => {
  return (
    <div className="logo-section">
      <LogoGroup />
    </div>
  );
};

export default Logo;
