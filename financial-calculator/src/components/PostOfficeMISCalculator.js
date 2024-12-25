import React, { useState } from "react";
import axios from "axios";

const PostOfficeMISCalculator = () => {
    const [principalAmount, setPrincipalAmount] = useState("");
    const [interestRate, setInterestRate] = useState("");
    const [investmentPeriod, setInvestmentPeriod] = useState("");
    const [monthlyInterest, setMonthlyInterest] = useState(null);

    const calculateMIS = async (e) => {
        e.preventDefault();

        const formData = {
            principalAmount: principalAmount,
            interestRate: interestRate,
            investmentPeriod: investmentPeriod,
        };

        try {
            const response = await axios.get("http://127.0.0.1:8000/api/mis_calculator/", {
                params: formData,
            });
            setMonthlyInterest(response.data.result.monthlyInterest);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    return (
        <div>
            <h2>Post Office MIS Calculator</h2>
            <form onSubmit={calculateMIS}>
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

            {monthlyInterest && (
                <div>
                    <h3>Results:</h3>
                    <p>Monthly Interest: ₹{monthlyInterest}</p>
                    <p>This amount will be credited to your account every month for the investment period.</p>
                </div>
            )}
        </div>
    );
};

export default PostOfficeMISCalculator;
