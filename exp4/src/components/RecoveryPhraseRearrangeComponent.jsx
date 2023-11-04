import React, { useState } from 'react';

const RecoveryPhraseRearrangeComponent = ({ recoveryPhrase, missingIndices, onDashboard }) => {
  const originalWords = recoveryPhrase.split(' ');
  const [userWords, setUserWords] = useState(Array(originalWords.length).fill(''));

  const handleInputChange = (index, e) => {
    if (missingIndices.includes(index)) {
      const newValue = e.target.value;
      const newUserWords = [...userWords];
      newUserWords[index] = newValue;
      setUserWords(newUserWords);
    }
  };

  return (
    <div className="card reorder">
      <div className="card-body">
        <h5 className="card-title">Reorder Recovery Phrase</h5>
        {originalWords.map((word, index) => (
          <input
            className='reorders'
            key={index}
            type="text"
            value={missingIndices.includes(index) ? userWords[index] : word}
            onChange={(e) => handleInputChange(index, e)}
            readOnly={!missingIndices.includes(index)}
          />
        ))}
      </div>
      <div className="card-body">
        <button className="btn btnreorder btn-primary" onClick={() => onDashboard(userWords.join(' '))}>
          Confirm
        </button>
      </div>
    </div>
  );
};

export default RecoveryPhraseRearrangeComponent;
