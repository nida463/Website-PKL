// src/Components/atoms/NavbarItem.js
import React from 'react';
import '../../styles/Navbar.css'; // Mengimpor CSS dari folder styles

const NavbarItem = ({ href, children }) => {
  return (
    <a href={href} className="navbar-item">
      {children}
    </a>
  );
};

export default NavbarItem;

