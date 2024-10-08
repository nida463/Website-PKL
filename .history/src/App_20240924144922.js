import React from 'react';
import Navbar from './Components/organisms/navbar/Navbar'; // Mengimpor Navbar dari organisms/navbar
import Header from './Components/organisms/header/Header'; // Mengimpor Header dari organisms/header


function App() {
  return (
    <div className="App">
      <Navbar /> {/* Memanggil komponen Navbar */}
      <Header /> {/* Memanggil komponen Header */}
      {/* Komponen lain bisa ditambahkan di sini */}
    </div>
  );
}

export default App;
