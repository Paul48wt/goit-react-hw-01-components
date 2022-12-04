import styled from 'styled-components';

export const Table = styled.table`
  border: 1px solid #eeeeee;
  width: 80%;
`;
export const TableThead = styled.thead`
  display: flex;
  width: 100%;
  background: #00a6ff;
  padding: 10px;
  color: #fff;
`;
export const TrHead = styled.tr`
  display: flex;
  flex-grow: 1;
  justify-content: center;
`;
export const Th = styled.th`
  display: flex;
  flex-grow: 1;
  justify-content: center;
`;
export const Tr = styled.tr`
  display: flex;
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  border: 1px solid #fff;
  &:nth-of-type(odd) {
    background: #eee;
  }
`;
export const Td = styled.td`
  display: flex;
  flex-grow: 1;
  justify-content: center;
`;
