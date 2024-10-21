import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/Sektoral.css";

const Sektoral = () => {
  const [opds, setDataOPD] = useState([]);
  const [urusans, setDataUrusan] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [DariTahun, setDariTahun] = useState("");
  const [SampaiTahun, setSampaiTahun] = useState("");
  const [selectedOPD, setSelectedOPD] = useState("");
  const [selectedUrusan, setSelectedUrusan] = useState("");
  const [dataHasil, setDataHasil] = useState([]);

  // State untuk pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(20); // jumlah item per halaman
  const [totalData, setTotalData] = useState(0);

  // Ambil data OPD saat komponen di-mount
  useEffect(() => {
    const fetchDataOPD = async () => {
      try {
        const response = await axios.get("http://116.206.212.234:4000/list-opd");
        setDataOPD(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchDataOPD();
  }, []);

  // Mengambil data urusan berdasarkan OPD yang dipilih
  const handleOPDChange = async (e) => {
    const opdId = e.target.value;
    setSelectedOPD(opdId);
    setSelectedUrusan("");
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
      setDataUrusan([]);
      setLoading(false);
    }
  };

  // Fungsi untuk menangani pencarian data
  const handleSearch = async (e = null) => {
    if (e) {
      e.preventDefault(); // hanya memanggil preventDefault jika ada event
    }

    setLoading(true);

    try {
      const response = await axios.get("http://116.206.212.234:4000/data-sektoral", {
        params: {
          id_user_opd: selectedOPD,
          kode_urusan: selectedUrusan,
          dari_tahun: DariTahun,
          sampai_tahun: SampaiTahun,
          page: currentPage,
          per_page: itemsPerPage,
        },
      });

      // Simpan data hasil pencarian
      setDataHasil(response.data);

      // Cek apakah API mengembalikan header x-pagination-total-count
      const totalItems = response.headers['x-pagination-total-count'];
      if (totalItems) {
        setTotalData(parseInt(totalItems, 10));
      } else {
        setTotalData(0);
      }

      setError(null);
    } catch (error) {
      setError("Terjadi kesalahan saat mengambil data.");
    } finally {
      setLoading(false);
    }
  };

  // Hitung total halaman
  const totalPages = Math.ceil(totalData / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    handleSearch(); // memanggil handleSearch tanpa event
  };

  return (
    <>
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

          <h6 className="page-info">Page {currentPage} of {totalPages}</h6>

          {error && <p className="error-message">{error}</p>}

          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className="sektoral-results">
              <h3>Hasil Pencarian</h3>
              <table className="sektoral-table">
                <thead>
                  <tr>
                    <th className="column-number">No</th>
                    <th className="column-uraian">Uraian</th>
                    <th>Satuan</th>
                    <th>Jenis</th>
                    <th className="column-kategori">Kategori</th>
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

                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i}
                    className={`pagination-button ${currentPage === i + 1 ? "active" : ""}`}
                    onClick={() => handlePageChange(i + 1)}
                  >
                    {i + 1}
                  </button>
                ))}

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
    </>
  );
};

export default Sektoral;
