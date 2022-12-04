import PropTypes from 'prop-types';
import { Transaction } from './Transaction';
import { Table, TableThead, Th, Tr, TrHead } from './TransactionHistory.styled';

export const TransactionHistory = ({ transactions }) => {
  return (
    <Table>
      <TableThead>
        <TrHead>
          <Th>Type</Th>
          <Th>Amount</Th>
          <Th>Currency</Th>
        </TrHead>
      </TableThead>

      <tbody>
        {transactions.map(item => (
          <Tr key={item.id}>
            <Transaction transaction={item} />
          </Tr>
        ))}
      </tbody>
    </Table>
  );
};

TransactionHistory.propTypes = { transactions: PropTypes.array.isRequired };
