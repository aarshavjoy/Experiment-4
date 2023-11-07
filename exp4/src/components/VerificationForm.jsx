import React, { useState } from 'react';
import ETHAmountSelection from './ETHAmountSelection';

function KYCVerification() {
  const [showETHAmount, setShowETHAmount] = useState(false);

  const handleNextClick = () => {
    setShowETHAmount(true);
  }

  return (
    <div>
      {showETHAmount ? (
        <ETHAmountSelection />
      ) : (
        <div className="card buycard">
          <div className="card-body">
            <h5 className="card-title">KYC Verification</h5>
            <p>Step 2: Complete Verification</p>
            <div className="form-group">
              <label>Full Name:</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label>ID Number:</label>
              <input type="text" className="form-control" />
            </div>
            <button className="btn btn-primary" onClick={handleNextClick}>Verify</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default KYCVerification;
