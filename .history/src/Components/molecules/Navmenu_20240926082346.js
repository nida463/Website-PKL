// src/components/molecules/navbar/NavbarMenu.js
import React from "react";
import NavbarItem from "../../atoms/navbar/NavbarItem";
import Logo from "../../atoms/Logo"

const NavbarMenu = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
         < Logo />
      </div>
      <ul className="navbar-menu">
        <NavbarItem label="About" />
        <NavbarItem label="Work" />
        <NavbarItem label="Contact" />
      </ul>
    </nav>
  );
};

export default NavbarMenu;
