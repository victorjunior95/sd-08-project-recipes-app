import React, { useContext } from 'react';
import FoodContext from '../../context/comidaContext/FoodContext';
import shareIcon from '../../images/shareIcon.svg';
import blackHeartIcon from '../../images/blackHeartIcon.svg';

function CardFood() {
  const {
    values: {
      detailFoods,
    },
  } = useContext(FoodContext);

  return (
    <section>
      {detailFoods.map(({ strMeal, strMealThumb, strCategory }) => (
        <div key={ strMeal }>
          <img
            src={ strMealThumb }
            alt={ strMeal }
            data-testid="recipe-photo"
          />
          <p data-testid="recipe-title">{strMeal}</p>
          <button type="button" data-testid="share-btn">
            <img src={ shareIcon } alt="share" />
          </button>
          <button type="button" data-testid="favorite-btn">
            <img src={ blackHeartIcon } alt="share" />
          </button>
          <p data-testid="recipe-category">{strCategory}</p>
          <ul>
            {}
          </ul>
        </div>
      ))}
    </section>
  );
}

export default CardFood;
