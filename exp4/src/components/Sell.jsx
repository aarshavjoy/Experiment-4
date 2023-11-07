import React, { useState } from "react";
import DashboardTwo from "./DashboardTwo";

function SellProcess() {
  const [step, setStep] = useState(1);
  const [region, setRegion] = useState("");
  const [ethAmount, setEthAmount] = useState("");
  const [quote, setQuote] = useState("Wyre");
  const [dashboard, setDashboard] = useState(false);
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
      return 0.02;
    } else if (quote === "moonpay") {
      return 0.025;
    }
  };

  const calculateTotalMoney = (ethAmount, exchangeRate) => {
    return (ethAmount * exchangeRate).toFixed(2);
  };

  const onFinish = () => {
    setDashboard(true);
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
        <DashboardTwo ethAmount={ethAmount} />
      ) : (
        <div className="card sellcards">
          <div className="card-body">
            {step === 1 && (
              <div>
                <p>Step 1: Select your region</p>
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
                <p>Step 2: Input the amount of ETH you want to sell</p>
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
                  <option value="Wyre">Wyre (1 ETH = 0.02 BTC)</option>
                  <option value="moonpay">Moonpay (1 ETH = 0.025 BTC)</option>
                </select>
                <button
                  className="btn  sellbtn btn-primary"
                  onClick={handleNextStep}
                >
                  Next
                </button>
              </div>
            )}
            {step === 3 && (
              <div>
                <p>Step 3: Complete Verification </p>
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
                  className="btn sellbtn btn-primary"
                  onClick={handleNextStep}
                >
                  Next
                </button>
              </div>
            )}
            {step === 4 && (
              <div>
                <p>Step 4: Connect your bank account</p>
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
                    <option value="Account-1">Account-1</option>
                    <option value="Account-2">Account-2</option>
                    <option value="Account-3">Account-3</option>
                  </select>
                </div>

                <button className="btn btn-primary" onClick={handleNextStep}>
                  Connect Bank Account
                </button>
              </div>
            )}
            {step === 5 && (
              <div>
                <p>Step 5: verify Amount and Order</p>
                <b>
                  <p className="selleth"> {ethAmount}ETH</p>
                </b>
                <p className="sellorder">
                  Order ID: <b>{Math.floor(Math.random() * 100000)}</b>
                </p>
                <button
                  className="btn sellbtn  btn-primary"
                  onClick={handleNextStep}
                >
                  Send ETH
                </button>
              </div>
            )}
            {step === 6 && (
              <div className="selldetails">
                <p>Step 7: Transaction Details</p>
                <p style={containerStyle}>
                  Order ID:{" "}
                  <span style={spanStyle}>
                    {Math.floor(Math.random() * 100000)}
                  </span>
                </p>
                <p style={containerStyle}>
                  Destination Account:
                  <span style={spanStyle}>{bankInfo.bankName}</span>{" "}
                </p>
                <p style={containerStyle}>
                  Preferred Provider:<span style={spanStyle}>{quote}</span>{" "}
                </p>
                <p style={containerStyle}>
                  Exchange Rate (Quote):
                  <span style={spanStyle}>
                    1 ETH = {calculateExchangeRate(quote)} BTC
                  </span>
                </p>
                <p style={containerStyle}>
                  Total ETH: <span style={spanStyle}>{ethAmount} ETH</span>
                </p>
                <p style={containerStyle}>
                  Amount received total(USD):
                  <span style={spanStyle}>
                    {" "}
                    {calculateTotalMoney(
                      ethAmount,
                      calculateExchangeRate(quote)
                    )}{" "}
                    USD
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
          </div>
        </div>
      )}
    </div>
  );
}

export default SellProcess;
