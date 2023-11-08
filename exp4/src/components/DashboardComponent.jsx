import React, { useState, useEffect } from "react";
import Accordion from "./AccountDetailsComponent";
import SendCard from "./Sendquestion";

const DashboardComponent = ({ account, onShowSendCard }) => {
  const [selectedNetwork, setSelectedNetwork] = useState("Mainnet");
  const [etherAmount, setEtherAmount] = useState(10);
  const [publicKey, setPublicKey] = useState(generateRandomKey(40));
  const [privateKey, setPrivateKey] = useState(generateRandomKey(64));
  const [isAccordionCardVisible, setIsAccordionCardVisible] = useState(false);


  const networks = ["Mainnet", "Ropsten testNetwork", "Kovan testNetwork", "Rinkeby testNetwork"];

  useEffect(() => {
    const updateEtherAmount = setInterval(() => {
      const newEtherAmount = Math.floor(Math.random() * 100) / 100;
      setEtherAmount(newEtherAmount);
    }, 100000);

    return () => {
      clearInterval(updateEtherAmount);
    };
  }, []);

  const handleNetworkChange = (event) => {
    setSelectedNetwork(event.target.value);
  };

  function generateRandomKey(length) {
    const characters = "0123456789ABCDEF";
    let key = "0x";
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



  return (
    <>
      <div>
        <button className="btn resumebtn btn-primary" onClick={onShowSendCard}>
          Resume Learning
        </button>
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
                <option key={network} value={network} disabled={network !== "Ropsten testNetwork"}>
                  {network}
                </option>
              ))}
            </select>
            <div className="account-details">
              <button
                className="btn btndetail btn-light"
                onClick={toggleAccordionCard}
              >
                <i className="fas fa-ellipsis-h"></i>
              </button>
            </div>

            {isAccordionCardVisible && (
              <Accordion
                publicKey={publicKey}
                privateKey={privateKey}
                onClose={closeAccordionCard}
              />
            )}
          </div>
          <div className="card-body bodys">
            <h5 className="card-title accountcard">Account-1 {account}</h5>
          </div>
          <div className="card-body ">
            <p className="key"> {publicKey}</p>
            <p className="coin">
              <b>{etherAmount}ETH</b>
            </p>
          </div>
         
          <div className="card-body">
            <button className="btn btns btn-primary">Buy</button>
            <button className="btn btns btn-primary">Sell</button>
            <button className="btn btns btn-primary">Send </button>
            <button className="btn btns btn-primary">Receive</button>
           
          </div>
          <hr/>
          <h4 className="history">Transaction History</h4>
          <p className="NOO"> You have no transactions</p>
        
        </div>
      </div>
      
      
    </>
  );
};

export default DashboardComponent;
