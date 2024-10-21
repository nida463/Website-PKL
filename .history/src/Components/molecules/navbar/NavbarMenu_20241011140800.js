// src/components/molecules/navbar/NavbarMenu.js
import React from "react";
import { Link } from "react-router-dom"; // Mengimpor Link dari react-router-dom
import NavbarItem from "../../atoms/navbar/NavbarItem";

const NavbarMenu = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <NavbarItem label="Logo" /> {/* Jika Anda ingin logo ditampilkan */}
      </div>
      <ul className="navbar-menu">
        <li>
          <Link to="/">
            <NavbarItem label="Home" className="navbar-item" />
          </Link>
        </li>
        <li>
          <Link to="/sektoral">
            <NavbarItem label="Data Sektoral" className="navbar-item" />
          </Link>
        </li>
        <li>
          <Link to="/buku-digital">
            <NavbarItem label="Buku Digital" className="navbar-item" />
          </Link>
        </li>
        <li>
          <button
            className="logout-button"
            onClick={() => {
              localStorage.removeItem("token"); // Hapus token saat logout
              window.location.href = "/"; // Arahkan ke halaman login setelah logout
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
