import React from 'react';

const SendCard = ({ onShowDashboardTwo }) => {
  const questionAndAnswer = [
    {
      question: 'How do transactions happen in MetaMask?',
      answer: (
        <div>
          Metamask facilitates transactions in various ways:<br /><br/>
          Send: A send transaction involves transferring cryptocurrency from your MetaMask wallet to another wallet address.<br /><br/>
          Receive: A receive transaction involves receiving cryptocurrency from another wallet or entity.<br /><br/>
          Buy: A buy transaction involves acquiring cryptocurrency by exchanging fiat currency or another asset.<br /><br/>
          Sell: A sell transaction involves exchanging cryptocurrency for another asset, such as fiat currency or another cryptocurrency.<br /><br/>
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
