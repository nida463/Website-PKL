// src/App.js
import React from 'react';
import NavbarMenu from './Components/organisms/NavbarMenu'; // Mengimpor Navbar dari organisms

const App = () => {
  return (
    <div>
      <NavbarMenu /> {/* Navbar sekarang diimpor dari organisms */}
    </div>
  );
};

export default App;
