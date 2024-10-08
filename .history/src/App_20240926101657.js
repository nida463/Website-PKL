import React from 'react';
import Navbar from './components/organisms/Navbar';
import Skills from './components/organisms/Skills';
import Testimonial from './components/organisms/Testimonial';
import './styles/global.css'; // Global CSS

function App() {
  return (
    <div className="App">
      <Navbar />
      <Skills />
      <Testimonial />
    </div>
  );
}

export default App;
