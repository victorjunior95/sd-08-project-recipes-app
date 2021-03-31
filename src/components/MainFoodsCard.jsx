import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

function MainFoodsCard(props) {
  const { dataFoods, index, id } = props;
  const { strMeal, strMealThumb } = dataFoods;
  const location = useLocation();
  return (
    <Link to={ `${location.pathname}/${id}` }>
      <div
        src="strMealThumb"
        data-testid={ `${index}-recipe-card` }
        className="MainCard"
      >
        <img
          data-testid={ `${index}-card-img` }
          className="img"
          src={ strMealThumb }
          alt={ strMeal }
        />
        <p data-testid={ `${index}-card-name` }>{strMeal}</p>
      </div>
    </Link>
  );
}
MainFoodsCard.propTypes = {
  dataFoods: PropTypes.objectOf(PropTypes.string).isRequired,
  index: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};
export default MainFoodsCard;
