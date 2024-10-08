import React from 'react';
import Navbar from './Components/organisms/navbar/Navbar';  // Mengimpor Navbar
import Header from './Components/organisms/header/Header';  // Mengimpor Header
import Logo from './Components/organisms/logo/Logo';  // Mengimpor Logo

function App() {
  return (
    <div className="App">
      <Navbar />  {/* Navbar Component */}
      <Header />  {/* Header Component */}
      <Logo />    {/* Logo Component */}
    </div>
  );
}

export default App;
