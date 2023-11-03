import React, { useState } from 'react';
import RecoveryPhraseRearrangeComponent from './RecoveryPhraseRearrangeComponent';



const RecoveryPhraseComponent = ({ showRecoveryPharse }) => {
  // Function to generate a random 12-word phrase (for demonstration purposes)
  const generateRandomPhrase = () => {
    const words = [
      'blockchain', 'crypto', 'learning', 'wallet', 'digital', 'pow',
      'halla', 'block', 'miners', 'password', 'bitcoin', 'pos'
    ];

    // Shuffle the words to create a random phrase
    for (let i = words.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [words[i], words[j]] = [words[j], words[i]];
    }

    return words.join(' ');
  };

  const [recoveryPhrase, setRecoveryPhrase] = useState(generateRandomPhrase);
  const [showRecoveryPhraseOrder, setShowRecoveryPhraseOrder] = useState(false);
  const missingIndices = [2, 5, 9];

  const handleNext = () => {
    setRecoveryPhrase(generateRandomPhrase());
    setShowRecoveryPhraseOrder(true);
    showRecoveryPharse();
  };

  return (
    <div className="card recovery">
      <div className="card-body">
        <h5 className="card-title">Secret Recovery Phrase</h5>
        <p>{recoveryPhrase}</p>
      </div>
      <div className="card-body">
        <button className="btn btn-primary" onClick={handleNext}>Next</button>
      </div>
      {showRecoveryPhraseOrder && (
        <RecoveryPhraseRearrangeComponent recoveryPhrase={recoveryPhrase} missingIndices={missingIndices}  />
      )}
    </div>
  );
};

export default RecoveryPhraseComponent;
