import React, { useState } from 'react';
import ETHAmountSelection from './ETHAmountSelection';

function KYCVerification() {
  const [showETHAmount, setShowETHAmount] = useState(false);

  const handleNextClick = () => {
    setShowETHAmount(true);
  }

  return (
    <>
      <div className="kyc-verification">
        {showETHAmount ? (
          <ETHAmountSelection />
        ) : (
          <>
            <h3>KYC Verification</h3>
            <div className="form-group">
              <label>Full Name:</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label>ID Number:</label>
              <input type="text" className="form-control" />
            </div>
            <button className="btn btn-primary" onClick={handleNextClick}>Verify</button>
          </>
        )}
      </div>
    </>
  );
}

export default KYCVerification;
