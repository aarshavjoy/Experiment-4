import React from 'react';

function ReviewPurchaseDetails({ ethAmount, selectedCurrency }) {
 
  const gasFee = 0.01; 
  const price = 2000; 

  // Calculate the total amount needed
  const totalAmountNeeded = ethAmount * price + gasFee;

  return (
    <div className="review-purchase-details">
      <h3>Review Purchase Details</h3>
      <div>
        <p>Amount: {ethAmount} ETH</p>
        <p>Gas Fee: {gasFee} ETH</p>
        <p>Price per ETH: {price} {selectedCurrency} per ETH</p>
        <p>Total Amount Needed: {totalAmountNeeded} {selectedCurrency}</p>
        {/* Add more details like terms and conditions here */}
      </div>
      <button className="btn btn-primary">Confirm Purchase</button>
    </div>
  );
}

export default ReviewPurchaseDetails;
