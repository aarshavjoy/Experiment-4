import React, { useState, useEffect } from 'react';
import Accordion from './AccountDetailsComponent';
import BuyETH from './Buy';
import TransactionProcess from './SendTransaction';
import SellProcess from './Sell';
import ReceiveEther from './Recieve';

const DashboardTwo = ({ transactionData }) => {
  const [selectedNetwork, setSelectedNetwork] = useState('Mainnet');
  const [etherAmount, setEtherAmount] = useState(10); // Set your desired fixed ETH amount here
  const [publicKey, setPublicKey] = useState(generateRandomKey(40));
  const [privateKey, setPrivateKey] = useState(generateRandomKey(64));
  const [isAccordionCardVisible, setIsAccordionCardVisible] = useState(false);
  const [isBuyingETH, setIsBuyingETH] = useState(false);
  const [isTransactionProcessVisible, setIsTransactionProcessVisible] = useState(false);
  const [isSellProcessVisible, setIsSellProcessVisible] = useState(false);
  const [isReceiveEtherVisible, setIsReceiveEtherVisible] = useState(false);
  const [showInformation, setShowInformation] = useState(false);
  const [transactionHistory, setTransactionHistory] = useState([
    {
      type: "Send",
      amount: 2.5,
      recipientAddress: "0x12345...",
    },
    {
      type: "Sell",
      amount: 3.0,
      recipientAddress: "0x742d35Cc6634C05....",
    },
  ]);

  const containerStyle = {
    display: "flex",
    justifyContent: "space-between",
  };
  const spanStyle = {
    marginRight: "20px",
  };
  const networks = ['Mainnet', 'Ropsten', 'Kovan', 'Rinkeby'];

  const handleNetworkChange = (event) => {
    setSelectedNetwork(event.target.value);
  };

  function generateRandomKey(length) {
    const characters = '0123456789ABCDEF';
    let key = '0x';
    for (let i = 0; i < length - 2; i++) {
      key += characters[Math.floor(Math.random() * characters.length)];
    }
    return key;
  }

  const toggleAccordionCard = () => {
    setIsAccordionCardVisible(!isAccordionCardVisible);
  };

  const handleBuyETHClick = () => {
    setIsBuyingETH(true);
  };

  const showTransactionProcess = () => {
    setIsTransactionProcessVisible(true);
  };

  const handleSellClick = () => {
    setIsSellProcessVisible(true);
  };

  const handleReceiveClick = () => {
    setIsReceiveEtherVisible(true);
  };

  useEffect(() => {
    const updateTransactionActivity = () => {
      if (transactionData) {
        setTransactionHistory([...transactionHistory, transactionData]);
        
        // Update etherAmount here when a transaction occurs
        if (transactionData.type === 'Send') {
          setEtherAmount((prevEtherAmount) => prevEtherAmount - transactionData.amount);
        } else if (transactionData.type === 'Sell') {
          setEtherAmount((prevEtherAmount) => prevEtherAmount - transactionData.amount);
        }
        else if (transactionData.type === 'Buy') {
          setEtherAmount((prevEtherAmount) => parseFloat(prevEtherAmount) + parseFloat(transactionData.amount));
        }
      }
    };

    updateTransactionActivity();
  }, [transactionData]);

  const toggleInformation = () => {
    setShowInformation(!showInformation);
  };

  const closeInformation = () => {
    setShowInformation(false);
  };

  return (
    <div>
      {isSellProcessVisible ? (
        <SellProcess />
      ) : isTransactionProcessVisible ? (
        <TransactionProcess />
      ) : isBuyingETH ? (
        <BuyETH onBuy={() => setIsBuyingETH(false)} />
      ) : isReceiveEtherVisible ? (
        <ReceiveEther />
      ) : (
        <div className="card dashboardtwo">
          <div className="network-dropdown">
            <label htmlFor="networkSelect"></label>
            <select
              id="networkSelect"
              className="form-select"
              value={selectedNetwork}
              onChange={handleNetworkChange}
            >
              {networks.map((network) => (
                <option key={network} value={network}>
                  {network}
                </option>
              ))}
            </select>
            <div className="account-details">
              <button className="btn btndetail btn-light" onClick={toggleAccordionCard}>
                <i className="fas fa-ellipsis-h"></i>
              </button>
            </div>
            {isAccordionCardVisible && (
              <Accordion publicKey={publicKey} privateKey={privateKey} onClose={toggleAccordionCard} />
            )}
          </div>
          <div className="card-body bodys">
            <h5 className="card-title accountcard">Account-1</h5>
          </div>
          <div className="card-body">
            <p className='key'> {publicKey}</p>
            <p className='coin'><b>{etherAmount} ETH</b></p>
          </div>
          
          <div className="card-body btnsicons">
            <button className="btn btns btn-primary" onClick={handleBuyETHClick}>
              Buy
            </button>
            <button className="btn btns btn-primary" onClick={showTransactionProcess}>Send</button>
            <button className="btn btns btn-primary" onClick={handleSellClick}>Sell</button>
            <button className="btn btns btn-primary" onClick={handleReceiveClick}>Receive</button>
            
            <i
              class="fa-solid   fa-circle-info"
              onClick={toggleInformation}
            ></i>
        
          </div>

          <div className="activity-log">
            <h4 className="history">Transaction History</h4>
            {transactionHistory.map((transaction, index) => (
              <div key={index} className="transaction-entry">
                <hr/>
                <p style={containerStyle}><b>{transaction.type}</b> <span style={spanStyle}> {transaction.amount} ETH</span></p>
                <p style={containerStyle}>To: {transaction.recipientAddress}</p>
              </div>
            ))}
          </div>
        </div>
      )}
      {showInformation && (
        <div className="information-container">
          <div className="information-content">
            <p>Metamask facilitates transactions in various ways:</p>
            <p>
             
              Send: Users can send cryptocurrencies from their MetaMask wallet
              to another wallet address.
            </p>
            <p>
              Receive: MetaMask provides wallet addresses to receive
              cryptocurrency from others.
            </p>
            <p>
              
              Buy: Users can buy cryptocurrencies within MetaMask through
              supported decentralized exchanges or services..
            </p>
            <p>
              Sell: Users can sell cryptocurrencies from their wallet using
              compatible decentralized exchanges or services.
            </p>

            <button className="btn close-btn" onClick={closeInformation}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardTwo;
