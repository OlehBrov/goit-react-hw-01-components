import user from './user.json'
import friends from "./FriendsList/friends.json";
import data from './statistics/data';
import transactions from "./Transactions/transactions.json";

import { Profile } from './userCard/userCard';
import { Statistics } from './statistics/statistic';
import { FriendList } from './FriendsList/FriendList';
import { TransactionsTable } from './Transactions/TransactionsTable';
import { Container } from './App.styled';

export const App = () => {
  return (
    <Container>
     <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>
      <Statistics title="Upload stats" stats={data} />

      <FriendList data={friends} />

      <TransactionsTable transactions={transactions} />

    </Container>
  );
};
