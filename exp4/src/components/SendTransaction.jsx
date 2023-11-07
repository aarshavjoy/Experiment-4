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
  const [transactionData, setTransactionData] = useState(null);
  const [showInformation, setShowInformation] = useState(false);



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
    setTransactionData({ type: "Send", amount: amountToSend, recipientAddress: recipientAddress }); 
    setDash(true);
  };

  const toggleInformation = () => {
    setShowInformation(!showInformation);
  };

  const closeInformation = () => {
    setShowInformation(false);
  };
  const containerStyle = {
    display: "flex",
    justifyContent: "space-between",
  };
  const spanStyle = {
    marginRight: "20px",
  };


  return (
    <div className="container mt-5">
      {dash ? (
        <DashboardTwo ethAmount={amountToSend} transactionData={transactionData} />
      ) : (
        <div className="card buycard">
          <div className="card-body">
          
            {step === 1 && (
              <div>
                 <i
              className="fa-solid   fa-circle-info"
              onClick={toggleInformation}
            ></i>
                <h4> Select Your Account</h4>
                <div className="form-check accountcheck"> 
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
                <div className="form-check  accountcheck">
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
                <button className="btn btnsend btn-primary" onClick={initiateTransaction}>
                  Next
                </button>
              </div>
            )}
            {step >= 2 && step <= 4 && (
              <div>
             
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
                <p> Specify Amount:</p>
                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Amount to Send"
                  value={amountToSend}
                  onChange={(e) => setAmountToSend(e.target.value)}
                />
                <p> Estimate Gas Fees:</p>
                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Gas Fees"
                  value={defaultGasPrice}
                  onChange={(e) => setGasFees(e.target.value)}
                />
                <button className="btn btnsend btn-primary" onClick={nextStep}>
                  Next
                </button>
              </div>
            )}
            {step === 5 && (
              <div>
                <p style={containerStyle}> Review Transaction Details</p>
                <p style={containerStyle}>Amount to Send:<b> <span style={spanStyle}> {amountToSend} ETH</span></b></p>
                <p style={containerStyle}>Gas Price(estimated): <b><span style={spanStyle}> {defaultGasPrice} ETH</span></b></p>
                <p style={containerStyle}>Total: <span style={spanStyle}> <b>{parseFloat(amountToSend) + parseFloat(defaultGasPrice)} ETH</b></span></p>
                <button className="btn  btnconfirm btn-primary" onClick={onConfirm}>
                  Confirm
                </button>
              </div>
            )}
             {showInformation && (
        <div className="information-container">
          <div className="information-content">
            <p>How to sell ETH in MetaMask?</p>
            <p>
             
            Select your account from which you wish to send ETH..
            </p>
            <p>
            Input the recipient's public address.
            </p>
            <p>
              
            Enter the amount of ETH to send and you will be presented with the estimated gas fees of your transaction
            </p>
            <p>
            Review and  Confirm the transaction.
            </p>
            <p>You will then be redirected to the homepage, where you can see a list of your recent transactions below transaction history</p>

            <button className="btn close-btn" onClick={closeInformation}>
              Close
            </button>
          </div>
        </div>
      )}
          </div>
        </div>
      )}
    </div>
  );
};

export default TransactionProcess;
