import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

function RecipesCard(props) {
  const history = useHistory();
  const { index, meal, id } = props;
  console.log(id);
  return (
    <div data-testid={ `${index}-recipe-card` }>
      <input
        className="card-image"
        type="image"
        data-testid={ `${index}-card-img` }
        src={ meal.strMealThumb }
        alt="comida"
        onClick={ () => history.push(`/comidas/${id}`) }
      />
      <p data-testid={ `${index}-card-name` }>{meal.strMeal}</p>
    </div>
  );
}

RecipesCard.propTypes = {
  index: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  meal: PropTypes.shape({
    strMeal: PropTypes.string.isRequired,
    strMealThumb: PropTypes.string.isRequired,
  }).isRequired,
};

export default RecipesCard;
