import React from 'react';
import NavItem from '../atoms/NavItem'; // Mengimpor atom NavItem
import './NavMenu.css'; // Mengimpor file CSS untuk NavMenu

const NavMenu = () => {
  return (
    <div className="menu-items">
      <NavItem href="#about" text="About" />
      <NavItem href="#work" text="Work" />
      <NavItem href="#contact" text="Contact" />
    </div>
  );
};

export default NavMenu;
