// src/Components/organisms/Navbar.js
import React from 'react';
import '../../styles/Navbar.css'; 
import Logo from '../atoms/Logo'; // Mengimpor komponen Logo dari atoms
import NavbarMenu from '../molecules/NavbarMenu'; // Mengimpor komponen NavbarMenu

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo di sebelah kiri */}
      <Logo />
      
      {/* Menu di sebelah kanan */}
      <NavbarMenu />
    </nav>
  );
};

export default Navbar;

import React from 'react';
import '../../styles/Navbar.css'; 
import Logo from '../atoms/LogoAtom'; // Mengimpor komponen LogoAtom dari atoms
import NavbarMenu from '../molecules/NavbarMenu'; // Mengimpor komponen NavbarMenu

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo di sebelah kiri */}
      <Logo />
      
      {/* Menu di sebelah kanan */}
      <NavbarMenu />
    </nav>
  );
};

export default Navbar;
