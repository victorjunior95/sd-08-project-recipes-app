import React, { useContext } from 'react';
import DrinkContext from '../context/bebidaContext/DrinkContext';

function CardDrink() {
  const {
    values: {
      drinks,
    },
  } = useContext(DrinkContext);

  const maxCards = 12;

  return (
    <section>
      {drinks.map(({ strDrink, strDrinkThumb }, index) => {
        if (index >= maxCards) return '';
        return (
          <div key={ strDrink }>
            <img src={ strDrinkThumb } alt={ strDrink } />
            <p>{strDrink}</p>
          </div>
        );
      })}
    </section>
  );
}

export default CardDrink;
