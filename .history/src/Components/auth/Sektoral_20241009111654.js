// src/Components/auth/Sektoral.js
import React, { useState, useEffect } from 'react';
import axios from "axios";
import "../../styles/Sektoral.css";

const Sektoral = () => {
  // ... kode yang sama seperti sebelumnya

  return (
    <div className="sektoral-container">
      <div className="sektoral-box">
        <h2 className="sektoral-title">Cari Data Sektoral</h2>
        <form className="search-form" onSubmit={handleSearch}>
          <div className="search-inputs">
            {/* Pilihan OPD, Urusan, dan Tahun */}
            {/* ... */}
            <button className="search-button" type="submit">
              <i className="fas fa-search" style={{ marginRight: "8px" }}></i>
              Cari
            </button>
          </div>
        </form>

        {error && <p className="error-message">{error}</p>}

        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="sektoral-results">
            <h3>Hasil Pencarian</h3>
            <table className="sektoral-table">
              <thead>
                <tr>
                  <th>Uraian</th>
                  <th>Satuan</th>
                  <th>Jenis</th>
                  <th>Kategori</th>
                </tr>
              </thead>
              <tbody>
                {results.length > 0 ? (
                  results.map((item, index) => (
                    <tr key={index}>
                      <td>{item.uraian_dssd}</td>
                      <td>{item.satuan}</td>
                      <td>{item.jenis_string}</td>
                      <td>{item.kategori_string}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4">Tidak ada data yang ditemukan</td>
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

export default Sektoral;
