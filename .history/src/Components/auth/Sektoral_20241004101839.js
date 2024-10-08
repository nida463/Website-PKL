import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../styles/Login.css"; // Import CSS biasa


const Sektoral = () => {
  const [opds, setDataOPD] = useState([]);
  const [urusans, setDataUrusan] = useState([]);
  const [loading, setLoading] = useState(true);  // State untuk loading status
  const [error, setError] = useState(null);
  const [DariTahun, setDariTahun] = useState(null);
  const [SampaiTahun, setSampaiTahun] = useState(null);

  useEffect(() => {
    // get API OPD
    // Fungsi async untuk fetch data menggunakan axios
    const fetchDataOPD = async () => {
      try {
        const response = await axios.get("http://116.206.212.234:4000/list-opd"); // Mengambil data dari API
        setDataOPD(response.data); // Set data dari response
      } catch (error) {
        setError(error); // Set error jika terjadi kesalahan
      } finally {
        setLoading(false); // Hentikan loading
      }
    };

    fetchDataOPD();
    // get API Urusan
    // Fungsi async untuk fetch data menggunakan axios
    const fetchDataUrusan = async () => {
      try {
        const response = await axios.get("http://116.206.212.234:4000/list-opd/urusan"); // Mengambil data dari API
        setDataUrusan(response.data); // Set data dari response
      } catch (error) {
        setError(error); // Set error jika terjadi kesalahan
      } finally {
        setLoading(false); // Hentikan loading
      }
    };

    fetchDataUrusan();
  }, []);

  const handleSearch = async () => {
    try {
      const response = await axios.get("https://api.example.com/data"); // Mengambil data dari API
      setDataUrusan(response.data); // Set data dari response
    } catch (error) {
      setError(error); // Set error jika terjadi kesalahan
    } finally {
      setLoading(false); // Hentikan loading
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Cari</h2>
        <form className="login-form" onSubmit={handleSearch}>
          <input
            className="login-input"
            type="number"
            placeholder="Dari Tahun"
            value={DariTahun}
            onChange={(e) => setDariTahun(e.target.value)}
            required
          />
          <input
            className="login-input"
            type="number"
            placeholder="Sampai Tahun"
            value={SampaiTahun}
            onChange={(e) => setSampaiTahun(e.target.value)}
            required
          />

          {/* Elemen select untuk menampilkan data dari API */}
          <select className="login-input">
            <option value="">Pilih Opsi</option>
            {opds.map((OPD) => (
              <option key={OPD.id_OPD} value={OPD.id_OPD}>
                {OPD.nama_opd}
              </option>
            ))}
          </select>
          <select className="login-input">
            <option value="">Pilih Opsi</option>
            {urusans.map((Urusan) => (
              <option key={Urusan.kode_urusan} value={Urusan.kode_urusan}>
                {Urusan.nama_urusan}
              </option>
            ))}
          </select>

          <button className="login-button" type="submit">
            Cari
          </button>
        </form>
      </div>
    </div>
  );
};

export default Sektoral;
