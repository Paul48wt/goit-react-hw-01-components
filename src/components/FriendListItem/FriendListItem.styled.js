import styled from 'styled-components';

export const Name = styled.p`
  font-weight: 700;
`;
export const Avatar = styled.img`
  margin-right: 10px;
`;
export const Status = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 20px;
  background: ${p => {
    console.log(p);
    return p.isOnline ? 'green' : 'yellow';
  }};
`;
