import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import FoodContext from '../../context/comidaContext/FoodContext';
import '../../index.css';

function CardFood() {
  const {
    values: {
      foods,
      filteredMeals,
    },
  } = useContext(FoodContext);

  const maxCards = 12;
  const data = (filteredMeals.length === 0) ? foods : filteredMeals;

  if (foods === undefined) return '';

  return (
    <section className="recipe-card-container">
      {data.map(({ strMeal, strMealThumb, idMeal }, index) => {
        if (index >= maxCards) return '';
        return (
          <Link
            src={ strMealThumb }
            to={ `/comidas/${idMeal}` }
            key={ strMeal }
            data-testid={ `${index}-recipe-card` }
            className="recipe-card"
          >
            <img
              src={ strMealThumb }
              alt={ strMeal }
              data-testid={ `${index}-card-img` }
            />
            <p data-testid={ `${index}-card-name` }>{strMeal}</p>
          </Link>
        );
      })}
    </section>
  );
}

export default CardFood;
