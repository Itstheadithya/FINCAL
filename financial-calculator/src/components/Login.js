import React from 'react';
import './Auth.css';

const Login = () => {
    return (
        <div className="auth-container">
            <h2>Login</h2>
            <form className="auth-form">
                <div className="form-group">
                    <label>Email:</label>
                    <input type="email" placeholder="Enter your email" />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input type="password" placeholder="Enter your password" />
                </div>
                <button className="auth-btn">Login</button>
            </form>
            <div className="auth-switch">
                Don't have an account? <a href="/signup">Sign up</a>
            </div>
        </div>
    );
};

export default Login;
