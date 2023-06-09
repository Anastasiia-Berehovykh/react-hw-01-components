import PropTypes from 'prop-types';
import s from './Statistics.module.css';
const randomColor = getRandomHexColor();

const Statistics = ({ title, stats }) => (
  <section className={s.statistics}>
    {title && <h2 className={s.title}>{title}</h2>}
    
    <ul className={s.statsList}>
      {stats.map(item => (
        <li className={s.item} key={item.id} style={{
          backgroundColor: randomColor,
        }}>
          <span className={s.label}>{item.label} </span>
          <span className={s.percentage}>{item.percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  )
}


export default Statistics;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}






// import PropTypes from 'prop-types';
//  import { Statitems } from './Statitems';
// import css from './Statistics.module.css';


// export const Statistics = ({ stats, title }) => {
//     return ( 
      
//       <section className={css.statistics}>   
     
//         <h2 className={css.title}>{title}</h2>    
//       <ul className={css.statsList}>

//     {stats.map(({ id, label, percentage }) => (
//       <Statitems 
//       key={id}
//       label={label}
//       percentage={percentage}
//       />
//         ))}
//     </ul>
//     </section>
//  );
// }

// Statistics.propTypes = {
//   title:PropTypes.string.isRequired,
//   stats: PropTypes.arrayOf(PropTypes.exact({
//   id: PropTypes.string.isRequired,
//   label: PropTypes.string.isRequired,
//   percentage: PropTypes.number.isRequired,
//   }),
//   ),
// };