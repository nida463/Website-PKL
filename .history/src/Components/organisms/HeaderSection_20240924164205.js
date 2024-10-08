import React from "react";
import TextSection from '../../molecules/header/TextSection'; // Pastikan path ini benar
import '../../styles/Header.css'; // Pastikan file ini ada dan huruf besar-kecilnya sesuai

const Header = () => {
  return (
    <section id="Header">
      <div className="layout">
        <TextSection />
        <div className="image-section">
          <img src="/img/Header.png" alt="Visual" />
        </div>
      </div>
    </section>
  );
};

export default Header;
