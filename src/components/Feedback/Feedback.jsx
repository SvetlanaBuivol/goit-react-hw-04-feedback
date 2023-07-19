import React from 'react';
import PropTypes from 'prop-types';
import { ButtonsFeedback, Button } from './Feedback.styled';

const Feedback = ({ options, onLeaveFeedback }) => (
  <ButtonsFeedback>
    {options.map(option => {
      return (
        <li key={option}>
          <Button
            option={option}
            active={option === 'good'}
            type="button"
            onClick={() => {
              console.log('on click btn')
              onLeaveFeedback(option)
            }}
          >
            {option}
          </Button>
        </li>
      );
    })}
  </ButtonsFeedback>
);

export default Feedback;

Feedback.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
