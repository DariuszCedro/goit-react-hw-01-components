import PropTypes from 'prop-types';
import { TransactionHistoryHead } from './TransactionHistoryHead';
import { TransactionHistoryBody } from './TransactionHistoryBody';
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => (
  <>
    <table className={css['transaction-history']}>
      <TransactionHistoryHead />

      {items.map(item => (
        <TransactionHistoryBody item={item} key={item.id} />
      ))}
    </table>
  </>
);

TransactionHistory.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  amount: PropTypes.number,
  currency: PropTypes.string,
};
