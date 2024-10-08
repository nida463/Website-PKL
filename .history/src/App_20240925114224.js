import React from 'react';
import NavbarSection from './Components/organisms/NavbarSection';
import HeaderSection from './Components/organisms/HeaderSection';
import SkillsSection from './components/organisms/SkillsSection';
import GallerySection from './components/organisms/GallerySection';
import TestimonialSection from './Components/organisms/TestimonialSection.js';
import ContactSection from './components/organisms/ContactSection';

const App = () => {
  return (
    <div>
      <NavbarSection />
      <HeaderSection />
      <SkillsSection />
      <GallerySection />
      <TestimonialSection />
      <ContactSection />
    </div>
  );
};

export default App;
