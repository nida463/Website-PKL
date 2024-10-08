// MenuItems.js
import React from 'react';
import Navlink from '../atoms/Navlink'; // Mengimpor NavLink Atom


const MenuItems = () => {
  return (
    <div className="menu-items">
      <Navlink href="#about">About</Navlink>
      <Navlink href="#work">Work</Navlink>
      <Navlink href="#contact">Contact</Navlink>
    </div>
  );
};

export default MenuItems;

