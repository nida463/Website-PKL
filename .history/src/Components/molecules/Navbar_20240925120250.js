import React from 'react';
import NavbarItem from './atoms/NavbarItem';
import '../../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Logo</div>
      <div className="item-menu">
        <NavbarItem label="Tentang" href="#tentang" />
        <NavbarItem label="Pekerjaan" href="#kerja" />
        <NavbarItem label="Kontak" href="#contact" />
      </div>
    </nav>
  );
};

export default Navbar;
