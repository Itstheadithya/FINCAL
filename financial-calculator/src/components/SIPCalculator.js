import React, { useState } from "react";
import axios from "axios";

const SIPCalculator = () => {
    const [principal, setPrincipal] = useState("");
    const [rate, setRate] = useState("");
    const [tenure, setTenure] = useState("");
    const [results, setResults] = useState([]);

    const calculateSIP = async (e) => {
        e.preventDefault();

        const formData = {
            principal: principal,
            rate: rate,
            tenure: tenure,
        };

        try {
            const response = await axios.get("http://127.0.0.1:8000/api/sip/", {
                params: formData,
            });
            setResults(response.data.result);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    return (
        <div>
            <h2>SIP Calculator</h2>
            <form onSubmit={calculateSIP}>
                <div>
                    <label>Monthly Investment (₹):</label>
                    <input
                        type="number"
                        value={principal}
                        onChange={(e) => setPrincipal(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Annual Rate of Return (%):</label>
                    <input
                        type="number"
                        value={rate}
                        onChange={(e) => setRate(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Investment Period (Years):</label>
                    <input
                        type="number"
                        value={tenure}
                        onChange={(e) => setTenure(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Calculate</button>
            </form>

            {results.length > 0 && (
                <div>
                    <h3>Results:</h3>
                    <table border="1">
                        <thead>
                            <tr>
                                <th>Year</th>
                                <th>Future Value (₹)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {results.map((result) => (
                                <tr key={result.year}>
                                    <td>{result.year}</td>
                                    <td>{result.futureValue}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default SIPCalculator;
