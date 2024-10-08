import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../styles/Login.css"; // Import CSS biasa
import "../../styles/Sektoral.css"; // Pastikan path sesuai

const Sektoral = () => {
  const [opds, setDataOPD] = useState([]);
  const [urusans, setDataUrusan] = useState([]);
  const [results, setResults] = useState([]);  // State untuk hasil pencarian
  const [loading, setLoading] = useState(true);  // State untuk loading status
  const [error, setError] = useState(null);
  const [DariTahun, setDariTahun] = useState(null);
  const [SampaiTahun, setSampaiTahun] = useState(null);
  const [selectedOPD, setSelectedOPD] = useState('');
  const [selectedUrusan, setSelectedUrusan] = useState('');

  useEffect(() => {
    // get API OPD
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

  const handleSearch = async (e) => {
    e.preventDefault(); // Mencegah reload halaman
    setLoading(true);
    try {
      // Menggunakan parameter pencarian untuk mendapatkan data
      const response = await axios.get("http://116.206.212.234:4000/data-sektoral/beranda", {
        params: {
          dariTahun: DariTahun,
          sampaiTahun: SampaiTahun,
          idOPD: selectedOPD,
          kodeUrusan: selectedUrusan,
        }
      });
      setResults(response.data); // Set data hasil pencarian
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
          <select 
            className="login-input" 
            value={selectedOPD} 
            onChange={(e) => setSelectedOPD(e.target.value)}
            required
          >
            <option value="">Pilih OPD</option>
            {opds.map((OPD) => (
              <option key={OPD.id_OPD} value={OPD.id_OPD}>
                {OPD.nama_opd}
              </option>
            ))}
          </select>
          <select 
            className="login
            -input" 
            value={selectedUrusan} 
            onChange={(e) => setSelectedUrusan(e.target.value)}
            required
          >
            <option value="">Pilih Urusan</option>
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

        {/* Tabel hasil pencarian */}
        {results.length > 0 && (
          <div className="sektoral-results">
            <h3>Hasil Pencarian</h3>
            <table className="sektoral-table">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Nama OPD</th>
                  <th>Uraian DSSD</th>
                  <th>Jumlah</th>
                  <th>Satuan</th>
                  <th>Jenis</th>
                  <th>Kategori</th>
                </tr>
              </thead>
              <tbody>
                {results.map((result, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{result.nama_opd}</td>
                    <td>{result.uraian_dssd}</td>
                    <td>{result.jumlah}</td>
                    <td>{result.satuan}</td>
                    <td>{result.jenis_string}</td>
                    <td>{result.kategori_string}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {loading && <p>Loading...</p>} {/* Tampilkan loading saat mengambil data */}
        {error && <p>Error: {error.message}</p>} {/* Tampilkan pesan error jika ada */}
      </div>
    </div>
  );
};

export default Sektoral;
