import React, { useContext } from 'react';
import FoodContext from '../context/comidaContext/FoodContext';
import '../index.css';

function CardFood() {
  const {
    values: {
      foods,
    },
  } = useContext(FoodContext);

  const maxCards = 12;

  if (foods === undefined) return '';

  return (
    <section className="food-card-container">
      {foods.map(({ strMeal, strMealThumb }, index) => {
        if (index >= maxCards) return '';
        return (
          <div
            key={ strMeal }
            data-testid={ `${index}-recipe-card` }
            className="food-card"
          >
            <img
              src={ strMealThumb }
              alt={ strMeal }
              data-testid={ `${index}-card-img` }
            />
            <p data-testid={ `${index}-card-name` }>{strMeal}</p>
          </div>
        );
      })}
    </section>
  );
}

export default CardFood;
