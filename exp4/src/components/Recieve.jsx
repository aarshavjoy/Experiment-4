import React, { useState } from 'react';
import DashboardTwo from './DashboardTwo';

function ReceiveEther() {
  const [ethAddress, setEthAddress] = useState('');
  const [ethAmount, setEthAmount] = useState('');
  const [transactionConfirmed, setTransactionConfirmed] = useState(false);
 

  const defaultAddresses = [
    '0x742d35Cc6634C0532925a3..',
    '0x742d35Cc6634C05329.',
  ];

  const handleReceiveEther = () => {
   
    setTransactionConfirmed(true);
  };

  const handleCopyAddress = () => {
  
    navigator.clipboard.writeText(ethAddress);
    alert('Ethereum address copied to clipboard!');
  };

  return (
    <div className="container recive">
      {transactionConfirmed ? (
        <DashboardTwo  ethAmount={ethAmount} />
      ) : (
        <div className="card  buycard">
          
          <div className="card-body">
            <div>
              <p> Choose your Ethereum address</p>
              <select
                className="form-control"
                value={ethAddress}
                onChange={(e) => setEthAddress(e.target.value)}
              >
                <option value="">Select an Ethereum address</option>
                {defaultAddresses.map((address, index) => (
                  <option key={index} value={address}>
                    {address}
                  </option>
                ))}
              </select>
              <p> Share your Ethereum address with the sender</p>
              <p>Your Ethereum address: {ethAddress}</p>
              <button className="btn btn-primary" onClick={handleCopyAddress}>
                Copy Address
              </button>
             
              <p> Verify the transaction</p>
              <button className="btn btn-primary" onClick={handleReceiveEther}>
                home page
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ReceiveEther;
