import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function MainDrinksCard(props) {
  const { dataDrinks, index, id } = props;
  const { strDrink, strDrinkThumb } = dataDrinks;
  return (
    <div
      data-testid={ `${index}-recipe-card` }
      className="MainCard"
    >
      <Link to={ `/bebidas/${id}` }>
        <img
          data-testid={ `${index}-card-img` }
          className="img"
          src={ strDrinkThumb }
          alt={ strDrink }
        />
      </Link>
      <Link to={ `/bebidas/${id}` }>
        <p data-testid={ `${index}-card-name` }>{strDrink}</p>
      </Link>
    </div>
  );
}

MainDrinksCard.propTypes = {
  dataDrinks: PropTypes.objectOf(PropTypes.string).isRequired,
  index: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,

};

export default MainDrinksCard;
