import React from 'react';

function DrinksCard(props) {
  const { index, drink } = props;
  return (
    <div data-testid={ `${index}-recipe-card` }>
      <p data-testid={ `${index}-card-name` }>{drink.strDrink}</p>
      <img src={ drink.strDrinkThumb } data-testid={ `${index}-card-img` } alt="teste" />
    </div>
  );
}

export default DrinksCard;
