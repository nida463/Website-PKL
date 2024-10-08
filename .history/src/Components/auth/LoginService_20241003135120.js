// src/services/loginService.js
import axios from 'axios';

// Fungsi login untuk memanggil API
export const login = async (nip, password) => {
    try {
        const response = await axios.post('http://116.206.212.234:4000/auth/login', {
            nip: nip,
            password: password
        });

        // Jika API mengembalikan token, simpan di localStorage
        if (response.data.token) {
            localStorage.setItem('token', response.data.token);
            return response.data;
        } else {
            throw new Error('NIP atau password salah');
        }
    } catch (error) {
        throw new Error('Terjadi kesalahan saat login');
    }
};