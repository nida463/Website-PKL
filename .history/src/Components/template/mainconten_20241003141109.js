import React, { useState } from "react"; // Import useState
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
  const [isHovered, setIsHovered] = useState(false); // State untuk efek hover

  // Fungsi untuk handle logout
  const handleLogout = () => {
    // Hapus token dari localStorage
    localStorage.removeItem('token');
    // Arahkan pengguna kembali ke halaman login
    navigate('/');
  };

  // Style untuk tombol logout
  const styles = {
    logoutButton: {
      padding: '10px 20px',
      backgroundColor: '#007bff', // Warna biru
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s, transform 0.3s',
      fontSize: '16px',
    },
    logoutButtonHover: {
      backgroundColor: '#0056b3', // Warna biru yang lebih gelap saat hover
      transform: 'scale(1.05)', // Efek pembesaran
    },
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
        <button
          onClick={handleLogout}
          style={{
            ...styles.logoutButton,
            ...(isHovered ? styles.logoutButtonHover : {}),
          }}
          onMouseEnter={() => setIsHovered(true)} // Mengatur state hover
          onMouseLeave={() => setIsHovered(false)} // Mengatur state hover
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default MainConten;
