import React from 'react';

function Accordion({ publicKey, privateKey, onClose }) {
  return (
    <div className="container mt-5">
      <div id="accordion">
       
        <div className="card">
          <div className="card-header" id="publicKeyHeading">
            <h2 className="mb-0">
              <button
                className="btn btn-link"
                data-toggle="collapse"
                data-target="#publicKeyCollapse"
                aria-expanded="true"
                aria-controls="publicKeyCollapse"
              >
                Public Key
              </button>
            </h2>
          </div>

          <div
            id="publicKeyCollapse"
            className="collapse show"
            aria-labelledby="publicKeyHeading"
            data-parent="#accordion"
          >
            <div className="card-body">
              {publicKey}
            </div>
          </div>
        </div>

   
        <div className="card">
          <div className="card-header" id="privateKeyHeading">
            <h2 className="mb-0">
              <button
                className="btn btn-link"
                data-toggle="collapse"
                data-target="#privateKeyCollapse"
                aria-expanded="false"
                aria-controls="privateKeyCollapse"
              >
                Private Key
              </button>
             
            </h2>
          </div>

          <div
            id="privateKeyCollapse"
            className="collapse"
            aria-labelledby="privateKeyHeading"
            data-parent="#accordion"
          >
            <div className="card-body">
              {privateKey}
            </div>
          </div>
          <button className="btn btn-danger" onClick={onClose}>
                Close
              </button>
        </div>
        
      </div>
    </div>
  );
}

export default Accordion;
