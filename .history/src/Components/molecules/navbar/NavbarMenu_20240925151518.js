// src/Components/molecules/NavbarMenu.js
import React from 'react';
import NavbarItem from '../atoms/NavbarItem'; // Mengimpor NavbarItem dari atoms

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
