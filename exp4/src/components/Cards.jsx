import React, { useState } from 'react';

const QuestionAnswerCard = ({ showMetaMaskIntro, hideQuestionAnswerCard }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const questionsAndAnswers = [
    { question: 'What is Ethereum?', answer: 'Ethereum is a decentralized blockchain platform that enables the creation and execution of smart contracts and decentralized applications (DApps). It uses its cryptocurrency called Ether (ETH) for transactions and operates as a global, open-source, and secure computing network.' },
    { question: 'How do you store and manage Ethereum and other cryptocurrencies?', answer: 'To store and manage Ethereum and other cryptocurrencies, you can use digital wallets, which come in various forms. Software wallets are apps or programs installed on your device, such as MetaMask or Trust Wallet, Hardware wallets are physical devices like Ledger Nano S or Trezor, offering high security as they store your keys offline.' },
    { question: 'What is the role of a wallet in the Ethereum ecosystem?', answer: 'A wallet in the Ethereum ecosystem serves as a key tool for managing Ethereum-based assets by securely storing private keys. It allows users to send, receive, and monitor Ether and tokens, interfaces with the Ethereum blockchain for smart contract interactions and transaction history, making it a central hub for managing Ethereum holdings.' },
    { question: 'How do you install and set up MetaMask?', answer: <div>
   1)Click on the "Create" button to initiate wallet creation.<br/>
   2)Create a strong password for your wallet and click "login ."<br/>
   3)MetaMask will generate a 12 or 24-word seed phrase. Write this down and keep it in a safe place. <br/>
   4)You'll be prompted to confirm your seed phrase by selecting the words in the correct order. This step is for verifying your backup.<br/>
   5)Your MetaMask wallet is now set up and ready to use.<br/>
   6)By default, MetaMask is set to the Ethereum mainnet. You can connect to other networks like testnets (e.g., Ropsten) or custom networks by clicking on the network selection button in the top-right corner.
  </div>},
    
  ];

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < questionsAndAnswers.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const currentQuestion = questionsAndAnswers[currentIndex].question;

  return (
    <div className="card qcards">
      <div className="card-body">
        <h5 className="card-title"></h5>
        <p className="card-text">{currentQuestion}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <strong></strong> {questionsAndAnswers[currentIndex].answer}
        </li>
      </ul>
      <div className="card-body">
        {currentQuestion === 'How do you install and set up MetaMask?' && (
          <button className="btn btn-primary" onClick={showMetaMaskIntro}>Create</button>
        )}
        <button className="btn btn-primary ml-2" onClick={handlePrevious}>Previous</button>
        <button className="btn btn-primary ml-2" onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default QuestionAnswerCard;
