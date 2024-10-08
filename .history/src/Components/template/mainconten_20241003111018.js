import React, { useState } from "react";
import Navbar from "../organisms/Navbar";
import Header from "../organisms/Header";
import Logo from "../organisms/Logo";
import Skills from "../organisms/Skills";
import Gallery from "../organisms/Gallery";
import Testimoni from "../organisms/Testimoni";
import Contact from "../organisms/Contact";
import Login from "../auth/Login";
import Logout from "../auth/Logout";
import ProtectedRoute from "../auth/ProtectedRoute";

const MainConten = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);

  const handleLogin = async (credentials) => {
    try {
      const response = await fetch('http://116.206.212.234:4000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      if (response.ok) {
        const data = await response.json();
        setUserData(data);
        setIsLoggedIn(true);
        localStorage.setItem('token', data.token);  // Simpan token ke localStorage
        alert('Login berhasil');
      } else {
        const errorData = await response.json();
        alert(`Login gagal: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('Terjadi kesalahan saat login');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUserData(null);
    setIsLoggedIn(false);
    alert('Logout berhasil');
  };

  return (
    <div>
      <Navbar />
      <Header />
      <Logo />
      {isLoggedIn ? (
        <>
          <Skills />
          <Gallery />
          <Testimoni />
          <Contact />
          <Logout handleLogout={handleLogout} />
        </>
      ) : (
        <Login handleLogin={handleLogin} />
      )}
    </div>
  );
};

export default MainConten;
