// src/Components/auth/BukuDigital.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/Bukudigital.css";

const BukuDigital = () => {
  const [bukuDigital, setBukuDigital] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get("http://116.206.212.234:4000/buku-digital");
        if (response.data) {
          setBukuDigital(response.data);
        } else {
          setError("Data tidak ditemukan.");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Gagal mengambil data buku digital. Coba lagi.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Fungsi untuk membuka PDF di tab baru
  const openPDF = (filePath) => {
    const fullUrl = `http://116.206.212.234:4000${filePath.replace("handler/http", "")}`;
    window.open(fullUrl, "_blank");
  };

  return (
    <div className="sektoral-container">
        <Navb
      <div className="sektoral-box">
        <h2 className="sektoral-title">Daftar Buku Digital</h2>
        {error && <p className="error-message">{error}</p>}

        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="result-table table-striped">
            <h3>Hasil Pencarian</h3>
            <table>
              <thead>
                <tr>
                  <th>Judul Buku</th>
                  <th>Tahun</th>
                  <th>Detail</th>
                </tr>
              </thead>
              <tbody>
                {bukuDigital.length > 0 ? (
                  bukuDigital.map((buku) => (
                    <tr key={buku.id_buku_digital}>
                      <td>{buku.buku}</td>
                      <td>{buku.tahun}</td>
                      <td>
                        <button
                          className="detail-button"
                          onClick={() => openPDF(buku.file)} // Menambahkan fungsi openPDF di sini
                        >
                          Detail
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="3">Tidak ada data yang ditemukan</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default BukuDigital;
