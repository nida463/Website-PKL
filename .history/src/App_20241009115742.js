// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate } from "react-router-dom";
import Login from "./Components/auth/Login";
import MainConten from "./Components/template/mainconten";
import Sektoral from "./Components/auth/Sektoral";
import BukuDigital from "./Components/auth/BukuDigital";
import { login } from "./Components/auth/LoginService";
import NavbarMenu from "./components/molecules/navbar/NavbarMenu"; // Pastikan untuk mengimpor NavbarMenu

function App() {
    return (
        <Router>
            <NavbarMenu /> {/* Menambahkan NavbarMenu di luar Routes untuk ditampilkan di setiap halaman */}
            <Routes>
                {/* Route untuk halaman login */}
                <Route path="/" element={<LoginWrapper />} />

                {/* Route untuk halaman dengan navbar */}
                <Route path="/main" element={<ProtectedRoute><MainConten /></ProtectedRoute>} />
                <Route path="/sektoral" element={<ProtectedRoute><Sektoral /></ProtectedRoute>} />
                <Route path="/buku-digital" element={<ProtectedRoute><BukuDigital /></ProtectedRoute>} />
            </Routes>
        </Router>
    );
}

// Fungsi pembungkus untuk login
function LoginWrapper() {
    const navigate = useNavigate();

    const handleLogin = async (nip, password) => {
        try {
            const result = await login(nip, password);
            alert('Login berhasil!');
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
        return <Navigate to="/" />;
    }

    return children;
}

export default App;
