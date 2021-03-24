import React, { useContext } from 'react';
import FoodContext from '../../context/comidaContext/FoodContext';
import shareIcon from '../../images/shareIcon.svg';
import blackHeartIcon from '../../images/blackHeartIcon.svg';

function CardFoodDetails() {
  const {
    values: {
      detailFoods,
    },
  } = useContext(FoodContext);

  const LAST_INGREDIENT = 20;
  const ingredientIndex = [];
  for (let index = 0; index < LAST_INGREDIENT; index += 1) {
    ingredientIndex.push(index);
  }

  return (
    <section>
      {detailFoods.map((item) => (
        <div key={ item.strMeal }>
          <img
            src={ item.strMealThumb }
            alt={ item.strMeal }
            data-testid="recipe-photo"
          />
          <h3 data-testid="recipe-title">{item.strMeal}</h3>
          <button type="button" data-testid="share-btn">
            <img src={ shareIcon } alt="share" />
          </button>
          <button type="button" data-testid="favorite-btn">
            <img src={ blackHeartIcon } alt="share" />
          </button>
          <p data-testid="recipe-category">{item.strCategory}</p>
          <ul>
            {ingredientIndex.map((index) => (
              <li key={ index } data-testid={ `${index}-ingredient-name-and-measure` }>
                {`${item[`strMeasure${index + 1}`]}${item[`strIngredient${index + 1}`]}`}
              </li>
            ))}
          </ul>
          <p data-testid="instructions">{item.strInstructions}</p>
          <p data-testid="video">{item.strYoutube}</p>
        </div>
      ))}
    </section>
  );
}

export default CardFoodDetails;
