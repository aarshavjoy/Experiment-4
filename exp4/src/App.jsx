import React, { useState } from 'react';
import MainContainer from './components/MainContainer';
import TransactionReceipt from './components/TransactionReceipt'
import SendTransaction from './components/Send';
import TransactionConfirmation from './components/SendReview';
import ReceiveEtherComponent from './components/Recieve';
import DashboardTwo from './components/DashboardTwo';
import  "./App.css"

function App() {
  // const [showSendTransaction, setShowSendTransaction] = useState(false);
  // const [showTransactionConfirmation, setShowTransactionConfirmation] = useState(false);
  // const [showTransactionReceipt, setShowTransactionReceipt] = useState(false);
  // const [transactionDetails, setTransactionDetails] = useState(null);
  // const [transactionHash, setTransactionHash] = useState('');

  // const openSendTransaction = () => {
  //   setShowSendTransaction(true);
  // };

  // const closeSendTransaction = () => {
  //   setShowSendTransaction(false);
  // };

  // const openTransactionConfirmation = (details) => {
  //   setTransactionDetails(details);
  //   setShowTransactionConfirmation(true);
  // };

  // const closeTransactionConfirmation = () => {
  //   setShowTransactionConfirmation(false);
  // };

  // const openTransactionReceipt = (hash) => {
  //   setTransactionHash(hash);
  //   setShowTransactionReceipt(true);
  // };

  // const closeTransactionReceipt = () => {
  //   setShowTransactionReceipt(false);
  // };

  return (
//     <div>
//       <h1>Ethereum Wallet</h1>

//       <button onClick={openSendTransaction}>Send Ethereum</button>

//       {showSendTransaction && (
//         <SendTransaction onClose={closeSendTransaction} onSend={openTransactionConfirmation} />
//       )}

//       {showTransactionConfirmation && (
//         <TransactionConfirmation
//           transactionDetails={transactionDetails}
//           onConfirm={() => {
            
//             const transactionHash = '0x12345...';
//             openTransactionReceipt(transactionHash);
//           }}
//           onCancel={closeTransactionConfirmation}
//         />
//       )}

//       {showTransactionReceipt && (
//         <TransactionReceipt transactionHash={transactionHash} onClose={closeTransactionReceipt} />
//       )}
//  </div>
<div>
  <MainContainer/>
</div>
  );
}

export default App;
