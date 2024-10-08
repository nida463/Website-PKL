import React, { useState, useEffect } from 'react';
import axios from "axios";
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

    const fetchDataUrusan = async () => {
      try {
        const response = await axios.get("http://116.206.212.234:4000/list-opd/urusan");
        setDataUrusan(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchDataOPD();
    fetchDataUrusan();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get("", {
        params: {
          dariTahun: DariTahun,
          sampaiTahun: SampaiTahun,
          opd: selectedOPD,
          urusan: selectedUrusan
        }
      });
      setResults(response.data); // Set data hasil pencarian
    } catch (error) {
      setError(error);
    }
  };

  return (
    <div className="sektoral-container">
      <div className="sektoral-form">
        <h2 className="sektoral-title">Cari Data</h2>
        <form className="sektoral-input-form" onSubmit={handleSearch}>
          <input
            className="sektoral-input"
            type="number"
            placeholder="Dari Tahun"
            value={DariTahun}
            onChange={(e) => setDariTahun(e.target.value)}
            required
          />
          <input
            className="sektoral-input"
            type="number"
            placeholder="Sampai Tahun"
            value={SampaiTahun}
            onChange={(e) => setSampaiTahun(e.target.value)}
            required
          />

          <select 
            className="sektoral-input" 
            value={selectedOPD}
            onChange={(e) => setSelectedOPD(e.target.value)}
          >
            <option value="">Pilih OPD</option>
            {opds.map((OPD) => (
              <option key={OPD.id_OPD} value={OPD.id_OPD}>
                {OPD.nama_opd}
              </option>
            ))}
          </select>

          <select 
            className="sektoral-input" 
            value={selectedUrusan}
            onChange={(e) => setSelectedUrusan(e.target.value)}
          >
            <option value="">Pilih Urusan</option>
            {urusans.map((Urusan) => (
              <option key={Urusan.kode_urusan} value={Urusan.kode_urusan}>
                {Urusan.nama_urusan}
              </option>
            ))}
          </select>

          <button className="sektoral-button" type="submit">Cari</button>
        </form>
      </div>

      {/* Tabel hasil pencarian */}
      {results.length > 0 && (
        <div className="sektoral-results">
          <h3>Hasil Pencarian</h3>
          <table className="sektoral-table">
            <thead>
              <tr>
                <th>No</th>
                <th>Tahun</th>
                <th>OPD</th>
                <th>Urusan</th>
              </tr>
            </thead>
            <tbody>
              {results.map((result, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{result.tahun}</td>
                  <td>{result.opd}</td>
                  <td>{result.urusan}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Sektoral;
