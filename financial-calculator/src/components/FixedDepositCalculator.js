import React, { useState } from "react";
import axios from "axios";

const FixedDepositCalculator = () => {
    const [principal, setPrincipal] = useState("");
    const [interestRate, setInterestRate] = useState("");
    const [timePeriod, setTimePeriod] = useState("");
    const [compoundingFrequency, setCompoundingFrequency] = useState("monthly");
    const [results, setResults] = useState(null);

    const calculateFD = async (e) => {
        e.preventDefault();

        const formData = {
            principal: principal,
            interestRate: interestRate,
            timePeriod: timePeriod,
            compoundingFrequency: compoundingFrequency,
        };

        try {
            const response = await axios.get("http://127.0.0.1:8000/api/fd_calculator/", {
                params: formData,
            });
            setResults(response.data.result);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    return (
        <div>
            <h2>Fixed Deposit Calculator</h2>
            <form onSubmit={calculateFD}>
                <div>
                    <label>Principal Amount (₹):</label>
                    <input
                        type="number"
                        value={principal}
                        onChange={(e) => setPrincipal(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Interest Rate (%):</label>
                    <input
                        type="number"
                        value={interestRate}
                        onChange={(e) => setInterestRate(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Time Period (months):</label>
                    <input
                        type="number"
                        value={timePeriod}
                        onChange={(e) => setTimePeriod(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Compounding Frequency:</label>
                    <select
                        value={compoundingFrequency}
                        onChange={(e) => setCompoundingFrequency(e.target.value)}
                    >
                        <option value="monthly">Monthly</option>
                        <option value="quarterly">Quarterly</option>
                        <option value="half-yearly">Half-Yearly</option>
                        <option value="yearly">Yearly</option>
                    </select>
                </div>
                <button type="submit">Calculate</button>
            </form>

            {results && (
                <div>
                    <h3>Results:</h3>
                    <p>Maturity Amount: ₹{results.maturityAmount}</p>
                    <p>Interest Earned: ₹{results.interestEarned}</p>
                    <h4>Breakdown:</h4>
                    <table>
                        <thead>
                            <tr>
                                <th>Month</th>
                                <th>Starting Balance (₹)</th>
                                <th>Interest Earned (₹)</th>
                                <th>Ending Balance (₹)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {results.breakdown.map((entry, index) => (
                                <tr key={index}>
                                    <td>{entry.month}</td>
                                    <td>{entry.startingBalance}</td>
                                    <td>{entry.interestEarned}</td>
                                    <td>{entry.endingBalance}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default FixedDepositCalculator;
