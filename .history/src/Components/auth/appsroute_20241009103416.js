// src/AppRoute.js
import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate } from "react-router-dom";
import Navbar from "./Components/organisms/Navbar"; // Import Navbar dari organisms
import Login from "./Components/auth/Login";
import MainConten from "./Components/template/MainConten"; // Home page
import Sektoral from "./Components/auth/Sektoral"; // Halaman Sektoral
import BukuDigital from "./Components/auth/BukuDigital"; // Halaman Buku Digital
import { login } from "./Components/auth/LoginService";

function AppRoute() {
    return (
        <Router>
            <Navbar /> {/* Navbar yang akan muncul di semua halaman */}
            <Routes>

                {/* Route untuk halaman login */}
                <Route path="/" element={<LoginWrapper />} />

                {/* Route untuk halaman utama (Home), hanya bisa diakses jika sudah login */}
                <Route path="/main" element={<ProtectedRoute><MainConten /></ProtectedRoute>} />

                {/* Route untuk halaman Sektoral, hanya bisa diakses jika sudah login */}
                <Route path="/sektoral" element={<ProtectedRoute><Sektoral /></ProtectedRoute>} />

                {/* Route untuk halaman Buku Digital, hanya bisa diakses jika sudah login */}
                <Route path="/buku-digital" element={<ProtectedRoute><BukuDigital /></ProtectedRoute>} />

            </Routes>
        </Router>
    );
}

// Fungsi pembungkus untuk login, menambahkan navigasi setelah berhasil login
function LoginWrapper() {
    const navigate = useNavigate();

    const handleLogin = async (nip, password) => {
        try {
            const result = await login(nip, password);
            alert('Login berhasil!');
            // Navigasi ke halaman utama setelah login berhasil
            navigate('/main');
        } catch (error) {
            console.error('Login gagal:', error);
            alert('Login gagal: NIP atau password salah.');
        }
    };

    return <Login onLogin={handleLogin} />;
}

// Komponen untuk melindungi route, memastikan pengguna hanya bisa mengakses jika sudah login
function ProtectedRoute({ children }) {
    const token = localStorage.getItem('token');

    if (!token) {
        // Jika tidak ada token, arahkan kembali ke halaman login
        return <Navigate to="/" />;
    }

    // Jika ada token, render konten yang di-protect
    return children;
}

export default AppRoute;
