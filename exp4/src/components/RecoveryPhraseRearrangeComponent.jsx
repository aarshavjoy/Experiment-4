import React, { useState } from 'react';

const RecoveryPhraseOrderComponent = ({ recoveryPhrase, handleConfirm }) => {
  const words = recoveryPhrase.split(' ');
  const [selectedWords, setSelectedWords] = useState(Array(words.length).fill(''));
  const [isCorrect, setIsCorrect] = useState(false);

  // Function to handle word selection
  const handleWordClick = (word, index) => {
    const updatedSelectedWords = [...selectedWords];
    updatedSelectedWords[index] = word;
    setSelectedWords(updatedSelectedWords);
  };

  // Function to check if the words are arranged correctly
  const checkIsCorrect = () => {
    setIsCorrect(words.join(' ') === selectedWords.join(' '));
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Rearrange Recovery Phrase</h5>
        <div className="rearrange-phrase">
          {words.map((word, index) => (
            <button
              key={index}
              className={`btn btn-secondary ${selectedWords[index] === word ? 'active' : ''}`}
              onClick={() => handleWordClick(word, index)}
            >
              {word}
            </button>
          ))}
        </div>
      </div>
      <div className="card-body">
        <button className="btn btn-primary" onClick={checkIsCorrect}>Confirm</button>
        {isCorrect && <p className="text-success">Recovery phrase is correct!</p>}
        {isCorrect === false && <p className="text-danger">Recovery phrase is not correct. Please try again.</p>}
      </div>
    </div>
  );
};

export default RecoveryPhraseOrderComponent;
