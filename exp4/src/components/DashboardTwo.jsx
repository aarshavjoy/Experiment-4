import React, { useState, useEffect } from 'react';
import Accordion from './AccountDetailsComponent';
import BuyETH from './Buy';
import TransactionProcess from './SendTransaction';
import SellProcess from './Sell';
import ReceiveEther from './Recieve';


const DashboardTwo = () => {
  const [selectedNetwork, setSelectedNetwork] = useState('Mainnet');
  const [etherAmount, setEtherAmount] = useState(10);
  const [publicKey, setPublicKey] = useState(generateRandomKey(40));
  const [privateKey, setPrivateKey] = useState(generateRandomKey(64));
  const [isAccordionCardVisible, setIsAccordionCardVisible] = useState(false);
  const [isBuyingETH, setIsBuyingETH] = useState(false);
  const [isTransactionProcessVisible, setIsTransactionProcessVisible] = useState(false);
  const [isSellProcessVisible, setIsSellProcessVisible] = useState(false);
  const [isReceiveEtherVisible, setIsReceiveEtherVisible] = useState(false); // Add state for ReceiveEther visibility

  const networks = ['Mainnet', 'Ropsten', 'Kovan', 'Rinkeby'];

  useEffect(() => {
    const updateEtherAmount = setInterval(() => {
      const newEtherAmount = Math.floor(Math.random() * 100) / 100;
      setEtherAmount(newEtherAmount);
    }, 10000);

    return () => {
      clearInterval(updateEtherAmount);
    };
  }, []);

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
          <div className="card-body">
            <button className="btn btns btn-primary" onClick={handleBuyETHClick}>
              Buy
            </button>
            <button className="btn btns btn-primary" onClick={showTransactionProcess}>Send</button>
            <button className="btn btns btn-primary" onClick={handleSellClick}>Sell</button>
            <button className="btn btns btn-primary" onClick={handleReceiveClick}>Receive</button>
          </div>
          <hr />
          <button className="btn activitybtn">Activity</button>
        </div>
      )}
    </div>
  );
};

export default DashboardTwo;
