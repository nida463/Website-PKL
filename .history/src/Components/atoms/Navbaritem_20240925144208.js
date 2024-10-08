// src/Components/atoms/NavbarItem.js
import React from 'react';
import './NavbarItem.css'; // CSS untuk NavbarItem

const NavbarItem = ({ href, children }) => {
  return (
    <a href={href} className="navbar-item">
      {children}
    </a>
  );
};

export default NavbarItem;

