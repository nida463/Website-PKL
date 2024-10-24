/* Container for the main component */
.sektoral-container {
  padding: 20px;
  background-color: #f9f9f9;
}

/* Box for the form and results */
.sektoral-box {
  max-width: 900px;
  margin: auto;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

/* Title styles */
.sektoral-title {
  text-align: center;
  margin-top: 40px;
  margin-bottom: 20px;
  font-size: 24px;
  color: #007bff;
  animation: fadeIn 0.5s ease-in;
}

/* Fade in animation */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Form styles */
.sektoral-form {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  gap: 10px;
  justify-content: space-between; /* Agar semua elemen tersebar dengan baik */
  margin-top: 10px;
}

/* Input styles */
.sektoral-input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  box-sizing: border-box;
}

/* Specific width for smaller inputs (dari tahun & sampai tahun) */
.sektoral-input.dari-tahun,
.sektoral-input.sampai-tahun {
  width: 80px; /* Lebar lebih kecil untuk tahun */
  min-width: 80px; /* Memastikan lebar minimal */
  flex: none; /* Mencegah input meluas */
}

/* Specific width for larger inputs (pilih OPD & urusan) */
.sektoral-input.pilih-opd,
.sektoral-input.urusan {
  width: 250px; /* Lebar lebih besar untuk OPD & Urusan */
  flex: 1; /* Biarkan input yang lebih besar mengambil sisa ruang */
}

/* Button styles */
.search-button {
  background-color: #007bff;
  color: white;
  padding: 8px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  height: 44px;
  flex: none; /* Pastikan ukuran button tidak terpengaruh */
}

.search-button:hover {
  background-color: #0056b3;
  transform: scale(1.05);
}

/* Result table styles */
.sektoral-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

.sektoral-table th,
.sektoral-table td {
  border: 1px solid #ddd;
  padding: 10px;
  text-align: left;
}

.sektoral-table th:nth-child(1),
.sektoral-table td:nth-child(1) {
  width: 50px;
}

.sektoral-table th:nth-child(2),
.sektoral-table td:nth-child(2) {
  width: 250px;
}

.sektoral-table th:nth-child(3),
.sektoral-table td:nth-child(3) {
  width: 80px;
}

.sektoral-table th:nth-child(4),
.sektoral-table td:nth-child(4) {
  width: 150px;
}

.sektoral-table th {
  background-color: #007bff;
  color: white;
  font-weight: bold;
}

/* Pagination styles */
.pagination {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
}

.pagination-button {
  padding: 10px 15px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
}

.pagination-button:hover {
  background-color: #0056b3;
  transform: scale(1.05);
}

.pagination-button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.page-info {
  flex-grow: 1;
  text-align: center;
}
