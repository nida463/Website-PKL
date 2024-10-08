import React from 'react';
import '../../styles/Atoms.css';

const NavbarItem = ({ label, href }) => {
  return (
    <a href={href} className="navbar-item">
      {label}
    </a>
  );
};

export default NavbarItem;
