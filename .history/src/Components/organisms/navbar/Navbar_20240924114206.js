import React from 'react';
import Logo from '../atoms/navbar/Logo';
import Navbaritem from '../molecules/navbar/NavMenu';
import './Navbar.css'; // Mengimpor file CSS untuk Navbar

const Navbar = () => {
  return (
    <nav className="navbar">
      <Logo />
      <Nav />
    </nav>
  );
};

export default Navbar;
