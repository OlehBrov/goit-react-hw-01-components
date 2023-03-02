import { StatList } from "./statList";
export const Statistics = props => {
  return (
    <section className="statistics">
      <h2 className="title">{props.title}</h2>

      <ul className="stat-list">
        {props.stats.map(listElement => (
          <StatList
            key={listElement.id}
            label={listElement.label}
            percentage={listElement.percentage}
          />
        ))}
      </ul>
    </section>
  );
};
