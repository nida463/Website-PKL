[15.27, 2/10/2024] Satria Nur Ramadan Rpl: import React from "react";
import BrandingSection from "../molecules/header/BrandingSection";
import BodyTextH from "../molecules/header/BodyTextH";
import ButonContact from "../molecules/header/ButonContact";
import Image from "../atoms/Image";
import "../../styles/Header.css"; 

const HeaderContent = () => {
  return (
    <div className="layout">
      <div className="text-section">
        <BrandingSection />
        <BodyTextH/>
        <ButonContact />
      </div>
      <div className="image-section">
        <Image src="/img/header/Header.png" alt="Visual" />
      </div>
    </div>
  );
};

export default HeaderContent;
[15.27, 2/10/2024] Satria Nur Ramadan Rpl: import React from "react";
import "../../styles/Logo.css"; // Path ke CSS di styles
import LogoItem from "../molecules/logo/LogoItem";

const LogoSection = () => {
  return (
    <div className="logo-section">
      <LogoItem src="/img/logo/Google.png" alt="Google Logo" />
      <LogoItem src="/img/logo/Nike.png" alt="Nike Logo" />
      <LogoItem src="/img/logo/Samsung.png" alt="Samsung Logo" />
      <LogoItem src="/img/logo/Apple.png" alt="Apple Logo" />
      <LogoItem src="/img/logo/Adidas.png" alt="Adidas Logo" />
    </div>
  );
};

export default LogoSection;