// src/App.js
import React from 'react';
import NavbarMfrom './Components/organisms/Navbar'; // Mengimpor Navbar dari organisms

const App = () => {
  return (
    <div>
      <Navbar /> {/* Navbar sekarang diimpor dari organisms */}
    </div>
  );
};

export default App;
