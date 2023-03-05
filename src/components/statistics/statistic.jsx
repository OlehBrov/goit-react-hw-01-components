import randomColor from "randomcolor";
import { StatisticSection, StyledStatList } from './statList.styled'
import { StatItem } from "./statList";

export const Statistics = props => {
  return (
    <StatisticSection className="statistics">
      <h2 className="title">{props.title}</h2>

      <StyledStatList className="stat-list">
        {props.stats.map(listElement => (
          <StatItem
            key={listElement.id}
            label={listElement.label}
            percentage={listElement.percentage}
            background={randomColor()}
          />
        ))}
      </StyledStatList>
    </StatisticSection>
  );
};
