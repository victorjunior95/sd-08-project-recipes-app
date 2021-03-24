import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function MainIngredientCard({ ingredientsData, index, id }) {
  const { strIngredient } = ingredientsData;
  return (
    <div>
      <div
        src={ `https://www.themealdb.com/images/ingredients/${strIngredient}-Small.png
        ` }
        data-testid={ `${index}-ingredient-card` }
        className="MainCard"
      >
        <Link to={ `/comidas/${id}` }>
          <img
            data-testid={ `${index}-card-img` }
            className="img"
            src={ `https://www.themealdb.com/images/ingredients/${strIngredient}-Small.png
        ` }
            alt={ strIngredient }
          />
        </Link>
        <Link to={ `/comidas/${id}` }>
          <p
            data-testid={ `${index}-card-name` }
          >
            {strIngredient}
          </p>
        </Link>
      </div>
    </div>
  );
}

MainIngredientCard.propTypes = {
  ingredientsData: PropTypes.objectOf(PropTypes.string).isRequired,
  index: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};

export default MainIngredientCard;
