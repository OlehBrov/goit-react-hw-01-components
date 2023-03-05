
import { TransactionItem } from "./TransactionItem";
import {StyledTransactionTable} from './Transactions.styled'
export const TransactionsTable = (props) => {
  console.log('Table', props)
  return (
    <StyledTransactionTable className="transaction-history">
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
    </StyledTransactionTable>
  );
};
