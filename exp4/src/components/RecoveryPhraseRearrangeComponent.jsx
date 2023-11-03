import React, { useState } from 'react';
import DashboardComponent from './DashboardComponent'

const RecoveryPhraseRearrangeComponent = ({recoveryPhrase, missingIndices}) => {
  const originalWords = recoveryPhrase.split(' ');
  const [userWords, setUserWords] = useState(Array(originalWords.length).fill(''));
  const [isSuccess, setIsSuccess] = useState(false);
  const [showDashboards,setShowDashboards] =useState(false);

  const handleInputChange = (index, e) => {
    if (missingIndices.includes(index)) {
      const newValue = e.target.value;
      const newUserWords = [...userWords];
      newUserWords[index] = newValue;
      setUserWords(newUserWords);
    }
  };

  const handleConfirm = () => {
    const isOrderCorrect = userWords.join(' ') === recoveryPhrase;
    setIsSuccess(isOrderCorrect);
   
    
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Reorder Recovery Phrase</h5>
        {originalWords.map((word, index) => (
          <input
            key={index}
            type="text"
            value={missingIndices.includes(index) ? userWords[index] : word}
            onChange={(e) => handleInputChange(index, e)}
            readOnly={!missingIndices.includes(index)}
          />
        ))}
      </div>
      <div className="card-body">
        <button className="btn btn-primary" onClick={handleConfirm}>
          Confirm
        </button>
      </div>
      {isSuccess && <p>Success! You have arranged the recovery phrase correctly.</p>}
     
    </div>
  );
};

export default RecoveryPhraseRearrangeComponent;
