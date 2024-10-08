// src/molecules/NavbarMolecule.js
import React from 'react';
import LogoAtom from '../atoms/LogoAtom';
import NavItemAtom from '../atoms/NavItemAtom';

const NavbarMolecule = () => {
  return (
    <nav className="navbar">
      <LogoAtom />
      <div className="nav-items">
        <NavItemAtom label="Home" />
        <NavItemAtom label="About" />
        <NavItemAtom label="Services" />
        <NavItemAtom label="Contact" />
      </div>
    </nav>
  );
};

export default NavbarMolecule;
