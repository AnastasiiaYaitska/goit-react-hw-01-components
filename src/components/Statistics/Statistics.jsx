import PropTypes from 'prop-types';
import { Section, StatisticsTitle, StatList, StatsItem, StatLabel, Percentage} from './Statistics.styled';


export const Statistics = ({title,stats }) => { 
       
    return <Section >
 {title && <StatisticsTitle>{title}</StatisticsTitle>} 

  <StatList>
{stats.map(({id,label, percentage})=>
<StatsItem  key={id}>
      <StatLabel className="label">{label}</StatLabel>
      <Percentage >{percentage}%</Percentage>
    </StatsItem>
)}
    
  </StatList>
</Section>

};

Statistics.propTypes = {
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage:PropTypes.number.isRequired,

    })).isRequired,
};
