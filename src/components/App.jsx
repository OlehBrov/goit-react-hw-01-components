import user from './user.json'
import friends from "./FriendsList/friends.json";
import data from './statistics/data';
import transactions from "./Transactions/transactions.json";


import { Profile } from './userCard/userCard';
import { Statistics } from './statistics/statistic';
import { FriendList } from './FriendsList/FriendList';
import { TransactionsTable } from './Transactions/TransactionsTable';

export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
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

    </div>
  );
};
