import React from 'react';
import NavbarSection from './Components/organisms/NavbarSection';
import HeaderSection from './Components/organisms/HeaderSection';
import SkillsSection from './Components/organisms/SkillsSection';
import GallerySection from './Components/organisms/GallerySection';
import TestimonialSection from './Components/organisms/TestimonialSection';
import ContactSection from './Components/organisms/ContactSection';

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
