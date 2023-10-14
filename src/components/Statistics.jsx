import PropTypes from 'prop-types';
import css from './Statistics.module.css';
export const Statistics = ({ stats, title }) => (
  <section className={css.statistics}>
    {title && <h2 className={css.title}>Upload stats</h2>}
    <ul className={css['stat-list']} style={{ backgroundColor: 'grey' }}>
      {stats.map(data => (
        <li key={data.id} className={css.item}>
          <span className={css.label}>{data.label}</span>
          <span className={css.percentage}>{data.percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};
