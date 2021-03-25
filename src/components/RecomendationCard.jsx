import React from 'react';
import PropTypes from 'prop-types';
import { useHistory, useLocation } from 'react-router-dom';

function RecomendationCard(props) {
  const { index, food } = props;
  const history = useHistory();
  const { pathname } = useLocation();
  const PATHSIZE = 8;
  const shortPath = pathname.slice(0, PATHSIZE);

  return (
    <div className="carousel">
      <button
        type="button"
        onClick={ () => history.push(`${shortPath}/${food.idDrink || food.idMeal}`) }
        data-testid={ `${index}-recipe-card` }
      >
        <img
          data-testid={ `${index}-card-img` }
          src={ food.strDrinkThumb || food.strMealThumb }
          alt="Food"
          width="100%"
        />
      </button>
      <p
        data-testid={ `${index}-recomendation-title` }
      >
        { food.strDrink || food.strMeal }

      </p>
    </div>
  );
}
RecomendationCard.propTypes = {
  index: PropTypes.number.isRequired,
  food: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default RecomendationCard;
