// NavLink.js
import React from 'react';
import './Navink.css'; // CSS untuk NavLink

const NavLink = ({ href, children }) => {
  return (
    <a href={href} className="nav-link">
      {children}
    </a>
  );
};

export default NavLink;

