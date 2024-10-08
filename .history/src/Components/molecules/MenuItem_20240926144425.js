// MenuItems.js
import React from 'react';
import Navlink from '../atoms/Navlink'; // Mengimpor NavLink Atom


const MenuItems = () => {
  return (
    <div className="menu-items">
      <Navink href="#about">About</NavLink>
      <NavLink href="#work">Work</NavLink>
      <NavLink href="#contact">Contact</NavLink>
    </div>
  );
};

export default MenuItems;

