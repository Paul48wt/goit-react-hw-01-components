import styled from 'styled-components';

export const FriendListI = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #1c6ea4;
  border-radius: 8px;
  padding: 10px;
  width: 300px;
  /* background: ${p => {
    return p.children.props.friend.isOnline ? 'green' : 'yellow';
  }}; */
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;
