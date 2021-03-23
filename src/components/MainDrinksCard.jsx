import React from 'react';

function MainDrinksCard(props) {
  const { dataDrinks, index } = props;
  const { strDrink, strDrinkThumb } = dataDrinks;
  return (
    <div
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
  );
}

export default MainDrinksCard;
