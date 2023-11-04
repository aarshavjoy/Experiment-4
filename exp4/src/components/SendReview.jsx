import React from 'react';

const TransactionConfirmation = ({ transactionDetails, onConfirm, onClose }) => {
  const { recipient, amount, gasFee, totalCost } = transactionDetails;

  return (
    <div className="modal show" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Transaction Confirmation</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={onClose}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="confirmation-details">
              <p><strong>Recipient Address:</strong> {recipient}</p>
              <p><strong>Amount (ETH):</strong> {amount}</p>
              <p><strong>Gas Fee (Gwei):</strong> {gasFee}</p>
              <p><strong>Total Cost (ETH):</strong> {totalCost}</p>
            </div>
          </div>
          <div className="modal-footer">
            <button className="btn btn-primary" onClick={onConfirm}>
              Confirm
            </button>
            <button className="btn btn-secondary" data-dismiss="modal" onClick={onClose}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionConfirmation;
