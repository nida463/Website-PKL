import React, { useState, useEffect } from 'react';
import axios from "axios";
import "../../styles/Sektoral.css"; // Pastikan path sesuai

const Sektoral = () => {
  const [opds, setDataOPD] = useState([]);
  const [urusans, setDataUrusan] = useState([]);  // Menyimpan data urusan
  const [results, setResults] = useState([]);  // State untuk hasil pencarian
  const [loading, setLoading] = useState(true);  // State untuk loading status
  const [error, setError] = useState(null);
  const [DariTahun, setDariTahun] = useState('');
  const [SampaiTahun, setSampaiTahun] = useState('');
  const [selectedOPD, setSelectedOPD] = useState('');
  const [selectedUrusan, setSelectedUrusan] = useState('');

  // Fetch data OPD
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

  // Fetch data Urusan berdasarkan OPD yang dipilih
  useEffect(() => {
    if (selectedOPD) {  // Memanggil data urusan hanya jika OPD dipilih
      const fetchDataUrusanByOPD = async () => {
        setLoading(true);
        try {
          const response = await axios.get(`http://116.206.212.234:4000/data-sektoral/list-urusan-by-id-opd/${selectedOPD}`);
          setDataUrusan(response.data);
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      };

      fetchDataUrusanByOPD();
    } else {
      setDataUrusan([]);  // Kosongkan urusan jika tidak ada OPD yang dipilih
    }
  }, [selectedOPD]);

  // Fungsi untuk handle pencarian
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
        }
      });
      setResults(response.data);
    } catch (error) {
      set
