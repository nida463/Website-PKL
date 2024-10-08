import React from "react";
import Navbar from "../organisms/Navbar";
import Header from "../organisms/Header";
import Logo from "../organisms/Logo";
import Skills from "../organisms/Skills";
import Gallery from "../organisms/Gallery";
import Testimoni from "../organisms/Testimoni";
import Contact from "../organisms/Contact";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const MainConten = () => {
  const navigate = useNavigate(); // Gunakan useNavigate untuk navigasi

  // Fungsi untuk handle logout
  const handleLogout = () => {
    // Hapus token dari localStorage
    localStorage.removeItem('token');
    // Arahkan pengguna kembali ke halaman login
    navigate('/');
  };

  return (
    <div>
      <Navbar />
      <Header />
      <Logo />
      <Skills />
      <Gallery />
      <Testimoni />
      <Contact />

      {/* Tombol logout */}
      <div style={{ textAlign: 'right', margin: '20px' }}>
        <button onClick={handleLogout} style={{ padding: '10px 20px', backgroundColor: '#f00', color: '#fff', border: 'none', borderRadius: '5px' }}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default MainConten;