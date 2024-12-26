import React, { useState } from 'react';
import './Auth.css';

const Signup = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
    });

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        const { fullName, email, password } = formData;

        // Prepare data for the backend
        const data = {
            username: fullName,
            email: email,
            password: password,
            password2: password, // Assuming passwords match for now
        };

        try {
            const response = await fetch('http://localhost:8000/api/register/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                const result = await response.json();
                setSuccess('Signup successful! You can now log in.');
                setFormData({ fullName: '', email: '', password: '' });
            } else {
                const errorData = await response.json();
                setError(errorData?.error || 'Signup failed. Please try again.');
            }
        } catch (err) {
            setError('An error occurred. Please try again later.');
        }
    };

    return (
        <div className="auth-container">
            <h2>Sign Up</h2>
            {error && <p className="auth-error">{error}</p>}
            {success && <p className="auth-success">{success}</p>}
            <form className="auth-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Full Name:</label>
                    <input
                        type="text"
                        name="fullName"
                        placeholder="Enter your full name"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Create a password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="auth-btn">
                    Sign Up
                </button>
            </form>
            <div className="auth-switch">
                Already have an account? <a href="/login">Login</a>
            </div>
        </div>
    );
};

export default Signup;
