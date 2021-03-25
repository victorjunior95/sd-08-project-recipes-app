import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import shareIcon from '../images/shareIcon.svg';
import whiteHearticon from '../images/whiteHeartIcon.svg';
import { requestFoodById } from '../services/requestFoodsAPI';

function FoodDetails({
  match: {
    params: { id },
  },
}) {
  const [meal, setMeal] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function requestApi() {
      const foodRecipe = await requestFoodById(id);
      setMeal(foodRecipe);
      // setIsLoading(false);
    }
    requestApi();
  }, []);

  if (meal.length !== 0) {
    const { strMeal, strMealThumb, Side, strInstructions, strYoutube } = meal[0] || [];

    const vinte = 20;
    const arrayIngredients = [];
    for (let i = 1; i <= vinte; i += 1) {
      const ingredient = meal[0][`strIngredient${i}`];
      const measure = meal[0][`strMeasure${i}`];
      arrayIngredients.push(`${ingredient} - ${measure}`);
    }
    console.log(arrayIngredients);
  }

  return (
    <section>
      {isLoading ? (
        <h1>LOADING...</h1>
      ) : (
        <main>
          <img
            data-testid="recipe-photo"
            src={ strMealThumb }
            alt="Imagem da receita"
          />
          <section>
            <h1>{strMeal}</h1>
            <span data-testid="recipe-category">{Side}</span>
            <input
              data-testid="share-btn"
              type="image"
              src={ shareIcon }
              alt="favorito"
            />
            <input
              data-testid="favorite-btn"
              type="image"
              src={ whiteHearticon }
              alt="favorito"
            />
          </section>

          <section>
            <h2>Ingredients</h2>
            {/* <ul>
          { arrayIngredients.map(
            (ingrediente, i) => (
              <li
                data-testid={ `${i}-ingredient-name-and-measur` }
                key={ i }
              >
                { ingrediente }
              </li>
            ),
          )}
        </ul> */}
          </section>

          <section>
            <h2>Instruções</h2>
            <p data-testid="instructions">{strInstructions}</p>
          </section>

          <video data-testid="video" controls muted>
            <source src={ strYoutube } />
          </video>

          <section>
            {/* { array.map((drink, index) => (
          <Card
            index={ index }
            key={ drink.idDrink }
            id={ drink.idDrink }
            imagePath={ drink.strDrinkThumb }
            title={ drink.strDrink }
            category={ drink.strCategory }
          />
        ))} */}
          </section>
          <button type="button" data-testid="start-recipe-btn">
            Iniciar Receita
          </button>
        </main>
      )}
    </section>
  );
}
FoodDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
export default FoodDetails;
