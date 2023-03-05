import { StyledStatItem } from "./statList.styled";


export const StatItem = (props) => {
  console.log('BCG', props.background)
  return (
    <StyledStatItem className="item" {...props}>
      <span className="label">{props.label}</span>
      <span className="percentage">{props.percentage}%</span>
    </StyledStatItem>
  );
};
