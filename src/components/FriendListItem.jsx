import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';
export const FriendListItem = ({ friend }) => (
  <li className={css.item}>
    {friend.isOnline ? (
      <span className={css.status}></span>
    ) : (
      <span className={css['is-offline']}></span>
    )}

    <img
      className={css.avatar}
      src={friend.avatar}
      alt="User avatar"
      width="48"
    />
    <p className={css.name}>{friend.name}</p>
  </li>
);
FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
