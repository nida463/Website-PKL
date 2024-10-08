import React from 'react';
import NavbarSection from './components/organisms/NavbarSection';
import HeaderSection from './components/organisms/HeaderSection';
import SkillsSection from './components/organisms/SkillsSection';
import GallerySection from './components/organisms/GallerySection';
import TestimonialSection from './components/organisms/TestimonialSection';
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
