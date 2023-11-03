import React from 'react';

const TransactionReceipt = ({ transactionHash, onClose }) => {
  return (
    <div className="modal show" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Transaction Receipt</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={onClose}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <p><strong>Transaction Hash:</strong> {transactionHash}</p>
            <p>Use this transaction hash to track the status of your transaction on a block explorer.</p>
          </div>
          <div className="modal-footer">
            <button className="btn btn-primary" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionReceipt;
