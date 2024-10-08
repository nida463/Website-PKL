// src/components/atoms/navbar/NavbarItem.js
import React from 'react';

const NavbarItem = ({ label, href }) => {
  return (
    <div>
      <a href={href}>{label}</a>
    </li>
  );
};

export default NavbarItem;
