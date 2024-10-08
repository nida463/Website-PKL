import React from 'react';
import NavbarItem from "../../atoms/navbar/NavbarItem";

const Navmenu = () => {
  return (
    <div className="menu-items">
      <NavbarItem href="#about" label="About" />
      <NavbarItem href="#work" label="Work" />
      <Navbaritem href="#contact" label="Contact" />
    </div>
  );
};

export default Navmenu;
