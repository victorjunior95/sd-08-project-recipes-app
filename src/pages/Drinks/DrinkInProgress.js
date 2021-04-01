import React from 'react';
import PropTypes from 'prop-types';
import InProgressCard from '../../components/Card/InProgressCard';

function DrinkInProgress({ location: { state } }) {
  const {
    drinkOrFood, id,
    strCategory, strDrink, strDrinkThumb, ingredientsAndMeasuresList,
    strInstructions, strAlcoholic } = state;
  return (
    <div>
      {console.log('drinkINProgress', state)}
      <InProgressCard
        drinkOrFood={ drinkOrFood }
        id={ id }
        category={ strCategory }
        title={ strDrink }
        img={ strDrinkThumb }
        ingredients={ ingredientsAndMeasuresList }
        alcohol={ strAlcoholic }
        instructions={ strInstructions }
      />
    </div>
  );
}

DrinkInProgress.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
    state: PropTypes.shape({
      drinkOrFood: PropTypes.string,
      id: PropTypes.string,
      strCategory: PropTypes.string,
      strAlcoholic: PropTypes.string,
      strDrink: PropTypes.string,
      strDrinkThumb: PropTypes.string,
      ingredientsAndMeasuresList: PropTypes.arrayOf(PropTypes.string),
      strInstructions: PropTypes.string,
    }),
    search: PropTypes.string,
    hash: PropTypes.string,
    key: PropTypes.string,
  }).isRequired,
};

export default DrinkInProgress;
