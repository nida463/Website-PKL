// src/Components/molecules/NavbarMenu.js
import React from 'react';
import NavbarItem from '../../atoms/'; // Mengimpor NavbarItem dari atoms
import '../../styles/Navbar.css'; 

const NavbarMenu = () => {
  return (
    <div className="menu-items">
      <NavbarItem href="#about">About</NavbarItem>
      <NavbarItem href="#work">Work</NavbarItem>
      <NavbarItem href="#contact">Contact</NavbarItem>
    </div>
  );
};

export default NavbarMenu;
