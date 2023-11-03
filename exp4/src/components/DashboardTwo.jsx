import React, { useState, useEffect } from 'react';
import Accordion from './AccountDetailsComponent';
import BuyETH from './Buy'; // Import the BuyETH component

const DashboardTwo = () => {
  const [selectedNetwork, setSelectedNetwork] = useState('Mainnet');
  const [etherAmount, setEtherAmount] = useState(10); // Initial ether amount
  const [publicKey, setPublicKey] = useState(generateRandomKey(40));
  const [privateKey, setPrivateKey] = useState(generateRandomKey(64));
  const [isAccordionCardVisible, setIsAccordionCardVisible] = useState(false);
  const [isBuyingETH, setIsBuyingETH] = useState(false);
  const [showKYCVerification, setShowKYCVerification] = useState(false);


  

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

  return (
    <div>
      {isBuyingETH ? (
        <BuyETH onBuy={() => setIsBuyingETH(false)} />
      ) : (
        <div className="card dashcard">
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
              <Accordion publicKey={publicKey} privateKey={privateKey} onClose={closeAccordionCard} />
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
              Buy ETH
            </button>
            <button className="btn btns btn-primary">Sell</button>
            <button className="btn btns btn-primary">Send</button>
            <button className="btn btns btn-primary">Receive</button>
          </div>
          <hr />
          <div className="card-body">
            <button className="btn  assetbtn ">Assets</button>
            <button className="btn activitybtn ">Activity</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardTwo;