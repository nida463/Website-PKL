// src/Components/auth/Layout.js
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/Navbar.css"; // Jika ada CSS untuk styling navbar

const Layout = ({ children }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token'); // Menghapus token login
        navigate("/"); // Redirect ke halaman login
    };

    return (
        <div>
            <nav className="navbar">
                <ul className="navbar-menu">
                    <li><Link to="/main">Home</Link></li>
                    <li><Link to="/sektoral">Data Sektoral</Link></li>
                    <li><Link to="/buku-digital">Buku Digital</Link></li>
                    <li><button onClick={handleLogout}>Logout</button></li>
                </ul>
            </nav>
            <main>{children}</main> {/* Konten halaman akan ditampilkan di sini */}
        </div>
    );
};

export default Layout;
