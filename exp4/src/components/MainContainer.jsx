import React, { useState } from 'react';
import QuestionAnswerCard from './Cards';
import MetaMaskIntroComponent from './MetaMaskIntro';
import PasswordComponent from './PasswordComponent';
import RecoveryPhraseComponent from './RecoveryPhraseComponent';

const MainContainer = () => {
  const [showQuestionAnswerCard, setShowQuestionAnswerCard] = useState(true);
  const [showMetaMaskIntro, setShowMetaMaskIntro] = useState(false);
  const [showPasswordComponent, setShowPasswordComponent] = useState(false);
  const [showRecoveryPhraseComponent, setShowRecoveryPhraseComponent] = useState(false);



  const handleShowQuestionAnswerCard = () => {
    setShowQuestionAnswerCard(true);
    setShowMetaMaskIntro(false);
    setShowPasswordComponent(true);
  };

  const handleShowMetaMaskIntro = () => {
    setShowQuestionAnswerCard(false);
    setShowMetaMaskIntro(true);
  };
  const handleShowPasswordComponent = () => {
    setShowMetaMaskIntro(false);
    setShowPasswordComponent(true);
  };
  const handleShowRecoveryPhraseComponent = () => {
    setShowPasswordComponent(false);
    setShowRecoveryPhraseComponent(true);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          {showQuestionAnswerCard ? (
            <QuestionAnswerCard
              showMetaMaskIntro={handleShowMetaMaskIntro}
              hideQuestionAnswerCard={handleShowMetaMaskIntro}
            />
          ) : null}
           {showMetaMaskIntro && (
            <MetaMaskIntroComponent showPasswordComponent={handleShowPasswordComponent} />
          )}
         {showPasswordComponent && (
            <PasswordComponent showLogin={handleShowRecoveryPhraseComponent} />
          )}
          {showRecoveryPhraseComponent && (
            <RecoveryPhraseComponent />
          )}
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
