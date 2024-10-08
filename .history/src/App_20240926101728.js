import React from 'react';
import Navbar from './Components/organisms/Navbar';
import Skills from './Components/organisms/Skills';
import Testimonial from './Components/organisms/Testimonial';
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
