import React from 'react';

const SendCard = ({ onShowDashboardTwo }) => {
  const questionAndAnswer = [
    {
      question: 'How do transactions happen in MetaMask?',
      answer: (
        <div>
          Metamask facilitates transactions in various ways:<br /><br/>
          Send: Users can send cryptocurrencies from their MetaMask wallet to another wallet address.<br /><br/>
          Receive: MetaMask provides wallet addresses to receive cryptocurrency from others.<br /><br/>
          Buy: Users can buy cryptocurrencies within MetaMask through supported decentralized exchanges or services..<br /><br/>
          Sell: Users can sell cryptocurrencies from their wallet using compatible decentralized exchanges or services.<br /><br/>
        </div>
      ),
    },
  ];

  return (
    <div className="card sendcard">
      <div className="card-body">
        <p className="card-text">{questionAndAnswer[0].question}</p>
        <p className="card-text">{questionAndAnswer[0].answer}</p>
        <button className="btn btnsends btn-primary" onClick={onShowDashboardTwo} >
          Try Yourself
        </button>
      </div>
    </div>
  );
};

export default SendCard;
