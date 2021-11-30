import React from 'react';

import { Container } from './components/container/container';
import user from './components/social-profile/user.json';

import data from './components/statistics/data.json';
import { Usercard } from './components/social-profile/social-profile';
import { Statistics } from './components/statistics/statistics';

import friends from './components/friend-list/friends.json';
import { FriendList } from './components/friend-list/friendsCard';

import transactions from './components/transaction-history/transactions.json';
import { TransactionHistory } from './components/transaction-history/transaction-history';

export default function App() {
  return (
    <Container>
      <Usercard
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />

      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />

      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  );
}
