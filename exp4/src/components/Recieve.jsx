import React, { useState } from 'react';
import DashboardTwo from './DashboardTwo';

function ReceiveEther() {
  const [ethAddress, setEthAddress] = useState('');
  const [ethAmount, setEthAmount] = useState('');
  const [transactionConfirmed, setTransactionConfirmed] = useState(false);

  const defaultAddresses = [
    '0xAddress1',
    '0xAddress2',
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
        <DashboardTwo  ethAmount={ethAmount}/>
      ) : (
        <div className="card  buycard">
          <div className="card-header">
            <h1 className="card-title">Receive Ethereum</h1>
          </div>
          <div className="card-body">
            <div>
              <p>Step 1: Choose your Ethereum address</p>
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
              <p>Step 2: Share your Ethereum address with the sender</p>
              <p>Your Ethereum address: {ethAddress}</p>
              <button className="btn btn-primary" onClick={handleCopyAddress}>
                Copy Address
              </button>
             
              <p>Step 3: Verify the transaction</p>
              <button className="btn btn-primary" onClick={handleReceiveEther}>
                Receive Ethereum
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ReceiveEther;
