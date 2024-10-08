// Navbar.js
import React from 'react';
import './Navbar.css'; // Mengimpor file CSS untuk Navbar
import Logo from './Logo'; // Mengimpor Logo Atom
import MenuItem from './molecules/MenuItem'; // Mengimpor MenuItems Molekul

const Navbar = () => {
  return (
    <nav className="navbar">
      <Logo />
      <MenuItems />
    </nav>
  );
};

export default Navbar;
