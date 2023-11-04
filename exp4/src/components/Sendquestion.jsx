import React, { useState } from 'react';
import DashboardTwo from './DashboardTwo';

const SendCard = () => {
  const [showDashboardTwo, setShowDashboardTwo] = useState(false);

  const handleStart = () => {
    setShowDashboardTwo(true);
  };

  const questionAndAnswer = [
    {
        question: 'How do you buy Ethereum in MetaMask?',
        answer: (
          <div>
            1) Click on the "Buy" button on the MetaMask interface.<br />
            2) Select your preferred payment method.<br />
            3) Complete KYC verification if required.<br />
            4) Enter the amount of Ethereum (ETH) you want to purchase.<br />
            5) Select your country for payment options and fees.<br />
            6) Review your purchase details, including fees and the equivalent amount in your currency.<br />
            7) Confirm your purchase to initiate the transaction.<br />
            8) Once the purchase is successful, the purchased ETH will appear in your wallet.
          </div>
        ),
      },
    ];

  return (
    <div className="card sendcard">
      {showDashboardTwo ? (
        <DashboardTwo />
      ) : (
        <div className="card-body">
          <p className="card-text">{questionAndAnswer[0].question}</p>
          <p className="card-text">{questionAndAnswer[0].answer}</p>
          <button className="btn btnsend btn-primary" onClick={handleStart}>
            Start
          </button>
        </div>
      )}
    </div>
  );
};

export default SendCard;
