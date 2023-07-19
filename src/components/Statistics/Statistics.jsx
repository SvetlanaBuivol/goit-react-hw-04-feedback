import React from 'react';
import PropTypes from 'prop-types';
import { StyledStatistics } from './Statistics.styled';

const Statistics = ({
  good,
  neutral,
  bad,
  totalFeedback,
  positivePercentage,
}) => (
  <StyledStatistics>
    <li>
      <p>Good: {good}</p>
    </li>
    <li>
      <p>Neutral: {neutral}</p>
    </li>
    <li>
      <p>Bad: {bad}</p>
    </li>
    <li>
      <p>Total: {totalFeedback}</p>
    </li>
    <li>
      <p>Positive feedback: {positivePercentage}%</p>
    </li>
  </StyledStatistics>
);

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  totalFeedback: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
