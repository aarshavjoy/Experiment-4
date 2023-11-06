import React, { useState } from 'react';
import DashboardTwo from './DashboardTwo';

function ReviewPurchaseDetails({ ethAmount, selectedCurrency }) {
  const [showBalance, setShowBalance] = useState(false);
  const gasFee = 0.01;
  const price = 2000;

  // Calculate the total amount needed
  const totalAmountNeeded = ethAmount * price + gasFee;

  const handleShowBalance = () => {
    setShowBalance(true);
  }

  return (
    <div className="review-purchase-details">
      {showBalance ? (
        <DashboardTwo ethAmount={ethAmount} />
      ) : (
        <div>
          <p>step4: Review purchase details</p>
          <div>
            <p>Amount: {ethAmount} ETH</p>
            <p>Gas Fee: {gasFee} ETH</p>
            <p>Price per ETH: {price} {selectedCurrency} per ETH</p>
            <p>Total Amount Needed: {totalAmountNeeded} {selectedCurrency}</p>
            
          </div>
          <button className="btn btn-primary" onClick={handleShowBalance}>Confirm Purchase</button>
        </div>
      )}
    </div>
  );
}

export default ReviewPurchaseDetails