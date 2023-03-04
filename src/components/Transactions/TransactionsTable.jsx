
import { TransactionItem } from "./TransactionItem";

export const TransactionsTable = (props) => {
  console.log('Table', props)
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        <TransactionItem props={props} />
      </tbody>
    </table>
  );
};
