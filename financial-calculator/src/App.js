import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import SIPCalculator from './components/SIPCalculator';
import CompoundInterestCalculator from './components/CompoundInterestCalculator';
import GSTCalculator from './components/GSTCalculator';
import FixedDepositCalculator from './components/FixedDepositCalculator';
import RecurringDepositCalculator from './components/RecurringDepositCalculator';
import PostOfficeMISCalculator from './components/PostOfficeMISCalculator';
import SimpleInterestCalculator from './components/SimpleInterestCalculator';
import SukanyaSamriddhiCalculator from './components/SukanyaSamriddhiCalculator';

const App = () => {
    return (
        <Router>
            <div>
                <h1>Financial Calculators</h1>
                <nav>
                    <ul>
                        <li><Link to="/sip">SIP Calculator</Link></li>
                        <li><Link to="/compound-interest">Compound Interest Calculator</Link></li>
                        <li><Link to="/gst">GST Calculator</Link></li>
                        <li><Link to="/fd">Fixed Deposit Calculator</Link></li>
                        <li><Link to="/rd">Recurring Deposit Calculator</Link></li>
                        <li><Link to="/mis">Post Office MIS Calculator</Link></li>
                        <li><Link to="/si">Simple Interest Calculator</Link></li>
                        <li><Link to="/ssy">Sukanya Samriddhi Yojana Calculator</Link></li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/sip" element={<SIPCalculator />} />
                    <Route path="/compound-interest" element={<CompoundInterestCalculator />} />
                    <Route path="/gst" element={<GSTCalculator />} />
                    <Route path="/fd" element={<FixedDepositCalculator />}></Route>
                    <Route path="/rd" element={<RecurringDepositCalculator />}></Route>
                    <Route path="/mis" element={<PostOfficeMISCalculator />}></Route>
                    <Route path="/si" element={<SimpleInterestCalculator />}></Route>
                    <Route path="/ssy" element={<SukanyaSamriddhiCalculator />}></Route>
                </Routes>
            </div>
        </Router>
    );
};

export default App;
