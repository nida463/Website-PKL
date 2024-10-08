// src/Components/molecules/NavbarMenu.js
import React from 'react';
import '../../styles/Navbar.css'; 
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
