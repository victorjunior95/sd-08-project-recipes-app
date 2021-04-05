import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
// import { indexOf } from 'lodash-es';
import CardCarousel from '../components/CardCarousel';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import shareIcon from '../images/shareIcon.svg';
import api from '../services/index';

const copy = require('clipboard-copy');

const filterIngredients = (recipe) => Object.entries(recipe)
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

const initLocalStorage = () => {
  const isFavorite = JSON.parse(localStorage.getItem('favoriteRecipes'));
  console.log(isFavorite);
  const inProgessRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));
  console.log(inProgessRecipes);

  if (inProgessRecipes === null) {
    localStorage.setItem('inProgressRecipes',
      JSON.stringify({ cocktails: {}, meals: {} }));
  }
  if (isFavorite === null) {
    localStorage.setItem('favoriteRecipes',
      JSON.stringify([]));
  }
  return { isFavorite, inProgessRecipes };
};

const setLocalStorage = (recipe) => {
  const inProgessRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));
  // const isFavorite = JSON.parse(localStorage.getItem('favoriteRecipes'));
  const { cocktails, meals } = inProgessRecipes;
  const ingredients = filterIngredients(recipe);
  if (inProgessRecipes) {
    localStorage.setItem('inProgressRecipes',
      JSON.stringify({
        cocktails,
        meals: { ...meals,
          [recipe.idMeal]: ingredients } }));
  }
  localStorage.setItem('inProgressRecipes',
    JSON.stringify({
      cocktails: {},
      meals: {
        ...meals, [recipe.idMeal]: ingredients } }));
};

const handleFavorite = (recipe, iFavorite) => {
  console.log('entrou no favorite useEffect');
  if (iFavorite) {
    console.log('entrou no isFavorite');
    const favoriteArray = JSON.parse(localStorage.getItem('favoriteRecipes'));
    return favoriteArray.length <= 1 ? localStorage.setItem('favoriteRecipes',
      JSON.stringify([recipe])) : localStorage.setItem('favoriteRecipes',
      JSON.stringify([...favoriteArray, recipe]));
  }
  console.log('saiu do isFavorite');

  const favoriteArray = JSON.parse(localStorage.getItem('favoriteRecipes'));
  console.log(favoriteArray);
  if (favoriteArray !== null && favoriteArray.length > 1) {
    console.log('entrou no delete favorite length maior que 1');
    return localStorage.setItem('favoriteRecipes', JSON.stringify([
      // favoriteArray.slice(0, favoriteArray[indexOf(recipe[0])]),
      // favoriteArray.slice(favoriteArray[indexOf(recipe[0])]),
    ]));
  }
  // localStorage.setItem('favoriteRecipes', JSON.stringify([]));
};

const FoodDetails = () => {
  const history = useHistory();
  const [food, setFood] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [start, setStart] = useState(false);
  const [copied, setCopy] = useState(false);
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    api.fetchMealById('52771')
      .then((response) => response.json()).then((result) => setFood(result.meals));
    api.fetchDrinks()
      .then((response) => response.json()).then((result) => setDrinks(result.drinks));
    console.log(initLocalStorage());
    const { isFavorite } = initLocalStorage();
    if (isFavorite.length > 0) {
      setFavorite(true);
    }
  }, []);

  useEffect(() => {
    if (food.length > 0 && drinks.length > 0) {
      return setLoading(false);
    }
    return setLoading(true);
  }, [food, setLoading, drinks]);

  useEffect(() => {
    if (start) {
      setLocalStorage(food[0]);
      return history.push(`/comidas/${food[0].idMeal}/in-progress`);
    }
  }, [start, food, history]);

  useEffect(() => {
    handleFavorite(food, favorite);
  }, [favorite, food]);

  const copyToClipBoard = (url) => copy(`http://localhost:3000${url}`)
    .then(() => {
      console.log('Copy OK!');
      setCopy(true);
    });
    // .catch((err) => {
    //   console.log('Copy failed: ', err);
    // });

  const inProgessRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));

  return (
    <div>
      {loading
        ? (
          <div>Loading</div>
        ) : (
          <div>
            <div>
              <img src={ food[0].strMealThumb } alt="data" data-testid="recipe-photo" />
            </div>
            <div>
              <h3 data-testid="recipe-title">{food[0].strMeal}</h3>
              <button
                type="submit"
                data-testid="share-btn"
                onClick={ () => copyToClipBoard(history.location.pathname) }
              >
                <object
                  className="rocksGlass"
                  type="image/svg+xml"
                  data={ shareIcon }
                >
                  Share
                </object>
              </button>
              {copied && <p>Link copiado!</p>}
              <button
                type="submit"
                data-testid="favorite-btn"
                src={ favorite ? blackHeartIcon : whiteHeartIcon }
                onClick={ () => setFavorite(!favorite) }
              >
                {favorite
                  ? (
                    <img
                      className="rocksGlass"
                      type="image/svg+xml"
                      src={ blackHeartIcon }
                      alt="blackHeartIcon"
                    />
                  ) : (
                    <img
                      className="rocksGlass"
                      type="image/svg+xml"
                      src={ whiteHeartIcon }
                      alt="whiteHeartIcon"
                    />
                  )}
              </button>
            </div>
            <p data-testid="recipe-category">{food[0].strCategory}</p>
            <h5>Ingredients</h5>
            <ul>
              {filterIngredientsAndMeasures(food[0])}
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
            <button
              type="button"
              data-testid="start-recipe-btn"
              className="start-recipe-btn"
              onClick={ () => setStart(true) }
            >
              {inProgessRecipes.meals !== {} ? 'Continuar Receita' : 'Iniciar Receita'}
              {/* Req 39 e 40 passam mas precisamos melhorar isso depois. */}
            </button>
          </div>
        )}
    </div>
  );
};

export default FoodDetails;
