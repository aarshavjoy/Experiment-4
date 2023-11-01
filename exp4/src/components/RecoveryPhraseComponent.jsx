import React, { useState } from 'react';
import RecoveryPhraseOrderComponent from './RecoveryPhraseRearrangeComponent';


const RecoveryPhraseComponent = ({ showNextComponent }) => {
  // Function to generate a random 12-word phrase (for demonstration purposes)
  const generateRandomPhrase = () => {
    const words = [
      'blockchain', 'crypto', 'learning', 'wallet', 'digital', 'pow',
      '', 'block', 'miners', 'password', 'bitcoin', 'pos'
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

  const handleNext = () => {
    setRecoveryPhrase(generateRandomPhrase());
    setShowRecoveryPhraseOrder(true);
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Secret Recovery Phrase</h5>
        <p>{recoveryPhrase}</p>
      </div>
      <div className="card-body">
        <button className="btn btn-primary" onClick={handleNext}>Next</button>
      </div>
      {showRecoveryPhraseOrder && <RecoveryPhraseOrderComponent recoveryPhrase={recoveryPhrase} />}
    </div>
  );
};

export default RecoveryPhraseComponent;
