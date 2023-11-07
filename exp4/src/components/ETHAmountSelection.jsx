import React, { useState } from 'react';
import ReviewPurchaseDetails from './ReviewPurchaseDetails';

function ETHAmountSelection({ onAmountSelection }) {
  const [ethAmount, setETHAmount] = useState('');
  const [selectedCurrency, setSelectedCurrency] = useState('USD');
  const [showReview, setShowReview] = useState(false);

  const handleETHAmountChange = (amount) => {
    setETHAmount(amount);
  };

  const handleCurrencyChange = (currency) => {
    setSelectedCurrency(currency);
  };

  const calculateEquivalentAmount = () => {
    // Calculate the equivalent amount based on exchange rates (you should fetch rates from an API)
    // For this example, we'll assume a simple conversion rate for demonstration purposes.
    let conversionRate = 1.23; // Replace with the actual exchange rate
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

  const currencies = ['USD', 'EUR', 'GBP', 'JPY']; // Add more as needed

  return (
    <div>
      {showReview ? (
        <ReviewPurchaseDetails ethAmount={ethAmount} />
      ) : (
        <div className="card buycard">
          <div className="card-body">
            <h5 className="card-title">ETH Amount Selection</h5>
            <p>Step 3: Select ETH Amount</p>
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
            <button className="btn btn-primary" onClick={handleNextClick}>
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ETHAmountSelection;
