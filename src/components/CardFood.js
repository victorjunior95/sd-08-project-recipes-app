import React, { useContext } from 'react';
import FoodContext from '../context/comidaContext/FoodContext';

function CardFood() {
  const {
    values: {
      foods,
    },
  } = useContext(FoodContext);

  const maxCards = 12;

  return (
    <section>
      {foods.map(({ strMeal, strMealThumb }, index) => {
        if (index >= maxCards) return '';
        return (
          <div key={ strMeal }>
            <img src={ strMealThumb } alt={ strMeal } />
            <p>{strMeal}</p>
          </div>
        );
      })}
    </section>
  );
}

export default CardFood;
