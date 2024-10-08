import React from 'react';
import './styles/Header.css'; 
import Title from '../atoms/Title';
import Text from '../atoms/Text';
import Image from '../atoms/Image';

const Header = () => {
  return (
    <header id="Header">
      <div className="layout">
        <div className="text-section">
          <Title>Branding | Pembuatan gambar</Title>
          <Text>Desainer Visual</Text>
          <Text>
            Ini adalah file template Figma, diubah menjadi kode menggunakan Anima. Pelajari lebih lanjut di AnimaApp.com
          </Text>
          <a href="#Kontak">Kontak</a>
        </div>
        <div className="image-section">
          <Image src="/img/Header.png" alt="Visual" />
        </div>
      </div>
    </header>
  );
};

export default Header;
