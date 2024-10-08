// src/Components/molecules/NavbarMenu.js
import React from 'react';
import './Navbar.css'; // Mengimpor CSS untuk styling

const NavbarMenu = () => {
  return (
    <div className="menu-items">
      <a href="#about">About</a>
      <a href="#work">Work</a>
      <a href="#contact">Contact</a>
    </div>
  );
};

export default NavbarMenu;
