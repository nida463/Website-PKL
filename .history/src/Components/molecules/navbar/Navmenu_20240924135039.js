import React from 'react';
import Navbaritem from '../molecules/navbar/Navbaritem';

const NavMenu = () => {
  return (
    <div className="menu-items">
      <Navbaritem href="#about" label="About" />
      <Navbaritem href="#work" label="Work" />
      <Navbaritem href="#contact" label="Contact" />
    </div>
  );
};

export default NavMenu;
