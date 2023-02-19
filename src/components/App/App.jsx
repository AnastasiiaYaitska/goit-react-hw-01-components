import PropTypes from 'prop-types';
import { Container } from './App.styled';

import { Profile } from 'components/Profile/Profile';
import user from 'user.json';

import { Statistics } from 'components/Statistics/Statistics';
import data from 'data.json';

import { FriendList } from 'components/FriendList/FriendList';
import friends from 'friends.json';

import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';
import transactions from 'transactions.json';



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
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </Container>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,

  }).isRequired,
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.object).isRequired,
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object).isRequired,
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.object,).isRequired,
};

