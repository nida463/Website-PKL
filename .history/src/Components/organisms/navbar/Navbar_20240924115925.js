import React from 'react';
import Logo from '../atoms/navbar/Logo';          // Impor Logo dari atoms
import NavMenu from '../molecules/navbar/NavMenu'; // Impor NavMenu dari molecules
import '../../style/navbar.css';                  // Path ke file CSS yang benar

const Navbar = () => {
  return (
    <nav className="navbar">
      <Logo />          {/* Logo di sebelah kiri */}
      <NavMenu />       {/* Menu items di sebelah kanan */}
    </nav>
  );
};

export default Navbar;
