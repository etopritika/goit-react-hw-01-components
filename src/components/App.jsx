import Profile from './Profile';
import Statistics from './Statistics';
import FriendList from './FriendList';
import TransactionHistory from './TransactionHistory';
import user from '../data/user.json';
import statistics from '../data/statistics.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';
import css from '../css/container.module.css';

export const App = () => {
  return (
    <div className={css.container}>
      <div className={css.card}>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </div>
      <div className={css.card}>
        <Statistics title="Upload stats" stats={statistics} />
      </div>
      <div className={css.card}>
        <FriendList friends={friends} />
      </div>
      <div className={css.card}>
        <TransactionHistory
          type="type"
          amount="amount"
          curency="curency"
          items={transactions}
        />
      </div>
    </div>
  );
};
