import React, { useState } from "react";
import axios from "axios";

const CompoundInterest = () => {
    const [principal, setPrincipal] = useState("");
    const [rate, setRate] = useState("");
    const [time, setTime] = useState("");
    const [compounds, setCompounds] = useState(1); // Default to annually
    const [results, setResults] = useState(null);

    const calculateCompoundInterest = async (e) => {
        e.preventDefault();

        const formData = {
            principal: principal,
            rate: rate,
            time: time,
            compounds: compounds,
        };

        try {
            const response = await axios.get("http://127.0.0.1:8000/api/compound_interest/", {
                params: formData,
            });
            setResults(response.data.result);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    return (
        <div>
            <h2>Compound Interest Calculator</h2>
            <form onSubmit={calculateCompoundInterest}>
                <div>
                    <label>Principal (₹):</label>
                    <input
                        type="number"
                        value={principal}
                        onChange={(e) => setPrincipal(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Annual Rate of Interest (%):</label>
                    <input
                        type="number"
                        value={rate}
                        onChange={(e) => setRate(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Time (Years):</label>
                    <input
                        type="number"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Compounding Frequency:</label>
                    <select
                        value={compounds}
                        onChange={(e) => setCompounds(e.target.value)}
                    >
                        <option value="1">Annually</option>
                        <option value="2">Semi-Annually</option>
                        <option value="4">Quarterly</option>
                        <option value="12">Monthly</option>
                    </select>
                </div>
                <button type="submit">Calculate</button>
            </form>

            {results && (
                <div>
                    <h3>Results:</h3>
                    <table border="1">
                        <thead>
                            <tr>
                                <th>Year</th>
                                <th>Amount (₹)</th>
                                <th>Interest Earned (₹)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {results.map((result) => (
                                <tr key={result.year}>
                                    <td>{result.year}</td>
                                    <td>{result.amount}</td>
                                    <td>{result.interest}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div>
                        <h4>Total Amount: ₹{results[results.length - 1].amount}</h4>
                        <h4>Compound Interest: ₹{results[results.length - 1].interest}</h4>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CompoundInterest;
