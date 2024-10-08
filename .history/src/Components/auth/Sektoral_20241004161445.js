import React, { useState, useEffect } from 'react';
import axios from "axios";
import "../../styles/Sektoral.css"; // Pastikan path sesuai

const Sektoral = () => {
  const [opds, setDataOPD] = useState([]);
  const [urusans, setDataUrusan] = useState([]);
  const [results, setResults] = useState([]);  // State untuk hasil pencarian
  const [loading, setLoading] = useState(true);  // State untuk loading status
  const [error, setError] = useState(null);
  const [DariTahun, setDariTahun] = useState('');
  const [SampaiTahun, setSampaiTahun] = useState('');
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
      const response = await axios.get("http://116.206.212.234:4000/data-sektoral", {
        params: {
          id_user_opd: selectedOPD, // Parameter OPD yang dipilih
          kode_urusan: selectedUrusan, // Parameter urusan yang dipilih
          dari_tahun: DariTahun, // Parameter dari tahun
          sampai_tahun: SampaiTahun, // Parameter sampai tahun
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
    <div className="sektoral-container">
      <div className="search-box">
        <h2 className="search-title">Cari Data Sektoral</h2>
        <form className="search-form" onSubmit={handleSearch}>
          <div className="search-inputs">
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
            <select 
              className="search-input" 
              value={selectedOPD} 
              onChange={(e) => setSelectedOPD(e.target.value)}
              required
            >
              <option value="">Pilih OPD</option>
              {opds.map((OPD) => (
                <option key={opd.id_opd} value={OPD.id_OPD}>
                  {OPD.nama_opd}
                </option>
              ))}
            </select>
            <select 
              className="search-input" 
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
            <button className="search-button" type="submit">
              Cari
            </button>
          </div>
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
