import React from 'react';
import Navbar from './Components/organisms/Navbar'; // Navbar.js di folder organisms
import Header from './Components/organisms/Header'; // Header.js di folder organisms
import Logo from './Components/organisms/Logo'; // Logo.js di folder organisms

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Logo />
    </div>
  );
}

export default App;
