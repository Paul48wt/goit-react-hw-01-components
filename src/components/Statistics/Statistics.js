import PropTypes from 'prop-types';
import { Label, Section, StatItem, StatList, Title } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Section>
      {title && <Title>{title} </Title>}

      <StatList>
        {stats.map(item => (
          <StatItem key={item.id}>
            <Label>{item.label}</Label>
            <span>{item.percentage}</span>
          </StatItem>
        ))}
      </StatList>
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};
