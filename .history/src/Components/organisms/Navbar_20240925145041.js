// src/Components/organisms/Navbar.js
import React from 'react';
import './Navbar.css'; // Mengimpor CSS untuk Navbar
import LogoNavbar from '../atoms/LogoNavbar'; // Mengimpor komponen LogoNavbar
import NavbarMenu from '../molecules/NavbarMenu'; // Mengimpor komponen NavbarMenu

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo di sebelah kiri */}
      <LogoNavbar />
      
      {/* Menu di sebelah kanan */}
      <NavbarMenu />
    </nav>
  );
};

export default Navbar;
