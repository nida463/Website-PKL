import React, { useState, useEffect } from "react";
import axios from "axios";
import Select from "react-select"; // Import React Select
import "../../styles/Sektoral.css";

const Sektoral = () => {
  const [opds, setOpds] = useState([]);
  const [urusans, setUrusans] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [dariTahun, setDariTahun] = useState("");
  const [sampaiTahun, setSampaiTahun] = useState("");
  const [selectedOPD, setSelectedOPD] = useState(null); // Sesuaikan dengan React Select
  const [selectedUrusan, setSelectedUrusan] = useState(null); // Sesuaikan dengan React Select
  const [dataHasil, setDataHasil] = useState([]);
  const [totalData, setTotalData] = useState(0);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  useEffect(() => {
    const fetchDataOPD = async () => {
      setLoading(true);
      try {
        const response = await axios.get("http://116.206.212.234:4000/list-opd");
        setOpds(response.data.map((opd) => ({ value: opd.id_opd, label: opd.nama_opd }))); // Sesuaikan format untuk React Select
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchDataOPD();
  }, []);

  const handleOPDChange = async (selectedOption) => {
    setSelectedOPD(selectedOption);
    setSelectedUrusan(null); // Reset urusan saat OPD berubah
    setLoading(true);
    if (selectedOption) {
      try {
        const response = await axios.get(
          `http://116.206.212.234:4000/data-sektoral/list-urusan-by-id-opd?id_user_opd=${selectedOption.value}`
        );
        setUrusans(response.data.map((urusan) => ({ value: urusan.kode_urusan, label: urusan.nama_urusan }))); // Sesuaikan format untuk React Select
        setError(null);
      } catch (error) {
        setError("Gagal mengambil data urusan.");
      } finally {
        setLoading(false);
      }
    } else {
      setUrusans([]);
      setLoading(false);
    }
  };

  const handleSearch = async (page = 1) => {
    setLoading(true);
    try {
      const response = await axios.get("http://116.206.212.234:4000/data-sektoral", {
        params: {
          id_user_opd: selectedOPD ? selectedOPD.value : "",
          kode_urusan: selectedUrusan ? selectedUrusan.value : "",
          dari_tahun: dariTahun,
          sampai_tahun: sampaiTahun,
          page: page,
          per_page: itemsPerPage,
        },
      });

      const newData = response.data;
      const totalItems = response.headers["x-pagination-total-count"];
      setTotalData(totalItems ? parseInt(totalItems, 10) : 0);
      setDataHasil(newData);
      setError(null);
    } catch (error) {
      setError("Terjadi kesalahan saat mengambil data.");
    } finally {
      setLoading(false);
    }
  };

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
          {/* React Select untuk OPD */}
          <Select
            className="sektoral-input"
            value={selectedOPD}
            onChange={handleOPDChange}
            options={opds}
            placeholder="Pilih OPD"
            isClearable
          />

          {/* React Select untuk Urusan */}
          <Select
            className="sektoral-input"
            value={selectedUrusan}
            onChange={(selectedOption) => setSelectedUrusan(selectedOption)}
            options={urusans}
            placeholder="Pilih Urusan"
            isClearable
            isDisabled={!selectedOPD} // Disable jika OPD belum dipilih
          />

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
            <i className="fas fa-search" style={{ marginRight: "8px" }}></i>
            Cari
          </button>
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
                {dataHasil && dataHasil.length > 0 ? (
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
            <div className="pagination">
              <button
                className="pagination-button"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Previous
              </button>
              <h6 className="page-info" style={{ textAlign: "center" }}>
                Page {currentPage} of {Math.ceil(totalData / itemsPerPage)}
              </h6>
              <button
                className="pagination-button"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === Math.ceil(totalData / itemsPerPage)}
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
