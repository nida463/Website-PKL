export default NavbarItem;

// src/Components/atoms/NavbarItem.js
import React from 'react';
import './NavbarItem.css'; // Mengimpor CSS untuk styling item

const NavbarItem = ({ href, children }) => {
  return (
    <a className="navbar-item" href={href}>
      {children}
    </a>
  );
};

export default NavbarItem;
