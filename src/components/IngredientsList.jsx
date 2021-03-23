import React from 'react';
import PropTypes from 'prop-types';

function IngredientsList({ ingredients, inProgress }) {
  if (inProgress) {
    return (
      <div>
        { ingredients
          .map((ingsAndMsr, index) => (
            <label
              htmlFor={ [ingsAndMsr[0]] }
              key={ `ing-${index}` }
              data-testid={ `${index}-ingredient-step` }
            >
              <input type="checkbox" id={ [ingsAndMsr[0]] } value={ [ingsAndMsr[0]] } />
              { `${[ingsAndMsr[0]]} - ${[ingsAndMsr[1]]}` }
            </label>))}
      </div>
    );
  }

  return (
    <ul>
      { ingredients
        .map((ingsAndMsr, index) => (
          <li
            key={ `ing-${index}` }
            data-testid={ `${index}-ingredient-name-and-measure` }
          >
            { `${[ingsAndMsr[0]]} - ${[ingsAndMsr[1]]}` }
          </li>))}
    </ul>
  );
}

IngredientsList.defaultProps = {
  inProgress: false,
};

IngredientsList.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.array).isRequired,
  inProgress: PropTypes.bool,
};

export default IngredientsList;
