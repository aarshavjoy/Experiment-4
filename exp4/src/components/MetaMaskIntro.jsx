import React from 'react';

const MetaMaskIntroComponent = ({ showPasswordComponent}) => {
  return (
    <div className="card introcard">
      <div className="card-body">
        <h5 className="card-title">New to MetaMask?</h5>
        <i className="fa-solid fa-plus fa-xl" style={{ fontSize: '10rem', marginLeft: '80px', marginTop: '80px' }}></i><br/>
        <p className='setup'>yep,let's get set up!</p>
       <p>This will create a new wallet and seed pharse</p>
       <button className="btn  btnintro btn-primary" onClick={showPasswordComponent}>Create</button>
       </div>

       
       
      <div className="card-body">
        
      </div>
    </div>
  );
};

export default MetaMaskIntroComponent;
