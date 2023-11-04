import React, { useState } from 'react';


const RecoveryPhraseComponent = ({ onNext }) => {
  const generateRandomPhrase = () => {
    const words = [
      'blockchain', 'crypto', 'learning', 'wallet', 'digital', 'pow',
      'halla', 'block', 'miners', 'password', 'bitcoin', 'pos'
    ];

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
    setShowRecoveryPhraseOrder(true);
    onNext(recoveryPhrase); 
  };

  return (
    <div className="card recovery">
      <div className="card-body">
        
          <>
            <h5 className="card-title">Secret Recovery Phrase</h5>
            <b><p className='pharse'>{recoveryPhrase}</p></b>
          </>
       
      </div>
      <div className="card-body">
        <button className="btn btnrecovery btn-primary" onClick={handleNext}>Next</button>
      </div>
      
    </div>
  );
};

export default RecoveryPhraseComponent;