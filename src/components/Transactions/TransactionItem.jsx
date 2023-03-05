import { StyledTransaction } from "./Transactions.styled";

export const TransactionItem = ({ props }) => {
  console.log('Props', props.transactions);
  return props.transactions.map(el => {
    return (
      <StyledTransaction key={el.id} {...el}>
        <td>{el.type}</td>
        <td>{el.amount}</td>
        <td>{el.currency}</td>
      </StyledTransaction>
    );
  });
};
