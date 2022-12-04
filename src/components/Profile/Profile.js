import PropTypes from 'prop-types';
import {
  StatsList,
  StatsItem,
  ProfileStyle,
  Description,
  Image,
  Name,
  Tag,
} from './Profile.styled';

export const Profile = ({
  user: { username, tag, location, avatar, stats },
}) => {
  return (
    <ProfileStyle>
      <Description>
        <Image src={avatar} alt="User avatar" />

        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Tag>{location}</Tag>
      </Description>

      <StatsList>
        <StatsItem>
          <span className="label">Followers</span>
          <span className="quantity">{stats.followers}</span>
        </StatsItem>
        <StatsItem>
          <span className="label">Views</span>
          <span className="quantity">{stats.views}</span>
        </StatsItem>
        <StatsItem>
          <span className="label">Likes</span>
          <span className="quantity">{stats.likes}</span>
        </StatsItem>
      </StatsList>
    </ProfileStyle>
  );
};

Profile.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
  }).isRequired,
};
