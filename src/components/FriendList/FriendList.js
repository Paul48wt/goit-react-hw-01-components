import PropTypes from 'prop-types';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import { FriendListI } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <ul>
      {friends.map(item => (
        <FriendListI key={item.id}>
          <FriendListItem friend={item} />
        </FriendListI>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
