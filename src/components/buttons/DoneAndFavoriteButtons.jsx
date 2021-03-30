import React from 'react';
import PropTypes from 'prop-types';
import { buttonsDoneAndFavoriteRecipes } from '../../constants/index';

const DoneAndFavoriteButtons = ({ handleFilters }) => (
  <div>
    {buttonsDoneAndFavoriteRecipes.map((button) => (
      <button
        onClick={ (event) => handleFilters(event) }
        key={ button.name }
        value={ button.type }
        type="button"
        data-testid={ button.testId }
      >
        { button.name }
      </button>
    ))}
  </div>
);

DoneAndFavoriteButtons.propTypes = {
  handleFilters: PropTypes.func.isRequired,
};

export default DoneAndFavoriteButtons;
