import React, { useState } from "react";
import axios from "axios";

const RecurringDepositCalculator = () => {
    const [monthlyDeposit, setMonthlyDeposit] = useState("");
    const [interestRate, setInterestRate] = useState("");
    const [investmentPeriod, setInvestmentPeriod] = useState("");
    const [results, setResults] = useState(null);

    const calculateRD = async (e) => {
        e.preventDefault();

        const formData = {
            monthlyDeposit: monthlyDeposit,
            interestRate: interestRate,
            investmentPeriod: investmentPeriod,
        };

        try {
            const response = await axios.get("http://127.0.0.1:8000/api/rd_calculator/", {
                params: formData,
            });
            setResults(response.data.result);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    return (
        <div>
            <h2>Recurring Deposit Calculator</h2>
            <form onSubmit={calculateRD}>
                <div>
                    <label>Monthly Deposit (₹):</label>
                    <input
                        type="number"
                        value={monthlyDeposit}
                        onChange={(e) => setMonthlyDeposit(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Annual Interest Rate (%):</label>
                    <input
                        type="number"
                        value={interestRate}
                        onChange={(e) => setInterestRate(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Investment Period (Years):</label>
                    <input
                        type="number"
                        value={investmentPeriod}
                        onChange={(e) => setInvestmentPeriod(e.target.value)}
                        required
                    />
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
                                <th>Quarter</th>
                                <th>Starting Balance (₹)</th>
                                <th>Interest Earned (₹)</th>
                                <th>Ending Balance (₹)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {results.breakdown.map((entry, index) => (
                                <tr key={index}>
                                    <td>{entry.quarter}</td>
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

export default RecurringDepositCalculator;
