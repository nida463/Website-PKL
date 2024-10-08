import React from 'react';
import Logo from '../atoms/navbar/Logo';
import Navbaritem from '../molecules/navbar/Navbaritem';
import '../../style/navbar.css'; // Memperbaiki path ke file CSS yang ada di src/style

const Navbar = () => {
  return (
    <nav className="navbar">
      <Logo />
      <Navbaritem />
    </nav>
  );
};

export default Navbar;
