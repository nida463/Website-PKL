import React from 'react';
import NavbarMenu from '../molecules/NavbarMenu';
import './Navbar.css';  // CSS khusus untuk Navbar

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Logo</div>
      <NavbarMenu />
    </nav>
  );
};

export default Navbar;
