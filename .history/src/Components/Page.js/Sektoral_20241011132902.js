.sektoral-container {
  width: 100%;
  max-width: 800px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
}

.sektoral-title {
  text-align: center;
  margin-bottom: 20px;
  color: #333;
}

.search-form {
  margin-bottom: 20px;
}

.search-inputs {
  display: flex;
  justify-content: flex-start;
  gap: 10px;
  flex-wrap: wrap;
}

.search-input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  flex: 1 1 150px; /* Ukuran minimum untuk input */
  min-width: 120px; /* Lebar minimum */
}

.search-button {
  padding: 8px;
  border: none;
  border-radius: 4px;
  background-color: #007BFF;
  color: white;
  font-size: 14px;
  cursor: pointer;
  flex: 0 0 100px; /* Lebar tombol pencarian */
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.search-button:hover {
  background-color: #0056b3;
  transform: scale(1.05); /* Efek zoom saat hover */
}

.sektoral-results {
  margin-top: 20px;
  margin-bottom: 20px;
}

.sektoral-table {
  width: 100%;
  border-collapse: collapse;
}

.sektoral-table th,
.sektoral-table td {
  border: 1px solid #ccc;
  padding: 8px;
  text-align: left;
}

.column-number {
  width: 25px !important; /* Lebar kolom nomor */
  text-align: center; /* Menyelaraskan teks di tengah */
}

.column-uraian {
  width: 45% !important; /* Lebar kolom untuk uraian */
}

.column-kategori {
  width: 30% !important; /* Lebar kolom untuk kategori */
}

/* CSS untuk Pagination */
.pagination {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.page-info {
  margin: 0 auto;
  font-size: 16px;
}

.pagination-button {
  background-color: #66b3ff; /* Biru muda */
  border: none;
  padding: 8px 12px;
  cursor: pointer;
  color: white;
  border-radius: 4px;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.pagination-button:disabled {
  background-color: #ddd;
  cursor: not-allowed;
}

.pagination-button:hover:not(:disabled) {
  background-color: #0056b3; /* Biru lebih tua saat hover */
  transform: scale(1.05); /* Efek zoom saat hover */
}

/* Tambahan untuk memberikan jarak antara judul dan tabel */
.sektoral-results {
  margin-top: 40px; /* Menambah jarak di atas tabel */
}
