import React, { useEffect, useState } from 'react';
import CardCarousel from '../components/CardCarousel';
import api from '../services/index';

const DrinkDetails = () => {
  const [drink, setDrink] = useState([]);
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.fetchDrinkById('178319')
      .then((response) => response.json()).then((result) => setDrink(result.drinks));
    api.fetchMeals()
      .then((response) => response.json()).then((result) => setFoods(result.meals));
  }, []);

  useEffect(() => {
    if (drink.length > 0 && foods.length > 0) {
      return setLoading(false);
    }
    return setLoading(true);
  }, [drink, setLoading, foods]);

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
  console.log(drink);
  return (
    <div>
      {loading
        ? (
          <div>Loading</div>
        )
        : (
          <div>
            <div>
              <img src={ drink[0].strDrinkThumb } alt="data" data-testid="recipe-photo" />
            </div>
            <div>
              <h3 data-testid="recipe-title">{drink[0].strDrink}</h3>
              <button type="submit" data-testid="share-btn">Share</button>
              <button type="submit" data-testid="favorite-btn">Favorite</button>
            </div>
            <p data-testid="recipe-category">{drink[0].strAlcoholic}</p>
            <h5>Ingredients</h5>
            <ul>
              {filterIngredients(drink[0])}
            </ul>
            <h5>Instructions</h5>
            <p data-testid="instructions">{drink[0].strInstructions}</p>
            <h5>Recomendadas</h5>
            <CardCarousel foods={ foods } />
            <button type="button" data-testid="start-recipe-btn">Iniciar Receita</button>
          </div>
        )}
    </div>
  );
};

export default DrinkDetails;
