// src/Components/molecules/NavbarMenu.js
import React from 'react';
import NavbarItem from './.././'; // Mengimpor NavbarItem dari atoms

const NavbarMenu = () => {
  return (
    <div className="navbar-menu">
      {/* Menggunakan NavbarItem dari atoms */}
      <NavbarItem href="#about">About</NavbarItem>
      <NavbarItem href="#work">Work</NavbarItem>
      <NavbarItem href="#contact">Contact</NavbarItem>
    </div>
  );
};

export default NavbarMenu;
