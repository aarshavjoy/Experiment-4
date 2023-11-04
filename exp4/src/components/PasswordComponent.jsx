import React, { useState } from 'react';
import RecoveryPhraseComponent from './RecoveryPhraseComponent';

const PasswordComponent = ({ showLogin }) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showRecoveryPhrase, setShowRecoveryPhrase] = useState(false);


  const handleLogin = () => {
   
    setShowRecoveryPhrase(true);
    showLogin();
  };

  return (
    <div className="card login">
      <div className="card-body">
        <h5 className="card-title">Enter Password</h5>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Confirm Password:</label>
          <input
            type="password"
            className="form-control"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button className="btn btn-primary" onClick={handleLogin}>Login</button>
      </div>
      {showRecoveryPhrase && (
        <RecoveryPhraseComponent />
      )}
    </div>
  );
};

export default PasswordComponent;
