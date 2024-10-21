// src/Components/Page.js/Error404.js
import React from "react";
import '../../styles/Error404.css';  // Pastikan path-nya benar

function Error404() {
    return (
        <div className="error-container">
            <h1 className="error-title">404</h1>
            <p className="error-message">Oops! Halaman yang kamu cari tidak ditemukan.</p>
            <a href="/" className="error-link">Kembali ke Beranda</a>
        </div>
    );
}

export default Error404;
