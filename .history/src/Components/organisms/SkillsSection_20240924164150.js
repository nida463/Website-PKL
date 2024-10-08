import React from 'react';
import LogoGroup from '../../molecules/logo/LogoGroup'; // Pastikan path ini benar
import '../../styles/Logo.css'; // Pastikan file ini ada dan nama file huruf besar-kecil sesuai

const Logo = () => {
  return (
    <div className="logo-section">
      <LogoGroup />
    </div>
  );
};

export default Logo;
