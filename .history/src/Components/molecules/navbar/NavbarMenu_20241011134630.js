// src/components/molecules/navbar/NavbarMenu.js
import React from "react";
import { Link, NavLink } from "react-router-dom"; // Mengimpor NavLink dari react-router-dom
import NavbarItem from "../../atoms/navbar/NavbarItem";

const NavbarMenu = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <NavbarItem label="Logo" /> {/* Jika Anda ingin logo ditampilkan */}
      </div>
      <ul className="navbar-menu">
        <li>
          <NavLink 
            to="/" 
            activeClassName="active" 
            className="navbar-item"
          >
            <NavbarItem label="Home" />
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/sektoral" 
            activeClassName="active" 
            className="navbar-item"
          >
            <NavbarItem label="Data Sektoral" />
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/buku-digital" 
            activeClassName="active" 
            className="navbar-item"
          >
            <NavbarItem label="Buku Digital" />
          </NavLink>
        </li>
        <li>
          <button 
            className="logout-button"
            onClick={() => {
              localStorage.removeItem('token'); // Hapus token saat logout
              window.location.href = '/'; // Arahkan ke halaman login setelah logout
            }}
          >
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarMenu;
