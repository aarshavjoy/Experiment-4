import React, { useState } from 'react';
import KYCVerification from './VerificationForm';

function BuyETH({ onBuy }) {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [ethAmount, setETHAmount] = useState('');
  const [showKYCVerification, setShowKYCVerification] = useState(false);
  const [showInformation, setShowInformation] = useState(false);

  const handleNextClick = () => {
    if (paymentMethod) {
      setShowKYCVerification(true);
    }
  }

  const paymentMethods = ['Bank Transfer', 'Credit/Debit Card', 'Cryptocurrency'];

  const toggleInformation = () => {
    setShowInformation(!showInformation);
  };

  const closeInformation = () => {
    setShowInformation(false);
  };

  return (
    <div>
      {showKYCVerification ? (
        <KYCVerification />
      ) : (
        <div className="card buycard">
          <div className="card-body">
          <i
              className="fa-solid   fa-circle-info"
              onClick={toggleInformation}
            ></i>
         
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
       {showInformation && (
        <div className="information-container">
          <div className="information-content">
            <p>Metamask facilitates transactions in various ways:</p>
            <p>
             
              Send: Users can send cryptocurrencies from their MetaMask wallet
              to another wallet address.
            </p>
            <p>
              Receive: MetaMask provides wallet addresses to receive
              cryptocurrency from others.
            </p>
            <p>
              
              Buy: Users can buy cryptocurrencies within MetaMask through
              supported decentralized exchanges or services..
            </p>
            <p>
              Sell: Users can sell cryptocurrencies from their wallet using
              compatible decentralized exchanges or services.
            </p>

            <button className="btn close-btn" onClick={closeInformation}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default BuyETH;
