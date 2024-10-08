// src/Components/molecules/Navbar.js
import React from 'react';
import './Navbar.css'; // Mengimpor file CSS untuk Navbar
import LogoNavbar from './LogoNavbar'; // Mengimpor komponen LogoNavbar
import NavbarMenu from './NavbarMenu'; // Mengimpor komponen NavbarMenu

const Navbar = () => {
  return (
    <nav className="navbar">
      <LogoNavbar /> {/* Menggunakan komponen LogoNavbar */}
      <NavbarMenu /> {/* Menggunakan komponen NavbarMenu */}
    </nav>
  );
};

export default Navbar;
