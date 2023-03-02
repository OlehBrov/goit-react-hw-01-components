import user from './user.json'
// import { UserCard } from './userCard/userCard';
import { Profile } from './userCard/userCard';
import { Statistics } from './statistics/statistic';
import data from './statistics/data'
import { StatList } from './statistics/statList';
// export const user = JSON.parse(JSON.stringify(userData))
// const stats = staistics;
// console.log('staistics',  stats)
export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
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

    </div>
  );
};
