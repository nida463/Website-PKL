import React from 'react';
import Navbar from './Components/organisms/Navbar'; // Mengimpor Navbar dari organisms/navbar

function App() {
  return (
    <div className="App">
      <Navbar /> {/* Memanggil komponen Navbar */}
      {/* Komponen lain bisa ditambahkan di sini */}
    </div>
  );
}

export default App;