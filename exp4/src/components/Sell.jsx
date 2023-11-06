import React, { useState } from 'react';
import DashboardTwo from './DashboardTwo';

function SellProcess() {
  const [step, setStep] = useState(1);
  const [region, setRegion] = useState('');
  const [ethAmount, setEthAmount] = useState('');
  const [quote, setQuote] = useState('Wyre');
  const [dashboard, setDashboard] = useState(false);
  const [kycInfo, setKYCInfo] = useState({
    fullName: '',
    dateOfBirth: '',
    address: '',
  });
  const [bankInfo, setBankInfo] = useState({
    bankName: '',
    accountNumber: '',
    routingNumber: '',
  });
  const [isTransactionComplete, setIsTransactionComplete] = useState(false);

  const handleNextStep = () => {
    if (step < 7) {
      setStep(step + 1);
    }
  };

  const calculateExchangeRate = (quote) => {
    if (quote === 'Wyre') {
      return 0.02;
    } else if (quote === 'moonpay') {
      return 0.025;
    }
  };

  const calculateTotalMoney = (ethAmount, exchangeRate) => {
    return (ethAmount * exchangeRate).toFixed(2);
  };

  const onFinish = () => {
    setDashboard(true);
  };

  return (
    <div className="container">
      {dashboard ? (
        <DashboardTwo ethAmount={ethAmount} />
      ) : (
        <div>
         
          <div className="card-body">
            {step === 1 && (
              <div>
                <p>Step 1: Select your region</p>
                <input
                  type="text"
                  className="form-control fsell"
                  placeholder="Region"
                  value={region}
                  onChange={(e) => setRegion(e.target.value)}
                />
                <button className="btn btn-primary" onClick={handleNextStep}>
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
                <button className="btn btn-primary" onClick={handleNextStep}>
                  Next
                </button>
              </div>
            )}
            {step === 3 && (
              <div>
                <p>Step 3: Complete KYC</p>
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
                <textarea
                  className="form-control"
                  placeholder="Address"
                  value={kycInfo.address}
                  onChange={(e) =>
                    setKYCInfo({ ...kycInfo, address: e.target.value })
                  }
                />
                <button className="btn btn-primary" onClick={handleNextStep}>
                  Next
                </button>
              </div>
            )}
            {step === 4 && (
              <div>
                <p>Step 4: Connect your bank account</p>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Bank Name"
                  value={bankInfo.bankName}
                  onChange={(e) =>
                    setBankInfo({ ...bankInfo, bankName: e.target.value })
                  }
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Account Number"
                  value={bankInfo.accountNumber}
                  onChange={(e) =>
                    setBankInfo({ ...bankInfo, accountNumber: e.target.value })
                  }
                />
                <button className="btn btn-primary" onClick={handleNextStep}>
                  Connect Bank Account
                </button>
              </div>
            )}
            {step === 5 && (
              <div>
                 <p>Step 5: verify Amount and Order</p>
                <p>ETH Amount: {ethAmount}</p>
                <p>Order ID: {Math.floor(Math.random() * 100000)}</p>
                <button className="btn btn-primary" onClick={handleNextStep}>
                  Send ETH
                </button>
              </div>
            )}
            {step === 6 && (
              <div className="selldetails">
                <p>Step 7: Transaction Details</p>
                <p>Order ID: {Math.floor(Math.random() * 100000)}</p>
                <p>Destination Account: {bankInfo.accountNumber}</p>
                <p>Preferred Provider: {quote}</p>
                <p>Exchange Rate (Quote): 1 ETH = {calculateExchangeRate(quote)} BTC</p>
                <p>Total ETH: {ethAmount} ETH</p>
                <p>Total Money (USD): {calculateTotalMoney(ethAmount, calculateExchangeRate(quote))} USD</p>
                <p>Order Confirmed! Please note that it may take a few days to see the funds in your bank account.</p>
                <button className="btn btn-primary" onClick={onFinish}>
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
