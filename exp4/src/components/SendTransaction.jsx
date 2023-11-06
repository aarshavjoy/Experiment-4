// TransactionProcess.js
import React, { useState, useEffect } from 'react';
import DashboardTwo from './DashboardTwo';


const TransactionProcess = () => {
  const [step, setStep] = useState(1);
  const [selectedAccount, setSelectedAccount] = useState("");
  const [recipientAddress, setRecipientAddress] = useState("");
  const [amountToSend, setAmountToSend] = useState("");
  const [gasFees, setGasFees] = useState("");
  const [defaultGasPrice, setDefaultGasPrice] = useState(0);
  const [dash, setDash] = useState(false);

  useEffect(() => {
    const randomGasPrice = (Math.random() * 100).toFixed(2);
    setDefaultGasPrice(randomGasPrice);
  }, []);

  const nextStep = () => {
    if (step < 5) {
      setStep(step + 1);
    } else if (step === 5) {
      setStep(1);
    }
  };

  const initiateTransaction = () => {
    if (step === 1) {
      if (selectedAccount) {
        nextStep();
      } else {
        alert("Please select an account.");
      }
    }
  };

  const onConfirm = () => {
    setDash(true);
  };

  return (
    <div className="container mt-5">
      {dash ? (
        <DashboardTwo ethAmount={amountToSend} />
      ) : (
        <div>
         
          {step === 1 && (
            <div>
              <p>Step 1: Select Your Account</p>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="accountOptions"
                  value="Account 1"
                  checked={selectedAccount === "Account 1"}
                  onChange={() => setSelectedAccount("Account 1")}
                />
                <label className="form-check-label">Account 1</label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="accountOptions"
                  value="Account 2"
                  checked={selectedAccount === "Account 2"}
                  onChange={() => setSelectedAccount("Account 2")}
                />
                <label className="form-check-label">Account 2</label>
              </div>
              <button className="btn btn-primary" onClick={initiateTransaction}>
                Next
              </button>
            </div>
          )}
          {step >= 2 && step <= 4 && (
            <div>
              <p>Step 2: Enter Recipient Address</p>
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Recipient Address"
                value={recipientAddress}
                onChange={(e) => setRecipientAddress(e.target.value)}
              />
              <p>Step 3: Specify Amount</p>
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Amount to Send"
                value={amountToSend}
                onChange={(e) => setAmountToSend(e.target.value)}
              />
              <p>Step 4: Estimate Gas Fees</p>
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Gas Fees"
                value={defaultGasPrice}
                onChange={(e) => setGasFees(e.target.value)}
              />
              <button className="btn btn-primary" onClick={nextStep}>
                Next
              </button>
            </div>
          )}
          {step === 5 && (
            <div>
              <p>Step 5: Review Transaction Details</p>
              <p>Amount to Send: {amountToSend} ETH</p>
              <p>Gas Price: {defaultGasPrice} ETH</p>
              <p>Total: {parseFloat(amountToSend) + parseFloat(defaultGasPrice)} ETH</p>
              <button className="btn btn-primary" onClick={onConfirm}>
                Confirm
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TransactionProcess;
