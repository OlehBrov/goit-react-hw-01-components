export const TransactionItem = ({props}) => {
  console.log('Props', props.transactions);
  return props.transactions.map(el => {
    return (
      <tr key={el.id}>
        <td>{el.type}</td>
        <td>{el.amount}</td>
        <td>{el.currency}</td>
      </tr>
    );
  });
};
