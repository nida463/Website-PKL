// MenuItems.js
import React from 'react';
import NavLink from '../atoms/NavLink'; // Mengimpor NavLink Atom


const MenuItems = () => {
  return (
    <div className="menu-items">
      <NavLink href="#about">About</NavLink>
      <NavLink href="#work">Work</NavLink>
      <NavLink href="#contact">Contact</NavLink>
    </div>
  );
};

export default MenuItems;
