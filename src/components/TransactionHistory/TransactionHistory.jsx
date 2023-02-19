import PropTypes from 'prop-types';
import { TransactionTable } from './TransactionStyles.styled';

export const TransactionHistory = ({transactions}) => {
    return <TransactionTable>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
            {transactions.map(({id,type, amount, currency}) =>
    <tr key={id}>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
    </tr>
        )
    }
  </tbody>
</TransactionTable>
};

TransactionHistory.propTypes = {
    transactions: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount:PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    }),).isRequired,
};