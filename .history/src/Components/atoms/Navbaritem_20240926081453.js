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

// src/components/atoms/navbar/NavbarItem.js
import React from 'react';

const NavbarItem = ({ label, href }) => {
  return (
    <li>
      <a href={href}>{label}</a>
    </li>
  );
};

export default NavbarItem;
