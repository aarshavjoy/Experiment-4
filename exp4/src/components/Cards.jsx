import React, { useState } from 'react';

const QuestionAnswerCard = ({ showMetaMaskIntro, hideQuestionAnswerCard }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const questionsAndAnswers = [
    { question: 'What is Ethereum?', answer: 'React is a JavaScript library for building user interfaces.' },
    { question: 'How do you store and manage Ethereum and other cryptocurrencies?', answer: 'JSX is a syntax extension for JavaScript, often used in React.' },
    { question: 'What is the role of a wallet in the Ethereum ecosystem?', answer: 'JSX is a syntax extension for JavaScript, often used in React.' },
    { question: 'Can you name a popular Ethereum wallet?', answer: 'JSX is a syntax extension for JavaScript, often used in React.' },
    { question: 'How do you install and set up MetaMask?', answer: 'JSX is a syntax extension for JavaScript, often used in React.' },
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
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Question:</h5>
        <p className="card-text">{currentQuestion}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <strong>Answer:</strong> {questionsAndAnswers[currentIndex].answer}
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
