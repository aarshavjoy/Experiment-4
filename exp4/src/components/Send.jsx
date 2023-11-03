import React, { useState } from 'react';

const SendTransaction = ({ onClose, onSend }) => {
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState();
  const [gasPrice, setGasPrice] = useState();

  const handleSend = () => {
  
    onSend({
      recipient,
      amount,
      gasFee: gasPrice,
      totalCost:amount+gasPrice,
    });
    onSend(transactionDetails);
  };

  return (
    <div className="modal show" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Send Ethereum</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={onClose}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form>
              <div className="form-group">
                <label>Recipient Address</label>
                <input
                  type="text"
                  className="form-control"
                  value={recipient}
                  onChange={(e) => setRecipient(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Amount (ETH)</label>
                <input
                  type="text"
                  className="form-control"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Gas Price (Gwei)</label>
                <input
                  type="text"
                  className="form-control"
                  value={gasPrice}
                  onChange={(e) => setGasPrice(e.target.value)}
                />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary" onClick={handleSend}>
              Send
            </button>
            <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={onClose}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendTransaction;
