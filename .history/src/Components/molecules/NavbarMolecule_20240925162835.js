// src/molecules/NavbarMolecule.js
import React from 'react';
import LogoAtom from '../atoms/Logo';
import NavItemAtom from '../atoms/NavbarItem';

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
