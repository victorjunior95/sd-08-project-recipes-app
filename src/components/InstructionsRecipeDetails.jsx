import React from 'react';
import PropTypes from 'prop-types';

const InstructionsRecipeDetails = ({ instruction }) => (
  <section>
    <h3>Instruções</h3>
    <p data-testid="instructions">{instruction}</p>
  </section>
);

InstructionsRecipeDetails.propTypes = {
  instruction: PropTypes.string.isRequired,
};

export default InstructionsRecipeDetails;
