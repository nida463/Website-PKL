// src/Components/molecules/TextSection.js
import React from 'react';
import Text from '../atoms/Text'; // Menggunakan Text
import './TextSection.css'; // CSS untuk TextSection

const TextSection = () => {
  return (
    <div className="text-section">
      <Text className="branding">Branding | Image making</Text>
      <Text className="visual-designer">Visual Designer</Text>
      <Text className="description">
        This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com
      </Text>
      <Text className="contact">
        <a href="#contact">Contact</a>
      </Text>
    </div>
  );
};

export default TextSection;
