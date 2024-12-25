import React, { useState } from "react";
import axios from "axios";

const SukanyaSamriddhiCalculator = () => {
    const [annualDeposit, setAnnualDeposit] = useState("");
    const [interestRate, setInterestRate] = useState(8.2); // 8.2% default
    const [yearsOfDeposit, setYearsOfDeposit] = useState(15); // 15 years default
    const [maturityAmount, setMaturityAmount] = useState(null);
    const [totalInterest, setTotalInterest] = useState(null);

    const calculateMaturityAmount = async (e) => {
        e.preventDefault();

        const formData = {
            annualDeposit: annualDeposit,
            interestRate: interestRate,
            yearsOfDeposit: yearsOfDeposit,
        };

        try {
            const response = await axios.get("http://127.0.0.1:8000/api/ssy_maturity/", {
                params: formData,
            });
            setMaturityAmount(response.data.result.maturityAmount);
            setTotalInterest(response.data.result.totalInterest);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    return (
        <div>
            <h2>Sukanya Samriddhi Yojana (SSY) Calculator</h2>
            <form onSubmit={calculateMaturityAmount}>
                <div>
                    <label>Annual Deposit (₹):</label>
                    <input
                        type="number"
                        value={annualDeposit}
                        onChange={(e) => setAnnualDeposit(e.target.value)}
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
                    <label>Years of Deposit (15 years):</label>
                    <input
                        type="number"
                        value={yearsOfDeposit}
                        onChange={(e) => setYearsOfDeposit(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Calculate</button>
            </form>

            {maturityAmount !== null && (
                <div>
                    <h3>Results:</h3>
                    <p>Total Maturity Amount: ₹{maturityAmount}</p>
                    <p>Total Interest Earned: ₹{totalInterest}</p>
                </div>
            )}
        </div>
    );
};

export default SukanyaSamriddhiCalculator;
