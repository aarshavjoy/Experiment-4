import React, { useState } from 'react';
import KYCVerification from './VerificationForm';

function BuyETH({ onBuy }) {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [ethAmount, setETHAmount] = useState('');
  const [showKYCVerification, setShowKYCVerification] = useState(false);

  const handleNextClick = () => {
    if (paymentMethod) {
      setShowKYCVerification(true);
    }
  }

  const paymentMethods = ['Bank Transfer', 'Credit/Debit Card', 'Cryptocurrency'];

  return (
    <div>
      {showKYCVerification ? (
        <KYCVerification />
      ) : (
        <div className="card buycard">
          <div className="card-body">
            <h5 className="card-title">Buy ETH</h5>
            <div className="form-group">
              <label>Payment Method:</label>
              <select
                className="form-control"
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
              >
                <option value="">Select Payment Method</option>
                {paymentMethods.map((method) => (
                  <option key={method} value={method}>
                    {method}
                  </option>
                ))}
              </select>
            </div>
            <button className="btn btn-primary" onClick={handleNextClick}>
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default BuyETH;
