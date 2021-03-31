import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

function MainDrinksCard(props) {
  const { dataDrinks, index, id } = props;
  const { strDrink, strDrinkThumb } = dataDrinks;
  const location = useLocation();
  return (
    <Link to={ `${location.pathname}/${id}` }>
      <div
        src="strDrinkThumb"
        data-testid={ `${index}-recipe-card` }
        className="MainCard"
      >
        <img
          data-testid={ `${index}-card-img` }
          className="img"
          src={ strDrinkThumb }
          alt={ strDrink }
        />
        <p data-testid={ `${index}-card-name` }>{strDrink}</p>
      </div>
    </Link>
  );
}

MainDrinksCard.propTypes = {
  dataDrinks: PropTypes.objectOf(PropTypes.string).isRequired,
  index: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,

};

export default MainDrinksCard;
