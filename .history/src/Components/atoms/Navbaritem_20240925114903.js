import React from 'react';

const NavbarItem = ({ label, href }) => {
  return (
    <a href={href} className="navbar-item">
      {label}
    </a>
  );
};

export default NavbarItem;
