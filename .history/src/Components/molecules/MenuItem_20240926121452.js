// Navbar.js
import React from 'react';
import './Navbar.css'; // Mengimpor file CSS untuk Navbar
import NavLink from './NavLink'; // Mengimpor NavLink Atom

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Logo</div>
      <div className="menu-items">
        <NavLink href="#about">About</NavLink>
        <NavLink href="#work">Work</NavLink>
        <NavLink href="#contact">Contact</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
