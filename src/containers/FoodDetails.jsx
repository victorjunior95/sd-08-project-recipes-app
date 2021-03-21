import React, { useEffect, useState } from 'react';
import CardCarousel from '../components/CardCarousel';
// import RecipiesContext from '../core/RecipiesContext';
import api from '../services/index';

const FoodDetails = () => {
  // const { data } = useContext(RecipiesContext);
  const [food, setFood] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.fetchMealById('52771')
      .then((response) => response.json()).then((result) => setFood(result.meals));
    api.fetchDrinks()
      .then((response) => response.json()).then((result) => setDrinks(result.drinks));
  }, []);

  useEffect(() => {
    if (food.length > 0 && drinks.length > 0) {
      return setLoading(false);
    }
    return setLoading(true);
  }, [food, setLoading, drinks]);
  console.log(food);

  const filterIngredients = (recipe) => {
    const arrayFromObject = Object.entries(recipe)
      .filter((ingredientIndex) => ingredientIndex[0].startsWith('strMeasure')
                  || ingredientIndex[0].startsWith('strIngredient'))
      .filter((ingredientIndex) => ingredientIndex[1] !== '')
      .filter((ingredientIndex) => ingredientIndex[1] !== null);
    const ingredientMeasurePairs = [
      arrayFromObject.slice(0, arrayFromObject.length / 2),
      arrayFromObject.slice(arrayFromObject.length / 2),
    ];
    console.log(ingredientMeasurePairs);
    return (ingredientMeasurePairs[0].map((ingredientsString, indx) => (
      <li key={ indx } data-testid={ `${indx}-ingredient-name-and-measure` }>
        {ingredientsString[1]}
        {' - '}
        {ingredientMeasurePairs[1][indx][1]}
      </li>
    )));
  };
  return (
    <div>
      {loading
        ? (
          <div>Loading</div>
        )
        : (
          // <div>Hello</div>
          <div>
            <div>
              <img src={ food[0].strMealThumb } alt="data" data-testid="recipe-photo" />
            </div>
            <div>
              <h3 data-testid="recipe-title">{food[0].strMeal}</h3>
              <button type="submit" data-testid="share-btn">Share</button>
              <button type="submit" data-testid="favorite-btn">Favorite</button>
            </div>
            <p data-testid="recipe-category">{food[0].strCategory}</p>
            <h5>Ingredients</h5>
            <ul>
              {filterIngredients(food[0])}
            </ul>
            <h5>Instructions</h5>
            <p data-testid="instructions">{food[0].strInstructions}</p>
            <div>
              <iframe
                src={ food[0].strYouTube }
                frameBorder="0"
                title="data"
                data-testid="video"
              />
            </div>
            <h5>Recomendadas</h5>
            <CardCarousel drinks={ drinks } />
            <button type="button" data-testid="start-recipe-btn">Iniciar Receita</button>
          </div>
        )}
    </div>
  );
};

export default FoodDetails;
