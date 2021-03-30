import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import CardCarousel from '../components/CardCarousel';
import api from '../services/index';
import shareIcon from '../images/shareIcon.svg';

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
      favoriteArray.slice(0, favoriteArray[favoriteArray.indexOf(recipe[0])]),
      favoriteArray.slice(favoriteArray[favoriteArray.indexOf(recipe[0])]),
    ]));
  }
  // localStorage.setItem('favoriteRecipes', JSON.stringify([]));
};

const DrinkDetails = () => {
  const history = useHistory();
  const [drink, setDrink] = useState([]);
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [start, setStart] = useState(false);
  const [copied, setCopy] = useState(false);
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    api.fetchDrinkById('178319')
      .then((response) => response.json()).then((result) => setDrink(result.drinks));
    api.fetchMeals()
      .then((response) => response.json()).then((result) => setFoods(result.meals));
    console.log(initLocalStorage());
    const { isFavorite } = initLocalStorage();
    if (isFavorite.length > 0) {
      setFavorite(true);
    }
  }, []);

  useEffect(() => {
    if (drink.length > 0 && foods.length > 0) {
      return setLoading(false);
    }
    return setLoading(true);
  }, [drink, setLoading, foods]);

  useEffect(() => {
    if (start) {
      setLocalStorage(drink[0]);
      return history.push(`/bebidas/${drink[0].idDrink}/in-progress`);
    }
  }, [start, drink, history]);

  useEffect(() => {
    handleFavorite(drink, favorite);
  }, [favorite, drink]);

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
    <div style={ { padding: 10 } }>
      {loading ? (
        <div>Loading</div>
      ) : (
        <div>
          <div>
            <img
              src={ drink[0].strDrinkThumb }
              alt="data"
              data-testid="recipe-photo"
              className="image-details"
            />
          </div>
          <div className="title-details-container">
            <h3 data-testid="recipe-title">{drink[0].strDrink}</h3>
            <div className="share-favorite-container">
              <button
                className="share-favorite-buttons"
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
                className="share-favorite-buttons"
                type="submit"
                data-testid="favorite-btn"
                src={ favorite ? blackHeartIcon : whiteHeartIcon }
                onClick={ () => setFavorite(!favorite) }
              >
                {favorite ? (
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
          </div>
          <p data-testid="recipe-category">{drink[0].strAlcoholic}</p>
          <h5>Ingredients</h5>
          <ul className="instructions-recipes">
            {filterIngredientsAndMeasures(drink[0])}
          </ul>
          <h5>Instructions</h5>
          <p data-testid="instructions" className="instructions-recipes">
            {drink[0].strInstructions}
          </p>
          <h5>Recomendadas</h5>
          <CardCarousel foods={ foods } />
          <button
            type="button"
            data-testid="start-recipe-btn"
            className="btnz2 btn btn-primary start-recipe-btn"
            onClick={ () => setStart(true) }
          >
            {inProgessRecipes.drinks !== {}
              ? 'Continuar Receita'
              : 'Iniciar Receita'}
            {/* Req 39 e 40 passam mas precisamos melhorar isso depois. */}
          </button>
        </div>
      )}
    </div>
  );
};

export default DrinkDetails;
