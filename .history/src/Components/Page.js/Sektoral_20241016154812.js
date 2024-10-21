import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/Sektoral.css";

const Sektoral = () => {
  const [opds, setOpds] = useState([]);
  const [urusans, setUrusans] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [dariTahun, setDariTahun] = useState("");
  const [sampaiTahun, setSampaiTahun] = useState("");
  const [selectedOPD, setSelectedOPD] = useState("");
  const [selectedUrusan, setSelectedUrusan] = useState("");
  const [dataHasil, setDataHasil] = useState([]); // Simpan data hasil pencarian
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  // Fetch OPD saat pertama kali komponen di-mount
  useEffect(() => {
    const fetchDataOPD = async () => {
      setLoading(true);
      try {
        const response = await axios.get("http://116.206.212.234:4000/list-opd");
        setOpds(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchDataOPD();
  }, []);

  // Fetch Urusan berdasarkan OPD yang dipilih
  const handleOPDChange = async (e) => {
    const opdId = e.target.value;
    setSelectedOPD(opdId);
    setSelectedUrusan("");
    setLoading(true);
    try {
      const response = await axios.get(
        `http://116.206.212.234:4000/data-sektoral/list-urusan-by-id-opd?id_user_opd=${opdId}`
      );
      setUrusans(response.data);
      setError(null);
    } catch (error) {
      setError("Gagal mengambil data urusan.");
    } finally {
      setLoading(false);
    }
  };

  // Fungsi untuk melakukan pencarian data
  const handleSearch = async (page = 1) => {
    setLoading(true);
    try {
      const response = await axios.get("http://116.206.212.234:4000/data-sektoral", {
        params: {
          id_user_opd: selectedOPD,
          kode_urusan: selectedUrusan,
          dari_tahun: dariTahun,
          sampai_tahun: sampaiTahun,
          page: page,
          per_page: itemsPerPage,
        },
      });

      setDataHasil(response.data); // Simpan data hasil pencarian
      setError(null);
    } catch (error) {
      setError("Terjadi kesalahan saat mengambil data.");
    } finally {
      setLoading(false);
    }
  };

  // Handle perubahan halaman
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    handleSearch(pageNumber);
  };

  const totalPages = Math.ceil(dataHasil.length / itemsPerPage); // Hitung total halaman

  return (
    <div className="sektoral-container">
      <div className="sektoral-box">
        <h2 className="sektoral-title">Cari Data Sektoral</h2>
        <form
          className="sektoral-form"
          onSubmit={(e) => {
            e.preventDefault();
            setCurrentPage(1);
            handleSearch();
          }}
        >
          <div className="sektoral-input-row">
            <select
              className="sektoral-input"
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
              className="sektoral-input"
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
              className="sektoral-input"
              type="number"
              placeholder="Dari Tahun"
              value={dariTahun}
              onChange={(e) => setDariTahun(e.target.value)}
              required
            />
            <input
              className="sektoral-input"
              type="number"
              placeholder="Sampai Tahun"
              value={sampaiTahun}
              onChange={(e) => setSampaiTahun(e.target.value)}
              required
            />
            <button className="search-button" type="submit">
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
                  <th>No</th>
                  <th>Uraian</th>
                  <th>Satuan</th>
                  <th>Jenis</th>
                  <th>Kategori</th>
                </tr>
              </thead>
              <tbody>
                {dataHasil.length > 0 ? (
                  dataHasil.map((item, index) => (
                    <tr key={index}>
                      <td>{(currentPage - 1) * itemsPerPage + index + 1}</td>
                      <td>{item.uraian_dssd}</td>
                      <td>{item.satuan}</td>
                      <td>{item.jenis_string}</td>
                      <td>{item.kategori_string}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5">Tidak ada data yang ditemukan</td>
                  </tr>
                )}
              </tbody>
            </table>
            {/* Pagination */}
            <div className="pagination">
              <button
                className="pagination-button"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Previous
              </button>
              <span>
                Page {currentPage} of {totalPages}
              </span>
              <button
                className="pagination-button"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sektoral;
