import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import CardCarousel from '../components/CardCarousel';
import api from '../services/index';

const copy = require('clipboard-copy');

const finterIngredients = (recipe) => Object.entries(recipe)
  .filter((ingredientIndex) => ingredientIndex[0].startsWith('strIngredient'))
  .filter((ingredientIndex) => ingredientIndex[1] !== '')
  .filter((ingredientIndex) => ingredientIndex[1] !== null)
  .map((ingredientIndex) => ingredientIndex[1]);

const filterIngredientsAndMeasures = (recipe) => {
  const arrayFromObject = Object.entries(recipe)
    .filter((ingredientIndex) => ingredientIndex[0].startsWith('strMeasure')
                  || ingredientIndex[0].startsWith('strIngredient'))
    .filter((ingredientIndex) => ingredientIndex[1] !== '')
    .filter((ingredientIndex) => ingredientIndex[1] !== null);
  const ingredientMeasurePairs = [
    arrayFromObject.slice(0, arrayFromObject.length / 2),
    arrayFromObject.slice(arrayFromObject.length / 2),
  ];

  return (ingredientMeasurePairs[0].map((ingredientsString, indx) => (
    <li key={ indx } data-testid={ `${indx}-ingredient-name-and-measure` }>
      {ingredientsString[1]}
      {' - '}
      {ingredientMeasurePairs[1][indx][1]}
    </li>
  )));
};

const DrinkDetails = () => {
  const history = useHistory();
  const [drink, setDrink] = useState([]);
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [start, setStart] = useState(false);
  const [copied, setCopy] = useState(false);

  useEffect(() => {
    api.fetchDrinkById('178319')
      .then((response) => response.json()).then((result) => setDrink(result.drinks));
    api.fetchMeals()
      .then((response) => response.json()).then((result) => setFoods(result.meals));
    const inProgessRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));
    if (!inProgessRecipes) {
      localStorage.setItem('inProgressRecipes',
        JSON.stringify({ cocktails: {}, meals: {} }));
    }
  }, []);

  useEffect(() => {
    if (drink.length > 0 && foods.length > 0) {
      return setLoading(false);
    }
    return setLoading(true);
  }, [drink, setLoading, foods]);

  useEffect(() => {
    const inProgessRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));
    const { cocktails, meals } = inProgessRecipes;
    if (start) {
      const ingredients = finterIngredients(drink[0]);

      if (inProgessRecipes) {
        localStorage.setItem('inProgressRecipes',
          JSON.stringify({
            meals,
            cocktails: { ...cocktails,
              [drink[0].idDrink]: ingredients } }));
      }
      localStorage.setItem('inProgressRecipes',
        JSON.stringify({
          meals: {},
          cocktails: {
            ...cocktails, [drink[0].idDrink]: ingredients } }));

      return history.push(`/bebidas/${drink[0].idDrink}/in-progress`);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [start]);

  const copyToClipBoard = (url) => copy(`http://localhost:3000${url}`)
    .then(() => {
      console.log('Copy OK!');
      setCopy(true);
    })
    .catch((err) => {
      console.log('Copy failed: ', err);
    });

  const inProgessRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));
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
              <button
                type="submit"
                data-testid="share-btn"
                onClick={ () => copyToClipBoard(history.location.pathname) }
              >
                Share
              </button>
              {copied && <p>Link copiado!</p> }
              <button type="submit" data-testid="favorite-btn">Favorite</button>
            </div>
            <p data-testid="recipe-category">{drink[0].strAlcoholic}</p>
            <h5>Ingredients</h5>
            <ul>
              {filterIngredientsAndMeasures(drink[0])}
            </ul>
            <h5>Instructions</h5>
            <p data-testid="instructions">{drink[0].strInstructions}</p>
            <h5>Recomendadas</h5>
            <CardCarousel foods={ foods } />
            <button
              type="button"
              data-testid="start-recipe-btn"
              className="start-recipe-btn"
              onClick={ () => setStart(true) }
            >
              {inProgessRecipes.drinks !== {} ? 'Continuar Receita' : 'Iniciar Receita'}
              {/* Req 39 e 40 passam mas precisamos melhorar isso depois. */}
            </button>
          </div>
        )}
    </div>
  );
};

export default DrinkDetails;
