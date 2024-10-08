import React from 'react';
import Navbaritem from '../atoms/navbar/Navbaritem';
import 

const Navmenu = () => {
  return (
    <div className="menu-items">
      <Navbaritem href="#about" label="About" />
      <Navbaritem href="#work" label="Work" />
      <Navbaritem href="#contact" label="Contact" />
    </div>
  );
};

export default Navmenu;
