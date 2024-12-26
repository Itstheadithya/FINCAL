import React from 'react';
import './Auth.css';

const Signup = () => {
    return (
        <div className="auth-container">
            <h2>Sign Up</h2>
            <form className="auth-form">
                <div className="form-group">
                    <label>Full Name:</label>
                    <input type="text" placeholder="Enter your full name" />
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input type="email" placeholder="Enter your email" />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input type="password" placeholder="Create a password" />
                </div>
                <button className="auth-btn">Sign Up</button>
            </form>
            <div className="auth-switch">
                Already have an account? <a href="/login">Login</a>
            </div>
        </div>
    );
};

export default Signup;
