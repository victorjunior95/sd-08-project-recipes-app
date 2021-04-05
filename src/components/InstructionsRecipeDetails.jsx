import React from 'react';
import PropTypes from 'prop-types';

const InstructionsRecipeDetails = ({ instruction }) => (
  <section className="instructions-recipe-details">
    <h3>Instruções</h3>
    <p data-testid="instructions">
      {instruction.split('.').map((inst, index) => (
        <p key={ index }>{`${inst}.`}</p>
      ))}
    </p>
  </section>
);

InstructionsRecipeDetails.propTypes = {
  instruction: PropTypes.string.isRequired,
};

export default InstructionsRecipeDetails;
