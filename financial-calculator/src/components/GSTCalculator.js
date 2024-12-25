import React, { useState } from "react";
import axios from "axios";

const GSTCalculator = () => {
    const [price, setPrice] = useState("");
    const [gstRate, setGstRate] = useState("");
    const [calculationType, setCalculationType] = useState("exclusive");
    const [results, setResults] = useState(null);

    const calculateGST = async (e) => {
        e.preventDefault();

        const formData = {
            price: price,
            gstRate: gstRate,
            calculationType: calculationType,
        };

        try {
            const response = await axios.get("http://127.0.0.1:8000/api/gst_calculator/", {
                params: formData,
            });
            setResults(response.data.result);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    return (
        <div>
            <h2>GST Calculator</h2>
            <form onSubmit={calculateGST}>
                <div>
                    <label>{calculationType === "exclusive" ? "Original Price (₹):" : "Price with GST (₹):"}</label>
                    <input
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>GST Rate (%):</label>
                    <input
                        type="number"
                        value={gstRate}
                        onChange={(e) => setGstRate(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Calculation Type:</label>
                    <select
                        value={calculationType}
                        onChange={(e) => setCalculationType(e.target.value)}
                    >
                        <option value="exclusive">Exclusive GST</option>
                        <option value="inclusive">Inclusive GST</option>
                    </select>
                </div>
                <button type="submit">Calculate</button>
            </form>

            {results && (
                <div>
                    <h3>Results:</h3>
                    <p>GST Amount: ₹{results.gstAmount}</p>
                    <p>{calculationType === "exclusive" ? "Final Price (with GST):" : "Original Price (excluding GST):"} ₹{results.finalPrice}</p>
                </div>
            )}
        </div>
    );
};

export default GSTCalculator;
