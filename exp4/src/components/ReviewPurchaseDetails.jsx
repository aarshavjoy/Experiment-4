import React, { useState } from 'react';
import DashboardTwo from './DashboardTwo';

function ReviewPurchaseDetails({ ethAmount, selectedCurrency,recipientAddress }) {
  const [showBalance, setShowBalance] = useState(false);
  const [transactionDataBuy, setTransactionDataBuy] = useState(null);

  const gasFee = 0.01;
  const price = 100000;

 
  const totalAmountNeeded = ethAmount * price + gasFee;

  const handleShowBalance = () => {
    setTransactionDataBuy({ type: "Buy", amount: ethAmount, recipientAddress:recipientAddress }); 
    setShowBalance(true);
  }
  const containerStyle = {
    display: "flex",
    justifyContent: "space-between",
  };
  const spanStyle = {
    marginRight: "20px",
  };

  return (
    <div>
      {showBalance ? (
        <DashboardTwo ethAmount={ethAmount} recipientAddress={recipientAddress} transactionData={transactionDataBuy}  />
      ) : (
        <div className="card buycard">
          <div className="card-body">
            <h5 className="card-title reviews">Review Purchase Details</h5>
          
            <div>
              <p style={containerStyle}>Amount:  <span style={spanStyle}> <b>{ethAmount} ETH</b></span></p>
              <p style={containerStyle}>Gas Fee:<span style={spanStyle}><b>{gasFee} ETH</b></span> </p>
              <p style={containerStyle}>recipient Address:<span style={spanStyle}><b>{recipientAddress}</b></span></p>
              <p style={containerStyle}>Price per ETH: <span style={spanStyle}><b>{price} {selectedCurrency} per ETH</b></span></p>
              <p style={containerStyle}>Total Amount Needed:<span style={spanStyle}><b>{totalAmountNeeded} {selectedCurrency}</b></span> </p>
            </div>
            <button className="btn btnreview btn-primary" onClick={handleShowBalance}>Confirm Purchase</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ReviewPurchaseDetails;
