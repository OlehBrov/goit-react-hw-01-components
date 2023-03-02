export const StatList = (props) => {
  return (
    <li className="item">
      <span className="label">{props.label}</span>
      <span className="percentage">{props.percentage}</span>
    </li>
  );
};
