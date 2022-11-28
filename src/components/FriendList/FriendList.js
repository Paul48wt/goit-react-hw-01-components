import PropTypes from 'prop-types';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <ul>
      {friends.map(item => (
        <li key={item.id}>
          <FriendListItem friend={item} />
        </li>
      ))}
    </ul>
  );
};
