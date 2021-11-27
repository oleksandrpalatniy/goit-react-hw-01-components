import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App'
import data from './components/statistics/data.json'
import { Usercard } from './components/social-profile/social-profile';
import { Statistics } from './components/statistics/statistics'

import friends from './components/friend-list/friends.json'
import {FriendList} from './components/friend-list/friendsCard'

import transactions from './components/transaction-history/transactions.json'
import {TransactionHistory} from './components/transaction-history/transaction-history'
//  ReactDOM.render(Usercard, document.querySelector('#root'))

ReactDOM.render(
   <React.StrictMode>
    <Usercard />
    
    <Statistics title="Upload stats" stats={data} />
    <Statistics stats={data} />

    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
   </React.StrictMode>,
  
  document.getElementById('root')
);

