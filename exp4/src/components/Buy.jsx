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
    <div className="buy-eth">
      {showKYCVerification ? (
        <KYCVerification />
      ) : (
        <div>
          <h3>Buy ETH</h3>
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
          <button className="btn btn-primary" onClick={handleNextClick}>
            Next
          </button>
        </div>
      )}
    </div>
  );
}

export default BuyETH;
