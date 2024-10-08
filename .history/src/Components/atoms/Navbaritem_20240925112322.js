import React from 'react';
import './Atoms.css';

const NavbarItem = ({ label, href }) => {
  return (
    <a href={href} className="navbar-item">
      {label}
    </a>
  );
};

export default NavbarItem;
