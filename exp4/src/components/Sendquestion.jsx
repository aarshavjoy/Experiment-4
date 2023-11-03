
import React from 'react';

const SendCard = ({onClick}) => {
    const questionandanswer = [
        { question: 'How do you install and set up MetaMask?', answer: (
            <div>
                1)click on the "Send" button on the MetaMask interface.<br/>
                2)Enter the recipient's wallet address in the "To" field.<br/>
                3)Specify the amount you want to send, <br/> 
                4) set the gas fee. <br/>
                5)Click "Next" to review the transaction details.<br/>
                6)Click "Confirm" to initiate the transaction.<br/>
                7)Once the transaction is successfully sent, you'll receive a transaction hash as confirmation.
                </div>
        )}
    ];
    
    return (
        <div className="card sendcard">
            <div className="card-body">
                <p className="card-text">{questionandanswer[0].question}</p>
                <p className="card-text">{questionandanswer[0].answer}</p>
                <button className="btn  btntrans btn-primary" onClick={onClick}>Start</button>
            </div>
        </div>
    );
};

export default SendCard;