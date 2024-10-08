// Navbar.js
import React from 'react';
import './Navbar.css'; // Mengimpor file CSS untuk Navbar
import Logo from './Logo'; // Mengimpor Logo Atom
import MenuItems from './MenuItems'; // Mengimpor MenuItems Molekul

const Navbar = () => {
  return (
    <nav className="navbar">
      <Logo />
      <MenuItems />
    </nav>
  );
};

export default Navbar;

// Navbar.js
import React from 'react';
import './Navbar.css'; // Mengimpor file CSS untuk Navbar
import Logo from '../atoms/Logo'; // Mengimpor Logo Atom dari folder atoms
import MenuItems from '../molecules/MenuItems'; // Mengimpor MenuItems Molekul dari folder molecules

const Navbar = () => {
  return (
    <nav className="navbar">
      <Logo />
      <MenuItems />
    </nav>
  );
};

export default Navbar;
