// src/Components/auth/Layout.js
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Layout = ({ children }) => {
  const navigate = useNavigate();
  
  // Fungsi untuk logout
  const handleLogout = () => {
    localStorage.removeItem('token'); // Hapus token dari localStorage
    navigate('/'); // Arahkan kembali ke halaman login
  };

  return (
    <div>
      <nav className="navbar">
        <ul>
          <li><Link to="/main">Home</Link></li>
          <li><Link to="/sektoral">Data Sektoral</Link></li>
          <li><Link to="/buku-digital">Buku Digital</Link></li>
          <li><button onClick={handleLogout}>Logout</button></li>
        </ul>
      </nav>
      <div className="content">
        {children}
      </div>
    </div>
  );
};

export default Layout;
