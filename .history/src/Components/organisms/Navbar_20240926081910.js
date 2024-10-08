// src/components/organisms/Navbar.js
import React from "react";
import NavbarMenu from "../molecules/navbar/NavbarMenu"; // Path ke NavbarMenu.js di molecules/navbar
import "../../styles/Navbar.css"; // Path ke CSS di styles

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
      </div>
      <NavbarMenu />
    </nav>
  );
};

export default Navbar;
