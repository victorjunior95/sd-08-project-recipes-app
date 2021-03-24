import React, { useContext } from 'react';
import FoodContext from '../../context/comidaContext/FoodContext';
import shareIcon from '../../images/shareIcon.svg';
import blackHeartIcon from '../../images/blackHeartIcon.svg';
import '../../index.css';

function CardFoodDetails() {
  const {
    values: {
      detailFoods,
      recomendations,
    },
  } = useContext(FoodContext);

  const LAST_INGREDIENT = 20;
  const ingredientIndex = [];
  for (let index = 0; index < LAST_INGREDIENT; index += 1) {
    ingredientIndex.push(index);
  }

  const LAST_CARD_CAROUSEL = 6;

  return (
    <section>
      {detailFoods.map((item) => (
        <div key={ item.strMeal } className="BBB">
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
            {ingredientIndex.map((index) => {
              const srt = `${item[`strMeasure${index + 1}`]}`;
              if (srt === 'null' || srt === '') return '';
              return (
                <li key={ index } data-testid={ `${index}-ingredient-name-and-measure` }>
                  {`${item[`strMeasure${index + 1}`]}`
                  + `${item[`strIngredient${index + 1}`]}`}
                </li>
              );
            })}
          </ul>
          <p data-testid="instructions">{item.strInstructions}</p>
          <p data-testid="video">{item.strYoutube}</p>
        </div>
      ))}
      <div className="carouselAAA">
        {recomendations.map((item, index) => {
          if (index >= LAST_CARD_CAROUSEL) return '';
          return (
            <div key={ item.strDrink } className="carouselAAA-item">
              {console.log(item.strDrinkThumb)}
              <img
                src={ item.strDrinkThumb }
                alt={ item.strDrink }
                data-testid={ `${index}-card-img` }
              />
              <p data-testid={ `${index}-card-name` }>{item.strDrink}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default CardFoodDetails;
