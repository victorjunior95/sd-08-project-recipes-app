import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function RecipeCard({ id, meal }) {
  const stylecss = {
    display: 'flex',
    justifyContent: 'center',
    flexFlow: 'column',
    alignItems: 'center',
  };
  return (
    <Link to={ meal.idMeal ? `/comidas/${meal.idMeal}` : `/bebidas/${meal.idDrink}` }>
      <div
        style={ stylecss }
        className="recipe-card"
        data-testid={ `${id}-recipe-card` }
      >
        <img
          style={ { width: '80%' } }
          alt="recipe"
          src={ meal.strMealThumb ? meal.strMealThumb : meal.strDrinkThumb }
          data-testid={ `${id}-card-img` }
        />
        <p data-testid={ `${id}-card-name` }>
          { meal.strMeal ? meal.strMeal : meal.strDrink }
        </p>
      </div>
    </Link>
  );
}

RecipeCard.propTypes = {
  id: PropTypes.number.isRequired,
  meal: PropTypes.shape({
    strMealThumb: PropTypes.string,
    strDrinkThumb: PropTypes.string,
    strMeal: PropTypes.string,
    strDrink: PropTypes.string,
    idMeal: PropTypes.string,
    idDrink: PropTypes.string,
  }).isRequired,
};
