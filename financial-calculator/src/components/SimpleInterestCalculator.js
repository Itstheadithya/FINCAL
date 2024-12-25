import React, { useState } from "react";
import axios from "axios";

const SimpleInterestCalculator = () => {
    const [principalAmount, setPrincipalAmount] = useState("");
    const [interestRate, setInterestRate] = useState("");
    const [timePeriod, setTimePeriod] = useState("");
    const [simpleInterest, setSimpleInterest] = useState(null);
    const [totalAmount, setTotalAmount] = useState(null);

    const calculateSI = async (e) => {
        e.preventDefault();

        const formData = {
            principalAmount: principalAmount,
            interestRate: interestRate,
            timePeriod: timePeriod,
        };

        try {
            const response = await axios.get("http://127.0.0.1:8000/api/simple_interest/", {
                params: formData,
            });
            setSimpleInterest(response.data.result.simpleInterest);
            setTotalAmount(response.data.result.totalAmount);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    return (
        <div>
            <h2>Simple Interest Calculator</h2>
            <form onSubmit={calculateSI}>
                <div>
                    <label>Principal Amount (₹):</label>
                    <input
                        type="number"
                        value={principalAmount}
                        onChange={(e) => setPrincipalAmount(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Rate of Interest (%):</label>
                    <input
                        type="number"
                        value={interestRate}
                        onChange={(e) => setInterestRate(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Time Period (Years):</label>
                    <input
                        type="number"
                        value={timePeriod}
                        onChange={(e) => setTimePeriod(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Calculate</button>
            </form>

            {simpleInterest !== null && (
                <div>
                    <h3>Results:</h3>
                    <p>Simple Interest: ₹{simpleInterest}</p>
                    <p>Total Amount (Principal + Interest): ₹{totalAmount}</p>
                </div>
            )}
        </div>
    );
};

export default SimpleInterestCalculator;
