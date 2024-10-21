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

  // State untuk pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(20); // Jumlah data per halaman
  const [totalData, setTotalData] = useState(0); // Untuk menyimpan jumlah total data

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
          page: currentPage, // Mengirim halaman saat ini ke API
          per_page: itemsPerPage, // Mengirim jumlah item per halaman
        },
      });
      setResults(response.data);

      // Jika ada header total data dari API
      const totalItems = response.headers['x-pagination-total-count'];
      if (totalItems) {
        setTotalData(parseInt(totalItems, 10)); // Set total data dari header
      }

      setError(null);
      setCurrentPage(1); // Reset halaman saat melakukan pencarian baru
    } catch (error) {
      setError("Terjadi kesalahan saat mengambil data.");
    } finally {
      setLoading(false);
    }
  };

  // Pagination logic
  const totalPages = Math.ceil(totalData / itemsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Ambil data berdasarkan halaman saat ini
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = results.slice(indexOfFirstItem, indexOfLastItem);

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
              Cari
            </button>
          </div>
        </form>

        {/* Tampilkan pagination info */}
        <div>
          <p>Halaman {currentPage} dari {totalPages}</p>
          <p>Total Data: {totalData}</p>
        </div>

        {error && <p>{error}</p>}
        {loading ? <p>Loading...</p> : (
          <div className="result-table">
            <table>
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
                {currentItems.map((item, index) => (
                  <tr key={index}>
                    <td>{(currentPage - 1) * itemsPerPage + index + 1}</td>
                    <td>{item.uraian_dssd}</td>
                    <td>{item.satuan}</td>
                    <td>{item.jenis_string}</td>
                    <td>{item.kategori_string}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Pagination controls */}
            <div className="pagination">
              <button onClick={handlePrevious} disabled={currentPage === 1}>
                Previous
              </button>
              <button onClick={handleNext} disabled={currentPage === totalPages}>
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
