import React from 'react';
import ButtonAtom from '../atoms/ButtonAtom';
import './Navbar.css'; // CSS untuk NavbarMenu

const NavbarMenu = () => {
  return (
    <div className="navbar-menu">
      <ButtonAtom text="About" onClick={() => console.log('About clicked')} />
      <ButtonAtom text="Work" onClick={() => console.log('Work clicked')} />
      <ButtonAtom text="Contact" onClick={() => console.log('Contact clicked')} />
    </div>
  );
};

export default NavbarMenu;
