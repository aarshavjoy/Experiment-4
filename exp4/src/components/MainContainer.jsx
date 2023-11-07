import React, { useState } from 'react';
import QuestionAnswerCard from './Cards';
import MetaMaskIntroComponent from './MetaMaskIntro';
import PasswordComponent from './PasswordComponent';
import SendCard from './Sendquestion';
import DashboardTwo from './DashboardTwo';
import RecoveryPhraseComponent from './RecoveryPhraseComponent';
import RecoveryPhraseRearrangeComponent from './RecoveryPhraseRearrangeComponent';
import DashboardComponent from './DashboardComponent';

const MainContainer = () => {
  const [showQuestionAnswerCard, setShowQuestionAnswerCard] = useState(true);
  const [showMetaMaskIntro, setShowMetaMaskIntro] = useState(false);
  const [showPasswordComponent, setShowPasswordComponent] = useState(false);
  const [showRecoveryPhraseComponent, setShowRecoveryPhraseComponent] = useState(false);
  const [showRecoveryPhraseRearrangeComponent, setShowRecoveryPhraseRearrangeComponent] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);
  const [generatedRecoveryPhrase, setGeneratedRecoveryPhrase] = useState('');
  const [showSendCard, setShowSendCard] = useState(false);
  const [showDashboardTwo, setShowDashboardTwo] = useState(false);

  const handleShowQuestionAnswerCard = () => {
    setShowQuestionAnswerCard(true);
    setShowMetaMaskIntro(false);
  };

  const handleShowMetaMaskIntro = () => {
    setShowQuestionAnswerCard(false);
    setShowMetaMaskIntro(true);
    setShowPasswordComponent(false);
  };

  const handleShowPasswordComponent = () => {
    setShowMetaMaskIntro(false);
    setShowPasswordComponent(true);
    setShowRecoveryPhraseComponent(false);
  };

  const handleShowRecoveryPhraseComponent = () => {
    setShowPasswordComponent(false);
    setShowRecoveryPhraseComponent(true);
  };

  const handleShowRecoveryPhraseRearrangeComponent = (recoveryPhrase) => {
    if (recoveryPhrase) {
      setGeneratedRecoveryPhrase(recoveryPhrase);
    }
    setShowRecoveryPhraseComponent(false);
    setShowRecoveryPhraseRearrangeComponent(true);
  };

  const handleShowDashboard = () => {
    setShowRecoveryPhraseRearrangeComponent(false);
    setShowDashboard(true);
  };

  const handleShowSendCard = () => {
    setShowDashboard(false); 
    setShowSendCard(true); 
  };
  const handleShowDashboardTwo = () => {
    setShowSendCard(false);
    setShowDashboardTwo(true);
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
            <RecoveryPhraseComponent onNext={handleShowRecoveryPhraseRearrangeComponent} />
          )}
          {showRecoveryPhraseRearrangeComponent && (
            <RecoveryPhraseRearrangeComponent
              recoveryPhrase={generatedRecoveryPhrase}
              missingIndices={[2, 5, 9]}
              onDashboard={handleShowDashboard}
            />
          )}
           {showDashboard ? (
            <DashboardComponent onShowSendCard={handleShowSendCard} />
          ) : showSendCard ? (
            <SendCard onShowDashboardTwo={handleShowDashboardTwo}  />
          ) : null}
           {showDashboardTwo ? (
            <DashboardTwo />
          ) : null}
          
          
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
