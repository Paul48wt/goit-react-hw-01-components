import styled from 'styled-components';

export const ProfileStyle = styled.div`
  display: flex;

  flex-direction: column;
  align-items: center;

  width: 250px;
  border-radius: 7px;
  box-shadow: 7px 7px 18px 0px rgba(0, 0, 0, 0.1);
  background: #e9e9e9;
`;

export const Name = styled.p`
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.18;
  text-align: center;
  letter-spacing: 0.03em;
  color: #212121;
  margin-bottom: 8px;
`;

export const Tag = styled.p`
  margin-bottom: 10px;
`;

export const StatsList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  gap: 10px;
  background: #e8e8e8;
  border-top: 1px solid #cccccc;
  width: 100%;
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
`;
export const StatsItem = styled.li`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 10px;
  padding-bottom: 10px;
  &:not(:last-child) {
    border-right: 1px solid #cccccc;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;
export const Image = styled.img`
  width: 7rem;
  border-radius: 50%;
  margin-bottom: 20px;
`;
