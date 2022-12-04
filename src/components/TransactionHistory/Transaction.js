import PropTypes from 'prop-types';
import { Td } from './TransactionHistory.styled';

export const Transaction = ({
  transaction: { id, type, amount, currency },
}) => {
  return (
    <>
      <Td>{type}</Td>
      <Td>{amount}</Td>
      <Td>{currency}</Td>
    </>
  );
};

Transaction.propTypes = {
  transaction: PropTypes.shape({
    type: PropTypes.string,
    amount: PropTypes.string,
    currency: PropTypes.string,
  }).isRequired,
};
