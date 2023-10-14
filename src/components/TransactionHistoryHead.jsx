import css from './TransactionHistoryHead.module.css';

export const TransactionHistoryHead = head => (
  <thead className={css.head}>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
);
