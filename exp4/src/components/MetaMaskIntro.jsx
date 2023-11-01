import React from 'react';

const MetaMaskIntroComponent = ({ showPasswordComponent, hideMetaMaskIntro }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">New to MetaMask?</h5>
      </div>
      <div className="card-body">
        <button className="btn btn-primary" onClick={showPasswordComponent}>Create</button>
      </div>
    </div>
  );
};

export default MetaMaskIntroComponent;
