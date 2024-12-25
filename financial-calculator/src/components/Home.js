import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <div className="home-content">
                <h1 className="home-title">Welcome to Financial Calculators</h1>
                <p className="home-description">
                    Your one-stop solution for simplifying financial decisions! Whether it's calculating interest, GST, or savings plans, our tools are here to help you make smarter choices with ease.
                </p>
                <img
                    src="./logo1.jpg"
                    alt="Financial Tools"
                    className="home-image"
                />
                <p className="home-cta">
                    Start exploring our calculators to gain better control over your finances.
                </p>
            </div>
        </div>
    );
};

export default Home;
