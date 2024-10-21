import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/Dataset.css"; // Anda bisa menambahkan styling sesuai kebutuhan

const DatasetComponent = () => {
  const [dataset, setDataset] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Jumlah item per halaman

  useEffect(() => {
    const fetchData = async (page = 1) => {
      setLoading(true);
      try {
        const response = await axios.get("http://116.206.212.234:4000/dataset", {
          params: {
            page: page,
            per_page: itemsPerPage, // Anda bisa mengganti jumlah per halaman sesuai kebutuhan
          },
        });
        setDataset(response.data);
        setError(null);
      } catch (err) {
        setError("Gagal mengambil data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData(currentPage); // Ambil data saat pertama kali komponen dimuat
  }, [currentPage]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="dataset-container">
      <h2 className="dataset-title">Dataset Sektoral</h2>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="error-message">{error}</p>
      ) : (
        <table className="dataset-table">
          <thead>
            <tr>
              <th>No</th>
              <th>Uraian</th>
              <th>Description</th>
              <th>Modified</th>
              <th>Nama OPD</th>
            </tr>
          </thead>
          <tbody>
            {dataset.length > 0 ? (
              dataset.map((item, index) => (
                <tr key={item.id}>
                  <td>{(currentPage - 1) * itemsPerPage + index + 1}</td>
                  <td>{item.uraian_dssd}</td>
                  <td>{item.description}</td>
                  <td>{new Date(item.modified).toLocaleDateString()}</td>
                  <td>{item.nama_opd}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">Tidak ada data yang ditemukan</td>
              </tr>
            )}
          </tbody>
        </table>
      )}

      {/* Pagination */}
      <div className="pagination">
        <button
          className="pagination-button"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="page-info">
          Page {currentPage} of {Math.ceil(dataset.length / itemsPerPage)}
        </span>
        <button
          className="pagination-button"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={dataset.length < itemsPerPage}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default DatasetComponent;
