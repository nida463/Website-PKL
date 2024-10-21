import React, { useState, useEffect } from 'react';
import axios from "axios";
import "../../styles/Sektoral.css"; // Pastikan path sesuai

const Sektoral = () => {
  const [opds, setDataOPD] = useState([]);
  const [urusans, setDataUrusan] = useState([]);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [DariTahun, setDariTahun] = useState('');
  const [SampaiTahun, setSampaiTahun] = useState('');
  const [selectedOPD, setSelectedOPD] = useState('');
  const [selectedUrusan, setSelectedUrusan] = useState('');
  
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage, setDataPerPage] = useState(20);
  
  // Fetch data OPD saat komponen dimuat
  useEffect(() => {
    const fetchDataOPD = async () => {
      setLoading(true);
      try {
        const response = await axios.get("http://116.206.212.234:4000/list-opd");
        setDataOPD(response.data);
      } catch (error) {
        setError("Gagal mengambil data OPD");
      } finally {
        setLoading(false);
      }
    };

    fetchDataOPD();
  }, []);

  // Menghandle perubahan OPD
  const handleOPDChange = async (e) => {
    const opdId = e.target.value;
    setSelectedOPD(opdId);
    setSelectedUrusan(""); // Reset urusan setiap kali OPD berubah
    setLoading(true);

    if (opdId) {
      try {
        const response = await axios.get(
          `http://116.206.212.234:4000/data-sektoral/list-urusan-by-id-opd?id_user_opd=${opdId}`
        );
        setDataUrusan(response.data);
        setError(null);
      } catch (error) {
        setError("Gagal mengambil data urusan.");
      } finally {
        setLoading(false);
      }
    } else {
      setDataUrusan([]); // Kosongkan urusan jika tidak ada OPD yang dipilih
      setLoading(false);
    }
  };

  // Menghandle pencarian data
  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.get("http://116.206.212.234:4000/data-sektoral", {
        params: {
          id_user_opd: selectedOPD,
          kode_urusan: selectedUrusan,
          dari_tahun: DariTahun,
          sampai_tahun: SampaiTahun,
        },
      });
      setResults(response.data);
      setError(null);
      setCurrentPage(1); // Reset ke halaman pertama setiap kali pencarian baru
    } catch (error) {
      setError("Terjadi kesalahan saat mengambil data.");
    } finally {
      setLoading(false);
    }
  };

  // Pagination logic
  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentData = results.slice(indexOfFirstData, indexOfLastData);
  const totalPages = Math.ceil(results.length / dataPerPage);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="sektoral-container">
      <div className="sektoral-box">
        <h2 className="sektoral-title">Cari Data Sektoral</h2>
        <form className="search-form" onSubmit={handleSearch}>
          <div className="search-inputs">
            <select
              className="search-input"
              value={selectedOPD}
              onChange={handleOPDChange}
            >
              <option value="">Pilih OPD</option>
              {opds.map((OPD) => (
                <option key={OPD.id_opd} value={OPD.id_opd}>
                  {OPD.nama_opd}
                </option>
              ))}
            </select>

            <select
              className="search-input"
              value={selectedUrusan}
              onChange={(e) => setSelectedUrusan(e.target.value)}
              disabled={!selectedOPD}
            >
              <option value="">Pilih Urusan</option>
              {urusans.map((Urusan) => (
                <option key={Urusan.kode_urusan} value={Urusan.kode_urusan}>
                  {Urusan.nama_urusan}
                </option>
              ))}
            </select>

            <input
              className="search-input"
              type="number"
              placeholder="Dari Tahun"
              value={DariTahun}
              onChange={(e) => setDariTahun(e.target.value)}
              required
            />
            <input
              className="search-input"
              type="number"
              placeholder="Sampai Tahun"
              value={SampaiTahun}
              onChange={(e) => setSampaiTahun(e.target.value)}
              required
            />
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
                {currentData.length > 0 ? (
                  currentData.map((item, index) => (
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

            {/* Pagination Controls */}
            {results.length > 0 && (
              <div className="pagination">
                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i + 1}
                    className={`pagination-button ${
                      currentPage === i + 1 ? 'active' : ''
                    }`}
                    onClick={() => paginate(i + 1)}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Sektoral;
n