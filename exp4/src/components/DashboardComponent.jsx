import React, { useState, useEffect } from 'react';

import Accordion from './AccountDetailsComponent';


const DashboardComponent = ({ account }) => {
  const [selectedNetwork, setSelectedNetwork] = useState('Mainnet');
  const [etherAmount, setEtherAmount] = useState(10); // Initial ether amount
  const [publicKey, setPublicKey] = useState(generateRandomKey(40));
  const [privateKey, setPrivateKey] = useState(generateRandomKey(64));
  const [isAccordionCardVisible, setIsAccordionCardVisible] = useState(false);

  const networks = ['Mainnet', 'Ropsten', 'Kovan', 'Rinkeby'];

  useEffect(() => {
    // Simulate a dynamic ether amount update every 10 seconds
    const updateEtherAmount = setInterval(() => {
      const newEtherAmount = Math.floor(Math.random() * 100) / 100; // Generate a random ether amount
      setEtherAmount(newEtherAmount);
    }, 10000); // Update every 10 seconds

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
  const closeAccordionCard = () => {
    setIsAccordionCardVisible(false);
  };


  return (<>
  <button className="btn btn-primary" >
          Resume Learning
        </button>
  <div className="card"> 
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
      </div>
      <div className="card-body bodys">
        <h5 className="card-title">Account-1 {account}</h5>
        <div className="account-details">
          <button className="btn btn-light" onClick={toggleAccordionCard}>
            {/* Three dots icon */}
            <i className="fas fa-ellipsis-h"></i>
          </button>
        </div>
      </div>
      {isAccordionCardVisible && (
        <Accordion publicKey={publicKey} privateKey={privateKey} onClose={closeAccordionCard}/>
      )}
      <div className="card-body publicbody">
        <p>Public Key: {publicKey}</p>
        <p>Ether Amount: {etherAmount} ETH</p>
      </div>
      <div className="card-body">
        <button className="btn btn-primary">Buy</button>
        <button className="btn btn-primary">Sell</button>
        <button className="btn btn-primary">Send</button>
        <button className="btn btn-primary">Receive</button>
      </div>
      <div className="card-body">
        <button className="btn btn-primary">Assets</button>
        <button className="btn btn-primary">Activity</button>
      </div>
    </div>
    </>
  );
};

export default DashboardComponent;
