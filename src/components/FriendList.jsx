import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
import css from './FriendList.module.css';

export const FriendList = ({ friends }) => (
  <section className={css.wrapper}>
    <ul className={css['friend-list']}>
      {friends.map(friend => (
        <FriendListItem friend={friend} key={friend.id} />
      ))}
    </ul>
  </section>
);
FriendList.propTypes = {
  friends: PropTypes.array,
};
