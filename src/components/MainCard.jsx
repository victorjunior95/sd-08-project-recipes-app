import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

function MainCard(props) {
  const { data, index, id } = props;
  const { strMeal, strMealThumb, strDrink, strDrinkThumb } = data;
  const location = useLocation();
  const path = `${location.pathname}/${id}`;
  return (
    <Link to={ path }>
      <div
        src="strMealThumb"
        data-testid={ `${index}-recipe-card` }
        className="MainCard"
      >
        <img
          data-testid={ `${index}-card-img` }
          className="img"
          src={ strMealThumb || strDrinkThumb }
          alt={ strMeal || strDrink }
        />
        <p data-testid={ `${index}-card-name` }>{strMeal || strDrink}</p>
      </div>
    </Link>
  );
}
MainCard.propTypes = {
  data: PropTypes.objectOf(PropTypes.string).isRequired,
  index: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};
export default MainCard;
