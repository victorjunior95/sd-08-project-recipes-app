import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Cards from '../Cards';

// import { Container } from './styles';
function CardsArea({ type }) {
  const { meals } = useSelector((state) => state.foods);
  const { drinks } = useSelector((state) => state.drinks);
  const TWELVE_CARDS = 12;
  if (type === 'foods') {
    return (
      <Container className="d-flex flex-column align-items-center m-0 p-0">
        { !meals ? <p> nada por aqui! </p>
        && alert('Sinto muito, não encontramos nenhuma receita para esses filtros.')
          : meals.map(
            ({ strMeal, strMealThumb }, index) => (
              index < TWELVE_CARDS && (
                <Cards
                  key={ strMeal }
                  name={ strMeal }
                  thumbSrc={ strMealThumb }
                  index={ index }
                />)),
          )}
      </Container>
    );
  }
  if (type === 'drinks') {
    return (
      <Container className="d-flex flex-column align-items-center m-0 p-0">
        { !drinks ? <p> nada por aqui! </p>
        && alert('Sinto muito, não encontramos nenhuma receita para esses filtros.')
          : drinks.map(
            ({ strDrink, strDrinkThumb }, index) => (
              index < TWELVE_CARDS && (
                <Cards
                  key={ strDrink }
                  name={ strDrink }
                  thumbSrc={ strDrinkThumb }
                  index={ index }
                />)),
          )}
      </Container>
    );
  }
}

export default CardsArea;

CardsArea.propTypes = {
  type: PropTypes.string.isRequired,
};
