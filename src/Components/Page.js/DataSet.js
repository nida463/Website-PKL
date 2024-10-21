import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/Dataset.css"; // Pastikan Anda memiliki file CSS ini

const DataSet = () => {
  const [opds, setOpds] = useState([]); // Semua OPD
  const [filteredOpds, setFilteredOpds] = useState([]); // OPD yang difilter berdasarkan pencarian
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState(""); // Input pencarian
  const [selectedOPD, setSelectedOPD] = useState(null); // OPD yang dipilih
  const [dataHasil, setDataHasil] = useState([]); // Dataset yang ditampilkan
  const [allDataSet, setAllDataSet] = useState([]); // Menyimpan semua dataset

  // Fetch semua dataset saat komponen di-mount
  useEffect(() => {
    const fetchAllDataSet = async () => {
      setLoading(true);
      try {
        // Ambil semua dataset pada saat halaman pertama kali dimuat
        const response = await axios.get("http://116.206.212.234:4000/dataset");
        setAllDataSet(response.data); // Set hasil dataset dari semua OPD
        setDataHasil(response.data); // Set juga untuk data yang akan ditampilkan di awal
      } catch (error) {
        setError("Terjadi kesalahan saat mengambil data.");
      } finally {
        setLoading(false);
      }
    };
    fetchAllDataSet();
  }, []);

  // Fetch data OPD saat komponen di-mount
  useEffect(() => {
    const fetchDataOPD = async () => {
      setLoading(true);
      try {
        const response = await axios.get("http://116.206.212.234:4000/list-opd");
        setOpds(response.data);
        setFilteredOpds(response.data); // Awalnya tampilkan semua OPD
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchDataOPD();
  }, []);

  // Fetch dataset berdasarkan OPD yang dipilih
  useEffect(() => {
    const fetchDatasetByOPD = async () => {
      if (selectedOPD) {
        console.log("Fetching dataset for OPD:", selectedOPD); // Debugging log
        setLoading(true);
        setDataHasil([]); // Hapus data sebelumnya
        try {
          const response = await axios.get("http://116.206.212.234:4000/dataset", {
            params: {
              id_opd: selectedOPD.id_opd, // Pastikan ID OPD benar
            },
          });
          console.log("Response data:", response.data); // Debugging log untuk response
          setDataHasil(response.data); // Set data dataset yang baru
          setError(null);
        } catch (error) {
          console.error("Error fetching dataset:", error); // Debugging log error
          setError("Terjadi kesalahan saat mengambil data.");
        } finally {
          setLoading(false);
        }
      } else {
        // Jika tidak ada OPD yang dipilih, tampilkan semua dataset
        setDataHasil(allDataSet);
      }
    };

    fetchDatasetByOPD();
  }, [selectedOPD, allDataSet]); // Perubahan state selectedOPD memicu fetch dataset

  // Handle search input
  const handleSearchChange = (e) => {
    const searchValue = e.target.value.toLowerCase();
    setSearchTerm(searchValue);

    // Filter OPD berdasarkan search term
    const filtered = opds.filter((opd) =>
      opd.nama_opd.toLowerCase().includes(searchValue)
    );
    setFilteredOpds(filtered); // Update filtered OPD
  };

  // Handle OPD selection
  const handleSelectOPD = (opd) => {
    setSelectedOPD(opd); // Set OPD yang dipilih

    // Filter dataset berdasarkan OPD yang dipilih
    const filteredDataset = allDataSet.filter(
      (dataset) => dataset.id_opd === opd.id_opd
    );
    setDataHasil(filteredDataset); // Update hasil data set yang sesuai dengan OPD
  };

  return (
    <div className="dataset-container">
      <h2 className="dataset-title">Dataset</h2>

      {/* Kontainer dengan dua kolom */}
      <div className="dataset-content">
        {/* Kolom kiri untuk OPD */}
        <div className="left-column">
          {/* Input pencarian */}
          <div className="form-row">
            <input
              type="text"
              className="dataset-input form-control"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Cari Produsen"
            />
          </div>

          {/* List OPD */}
          {filteredOpds.length > 0 && (
            <div className="opd-list">
              {filteredOpds.map((opd) => (
                <div
                  key={opd.id_opd}
                  className={`opd-item card ${
                    selectedOPD && selectedOPD.id_opd === opd.id_opd ? "selected" : ""
                  }`}
                  onClick={() => handleSelectOPD(opd)} // Mengatur OPD yang dipilih saat di klik
                >
                  <div className="card-body">
                    <h5 className="card-title">{opd.nama_opd}</h5>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Error handling */}
          {error && <p className="error-message">{error}</p>}
        </div>

        {/* Kolom kanan untuk hasil dataset */}
        <div className="right-column">
          {/* Loading state */}
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className="result-list">
              <h3>Hasil Dataset</h3>
              {dataHasil.length > 0 ? (
                dataHasil.map((item, index) => (
                  <div key={index} className="data-item card">
                    <div className="card-body">
                      <h5 className="card-title">{item.nama_dataset}</h5>
                      <p className="card-text">
                        <strong>Deskripsi:</strong> {item.description}
                      </p>
                      <p className="card-text">
                        <strong>Uraian DSSD:</strong> {item.uraian_dssd}
                      </p>
                      <p className="card-text">
                        <strong>Tanggal Dimodifikasi:</strong> {item.modified}
                      </p>
                      <p className="card-text">
                        <strong>Tahun:</strong> {item.tahun}
                      </p>
                      <p className="card-text">
                        <strong>Nama OPD:</strong> {item.nama_opd}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <p>Tidak ada data yang ditemukan</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DataSet;