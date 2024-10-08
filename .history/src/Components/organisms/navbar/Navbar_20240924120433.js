import React from 'react';
import Logo from '../../atoms/navbar/Logo'; // Memperbaiki path ke atoms/navbar/Logo
import NavMenu from '../../molecules/navbar/NavMenu'; // Memperbaiki path ke molecules/navbar/NavMenu
import '../../../style/navbar.css'; // Path yang benar menuju style/navbar.css

const Navbar = () => {
  return (
    <nav className="navbar">
      <Logo />
      <NavMenu />
    </nav>
  );
};

export default Navbar;
