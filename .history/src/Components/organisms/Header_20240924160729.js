import React from "react";
import TextSection from "../../molecules/header/TextSection";
import '../../../styles/header.css'; // Path yang benar menuju style/navbar.css


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
