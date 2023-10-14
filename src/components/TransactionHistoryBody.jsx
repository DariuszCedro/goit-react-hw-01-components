import css from './TransactionHistoryBody.module.css';

export const TransactionHistoryBody = ({ item }) => (
  <tbody className={css.row}>
    <tr>
      <td>{item.type}</td>
      <td>{item.amount}</td>
      <td>{item.currency}</td>
    </tr>
  </tbody>
);
