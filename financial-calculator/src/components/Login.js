import React, { useState } from 'react';
import axios from 'axios';
import './Auth.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const loginUser = async (username, password) => {
        try {
            const response = await axios.post('http://localhost:8000/api/login/', { username, password });
            const token = response.data.token;
            console.log("Login successful, token:", token);
            localStorage.setItem('token', token); // Save the token
            navigate('/dashboard'); // Redirect to the dashboard after successful login
        } catch (error) {
            console.error("Login failed:", error.response ? error.response.data : error.message);
            setError('Invalid username or password');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!username || !password) {
            setError("Both fields are required");
            return;
        }

        loginUser(username, password);
    };

    return (
        <div className="auth-container">
            <h2>Login</h2>
            <form className="auth-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Enter your username"
                    />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                    />
                </div>
                {error && <p className="error">{error}</p>}
                <button className="auth-btn" type="submit">Login</button>
            </form>
            <div className="auth-switch">
                Don't have an account? <a href="/signup">Sign up</a>
            </div>
        </div>
    );
};

export default Login;
