import React from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom"; 
import Login from "./Components/auth/Login";
import MainConten from "./Components/template/mainconten";
import Sektoral from "./Components/Page.js/Sektoral";
import BukuDigital from "./Components/Page.js/BukuDigital";
import Error404 from "./Components/Page.js/Error404"; 
import { login } from "./Components/auth/LoginService";
import NavbarMenu from "./Components/molecules/navbar/NavbarMenu"; 
import DataSet from "./Components/Page.js/DataSet"; // Tambahkan import DataSet

function App() {
    return (
        <Router>
            <Routes>
                {/* Route untuk halaman login tanpa Navbar */}
                <Route path="/login" element={<LoginWrapper />} />

                {/* Route untuk halaman dengan Navbar */}
                <Route element={<LayoutWithNavbar />}>
                    <Route path="/" element={<MainConten />} />
                    <Route path="/sektoral" element={<Sektoral />} />
                    <Route path="/buku-digital" element={<BukuDigital />} />
                    <Route path="/dataset" element={<DataSet />} /> {/* Tambahkan route untuk DataSet */}
                </Route>

                {/* Route untuk halaman yang tidak ditemukan (404 error) */}
                <Route path="*" element={<Error404 />} /> {/* Menampilkan halaman 404 */}
            </Routes>
        </Router>
    );
}

// Layout untuk halaman dengan Navbar
function LayoutWithNavbar() {
    return (
        <>
            <NavbarMenu />
            <Routes>
                <Route path="/" element={<MainConten />} />
                <Route path="/sektoral" element={<Sektoral />} />
                <Route path="/buku-digital" element={<BukuDigital />} />
                <Route path="/dataset" element={<DataSet />} /> {/* Tambahkan route untuk DataSet */}
            </Routes>
        </>
    );
}

// Fungsi pembungkus untuk login
function LoginWrapper() {
    const navigate = useNavigate();

    const handleLogin = async (nip, password) => {
        try {
            await login(nip, password); 
            alert('Login berhasil!');
            navigate('/'); // Mengarahkan ke halaman utama setelah login
        } catch (error) {
            console.error('Login gagal:', error);
            alert('Login gagal: NIP atau password salah.');
        }
    };

    return <Login onLogin={handleLogin} />;
}

export default App;
