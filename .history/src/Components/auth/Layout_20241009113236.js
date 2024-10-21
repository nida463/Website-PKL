// src/Components/auth/Layout.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NavbarMenu from '../molecules/navbar/NavbarMenu'; // Pastikan path ini benar
import "../../styles/Navbar.css"; // Sesuaikan dengan file CSS untuk styling

const Layout = ({ children }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token'); // Hapus token saat logout
    navigate('/'); // Arahkan ke halaman login setelah logout
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-logo">
          <NavbarItem label="Logo" /> {/* Logo di sebelah kiri */}
        </div>
        <ul className="navbar-menu">
          <li><Link to="/main">Home</Link></li>
          <li><Link to="/sektoral">Data Sektoral</Link></li>
          <li><Link to="/buku-digital">Buku Digital</Link></li>
          <li><button onClick={handleLogout}>Logout</button></li>
        </ul>
      </nav>
      <div className="content">
        {children} {/* Render konten halaman di sini */}
      </div>
    </div>
  );
};

export default Layout;
