import React from 'react';
import Logo from '../atoms/navbar/Logo';
import NavMenu from '../molecules/navbar/NavMenu';
import './Navbar.css'; // Mengimpor file CSS untuk Navbar

const Navbar = () => {
  return (
    <nav className="navbar">
      <Logo />
      <NavMenu />
    </nav>
  );
};

export default Navbar;
