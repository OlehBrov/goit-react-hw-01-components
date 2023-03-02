export const StatList = (props) => {
console.log('STATLIST', props)
  return (
    <li className="item">
      <span className="label">{props.label}</span>
      <span className="percentage">{props.percentage}</span>
    </li>
  );
};
