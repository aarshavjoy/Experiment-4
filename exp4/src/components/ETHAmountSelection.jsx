import React, { useState } from 'react';
import ReviewPurchaseDetails from './ReviewPurchaseDetails';

function ETHAmountSelection({ onAmountSelection }) {
  const [ethAmount, setETHAmount] = useState('');
  const [selectedCurrency, setSelectedCurrency] = useState('USD');
  const [showReview, setShowReview] = useState(false);
  const [recipientAddress,setRecipientAddress]= useState('');

  const handleETHAmountChange = (amount) => {
    setETHAmount(amount);
  };

  const handleCurrencyChange = (currency) => {
    setSelectedCurrency(currency);
  };

  const calculateEquivalentAmount = () => {
   
    let conversionRate = 1.23;
    return ethAmount * conversionRate;
  };

  const handleNextClick = () => {
    setShowReview(true);
    if (ethAmount > 0) {
      const equivalentAmount = calculateEquivalentAmount();
      onAmountSelection(ethAmount, selectedCurrency, equivalentAmount);
    } else {
      alert('Please enter a valid ETH amount.');
    }
  }

  const currencies = ['USD', 'EUR', 'GBP', 'JPY']; 

  return (
    <div>
      {showReview ? (
        <ReviewPurchaseDetails ethAmount={ethAmount} recipientAddress={recipientAddress}  />
      ) : (
        <div className="card buycard">
          <div className="card-body">
        
            
            <div className="form-group">
                <label>Select Recipient Address:</label>
                <select
                  className="form-control mb-3"
                  value={recipientAddress}
                  onChange={(e) => setRecipientAddress(e.target.value)}
                >
                  <option value="">Select a recipient address</option>
                  <option value="0x742d35Cc6634C0532925a3..">0x742d35Cc6634C0532925a3b844Bc454e4438f44e</option>
                  <option value="0x742d35Cc6634C05329..">0x742d35Cc6634C0532925a3b844Bc454e4438f44f</option>
                  <option value="0x742d35Cc6634C05....">0x742d35Cc6634C0532925a3b844Bc454e4438f450</option>
                 
                </select>
              </div>
            <div className="form-group">
              <label>Enter ETH Amount:</label>
              <input
                type="number"
                step="0.01"
                className="form-control"
                value={ethAmount}
                onChange={(e) => handleETHAmountChange(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Select Currency:</label>
              <select
                className="form-control"
                value={selectedCurrency}
                onChange={(e) => handleCurrencyChange(e.target.value)}
              >
                {currencies.map((currency) => (
                  <option key={currency} value={currency}>
                    {currency}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>Equivalent Amount:</label>
              <input
                type="text"
                className="form-control"
                value={calculateEquivalentAmount()}
                readOnly
              />
            </div>

            <button className="btn btneth btn-primary" onClick={handleNextClick}>
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ETHAmountSelection;
