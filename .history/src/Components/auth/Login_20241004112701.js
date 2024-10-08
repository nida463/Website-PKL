import React, { useState } from "react";
import "../../styles/login.css"; // Import CSS from the styles folder

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
        <div className="login-container">
            <h2>Login dengan NIP</h2>
            <form onSubmit={handleSubmit} className="login-form">
                <div className="form-group">
                    <label>NIP:</label>
                    <input
                        type="text"
                        value={nip}
                        onChange={(e) => setNip(e.target.value)}
                        required
                        className="login-input"
                    />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="login-input"
                    />
                </div>
                {/* Tampilkan pesan error jika ada */}
                {error && <p className="error-message">{error}</p>}
                <button type="submit" className="login-button">Login</button>
            </form>
        </div>
    );
};

export default Login;
