// src/components/login/Login.js
import React, { useState } from "react";

const Login = ({ onLogin }) => {
    const [nip, setNip] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Panggil fungsi login dari props
            await onLogin(nip, password);
        } catch (err) {
            setError(err.message || 'Terjadi kesalahan. Silakan coba lagi.');
        }
    };

    return (
        <div>
            <h2>Login dengan NIP</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>NIP:</label>
                    <input
                        type="text"
                        value={nip}
                        onChange={(e) => setNip(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {/* Tampilkan pesan error jika ada */}
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;