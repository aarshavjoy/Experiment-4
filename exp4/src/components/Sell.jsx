import React, { useState } from "react";
import DashboardTwo from "./DashboardTwo";

function SellProcess() {
  const [step, setStep] = useState(1);
  const [region, setRegion] = useState("");
  const [ethAmount, setEthAmount] = useState("");
  const [quote, setQuote] = useState("Wyre");
  const [dashboard, setDashboard] = useState(false);
  const [transactionDataSell, setTransactionDataSell] = useState(null);
  const [showInformation, setShowInformation] = useState(false);
  const [kycInfo, setKYCInfo] = useState({
    fullName: "",
    dateOfBirth: "",
    address: "",
  });
  const [bankInfo, setBankInfo] = useState({
    bankName: "",
    accountNumber: "",
    routingNumber: "",
  });
  const [isTransactionComplete, setIsTransactionComplete] = useState(false);

  const handleNextStep = () => {
    if (step < 7) {
      setStep(step + 1);
    }
  };

  const calculateExchangeRate = (quote) => {
    if (quote === "Wyre") {
      return 144887.38;
    } else if (quote === "moonpay") {
      return 262797.68;
    }
  };

  const calculateTotalMoney = (ethAmount, exchangeRate) => {
    return (ethAmount * exchangeRate).toFixed(2);
  };

  const onFinish = () => {
    setTransactionDataSell({
      type: "Sold",
      amount: ethAmount,
      recipientAddress: bankInfo.bankName,
    });
    setDashboard(true);
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
    <div>
      {dashboard ? (
        <DashboardTwo ethAmount={ethAmount} transactionData={transactionDataSell} />
      ) : (
        <div className="card sellcards">
          <div className="card-body">
            {step === 1 && (
              <div>
                 <i
              className="fa-solid   fa-circle-info"
              onClick={toggleInformation}
            ></i>
                <p> Select your region</p>
                <select
                  className="form-control fsell"
                  value={region}
                  onChange={(e) => setRegion(e.target.value)}
                >
                  <option value="">Select Region</option>
                  <option value="USA">United States</option>
                  <option value="Canada">Canada</option>
                  <option value="UK">United Kingdom</option>
                  <option value="Australia">Australia</option>
                  {/* Add more country options here */}
                </select>
                <button
                  className="btn sellbtns btn-primary"
                  onClick={handleNextStep}
                >
                  Next
                </button>
              </div>
            )}
            {step === 2 && (
              <div>
                <p> Input the amount of ETH you want to sell</p>
                <input
                  type="number"
                  className="form-control"
                  placeholder="ETH Amount"
                  value={ethAmount}
                  onChange={(e) => setEthAmount(e.target.value)}
                />
                <p>Choose your preferred provider and quote (exchange rate):</p>
                <select
                  className="form-control"
                  value={quote}
                  onChange={(e) => setQuote(e.target.value)}
                >
                  <option value="Wyre">Wyre (1 ETH = $1,887.38)</option>
                  <option value="moonpay">Moonpay (1 ETH = $2,797.68)</option>
                </select>
                <button
                  className="btn  sellbtns btn-primary"
                  onClick={handleNextStep}
                >
                  Next
                </button>
              </div>
            )}
            {step === 3 && (
              <div>
             
                <p>Personal Information:</p>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Full Name"
                  value={kycInfo.fullName}
                  onChange={(e) =>
                    setKYCInfo({ ...kycInfo, fullName: e.target.value })
                  }
                />
                <input
                  type="date"
                  className="form-control"
                  placeholder="Date of Birth"
                  value={kycInfo.dateOfBirth}
                  onChange={(e) =>
                    setKYCInfo({ ...kycInfo, dateOfBirth: e.target.value })
                  }
                />

                <button
                  className="btn sellbtns btn-primary"
                  onClick={handleNextStep}
                >
                  Next
                </button>
              </div>
            )}
            {step === 4 && (
              <div>
                <p> Connect your bank account</p>
                <div className="form-group">
                  <label htmlFor="bankName">Bank account:</label>
                  <select
                    className="form-control"
                    id="bankName"
                    value={bankInfo.bankName}
                    onChange={(e) =>
                      setBankInfo({ ...bankInfo, bankName: e.target.value })
                    }
                  >
                    <option value="">Select Bank account</option>
                    <option value="0x742d35Cc6634C0532925a3..">Account-1</option>
                    <option value="0x742d35Cc6634C05....">Account-2</option>
                    <option value="0x742d35Cc6634C05329.">Account-3</option>
                  </select>
                </div>

                <button className="btn acctbtn btn-primary" onClick={handleNextStep}>
                  Connect Bank Account
                </button>
              </div>
            )}
            {step === 5 && (
              <div>
                <h5 className="verify"> Verify Amount and Order</h5>
                <b>
                  <p className="selleth"> {ethAmount}ETH</p>
                </b>
                <p className="sellorder">
                  Order ID: <b>{Math.floor(Math.random() * 100000)}</b>
                </p>
                <button
                  className="btn sellbtnss  btn-primary"
                  onClick={handleNextStep}
                >
                  Send ETH
                </button>
              </div>
            )}
            {step === 6 && (
              <div className="selldetails">
                <h4 className="detailss">Transaction Details</h4>
                <p style={containerStyle}>
                  Order ID:{" "}
                  <span style={spanStyle}>
                    <b>{Math.floor(Math.random() * 100000)}</b>
                  </span>
                </p>
                <p style={containerStyle}>
                  Destination Account:
                  <span style={spanStyle}><b>{bankInfo.bankName}</b></span>
                </p>
                <p style={containerStyle}>
                  Preferred Provider:<span style={spanStyle}><b>{quote}</b></span>
                </p>
                <p style={containerStyle}>
                  Exchange Rate (Quote):
                  <span style={spanStyle}>
                   <b> 1 ETH = ${calculateExchangeRate(quote)}</b>
                  </span>
                </p>
                <p style={containerStyle}>
                  Total ETH: <span style={spanStyle}><b>{ethAmount} ETH</b></span>
                </p>
                <p style={containerStyle}>
                  Amount received total(USD):
                  <span style={spanStyle}><b>
                    
                    {calculateTotalMoney(
                      ethAmount,
                      calculateExchangeRate(quote)
                    )}
                    USD</b>
                  </span>
                </p>
                <br />
                <b>
                  <p>
                    Order Confirmed! Please note that it may take a few days to
                    see the funds in your bank account.
                  </p>
                </b>
                <button className="btn finishbtn btn-primary" onClick={onFinish}>
                  Finish
                </button>
              </div>
            )}
            {showInformation && (
        <div className="information-container">
          <div className="information-content">
            <p>How to sell ETH in MetaMask?</p>
            <p>
             
            Select your bank's country from the dropdown menu.
            </p>
            <p>
            Enter the amount of ETH you want to sell and choose your preferred offer.
            </p>
            <p>
              
             complete the verification  process  and connect your bank account.
            </p>
            <p>
            Click "Send ETH."
            </p>
               <p>transaction details along with confirmation is produced</p>
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
}

export default SellProcess;
