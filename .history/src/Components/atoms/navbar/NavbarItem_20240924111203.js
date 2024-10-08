import React from 'react';
import './NavbarItem.css'; // File CSS khusus untuk NavbarItem

const NavbarItem = ({ link, children }) => {
  return (
    <a href={link} className="navbar-item">
      {children}
    </a>
  );
};

export default NavbarItem;
