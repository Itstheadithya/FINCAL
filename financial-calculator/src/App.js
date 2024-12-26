import React from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import CompoundInterestCalculator from './components/CompoundInterestCalculator';
import FixedDepositCalculator from './components/FixedDepositCalculator';
import GSTCalculator from './components/GSTCalculator';
import Home from './components/Home';
import PostOfficeMISCalculator from './components/PostOfficeMISCalculator';
import RecurringDepositCalculator from './components/RecurringDepositCalculator';
import SimpleInterestCalculator from './components/SimpleInterestCalculator';
import SIPCalculator from './components/SIPCalculator';
import SukanyaSamriddhiCalculator from './components/SukanyaSamriddhiCalculator';
import Login from './components/Login'; // Import Login
import Signup from './components/Signup'; // Import Signup

import './App.css';

const App = () => {
    return (
        <Router>
            <header className="header">
                <img src="/logo.jpg" alt="Financial Calculators Logo" className="logo" />

                <div className="header-content">
                    <h1 className="app-title">Financial Calculators</h1>
                    <p className="app-description">
                        Simplify your financial decisions with our easy-to-use calculators.
                    </p>
                    <nav className="navbar">
                        <ul className="nav-links">
                            <li><Link to="/" className="nav-link">Home</Link></li>
                            <li><Link to="/sip" className="nav-link">SIP</Link></li>
                            <li><Link to="/compound-interest" className="nav-link">CompoundInterest</Link></li>
                            <li><Link to="/gst" className="nav-link">GST</Link></li>
                            <li><Link to="/fd" className="nav-link">FixedDeposit</Link></li>
                            <li><Link to="/rd" className="nav-link">RecurringDeposit</Link></li>
                            <li><Link to="/mis" className="nav-link">PostOfficeMIS</Link></li>
                            <li><Link to="/si" className="nav-link">SimpleInterest</Link></li>
                            <li><Link to="/ssy" className="nav-link">SSY</Link></li>
                        </ul>
                        <div className="auth-links">
                            <Link to="/login" className="auth-link">Login</Link>
                            <Link to="/signup" className="auth-link">Signup</Link>
                        </div>
                    </nav>
                </div>
            </header>
            <main className="main-content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/sip" element={<SIPCalculator />} />
                    <Route path="/compound-interest" element={<CompoundInterestCalculator />} />
                    <Route path="/gst" element={<GSTCalculator />} />
                    <Route path="/fd" element={<FixedDepositCalculator />} />
                    <Route path="/rd" element={<RecurringDepositCalculator />} />
                    <Route path="/mis" element={<PostOfficeMISCalculator />} />
                    <Route path="/si" element={<SimpleInterestCalculator />} />
                    <Route path="/ssy" element={<SukanyaSamriddhiCalculator />} />
                </Routes>
            </main>
        </Router>
    );
};

export default App;
