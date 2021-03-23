import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function MainFoodsCard(props) {
  const { dataFoods, index, id } = props;
  const { strMeal, strMealThumb } = dataFoods;
  return (
    <div src="strMealThumb" data-testid={ `${index}-recipe-card` } className="MainCard">
      <Link to={ `/comidas/${id}` }>
        <img
          data-testid={ `${index}-card-img` }
          className="img"
          src={ strMealThumb }
          alt={ strMeal }
        />
      </Link>
      <Link to={ `/comidas/${id}` }>
        <p
          data-testid={ `${index}-card-name` }
        >
          {strMeal}
        </p>
      </Link>
    </div>
  );
}
MainFoodsCard.propTypes = {
  dataFoods: PropTypes.arrayOf(Object).isRequired,
  index: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};
export default MainFoodsCard;
