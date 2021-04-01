import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { requestMealRecipe } from '../services/apiRequests';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import shareIcon from '../images/shareIcon.svg';
import Loading from '../components/Loading';

function EmProgresso() {
  const params = useParams();
  const { id } = params;
  const [isLoading, setIsLoading] = useState(true);
  const [meal, setMeal] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [copied, setCopied] = useState(false);
  const [favorite, setFavorite] = useState(false);

  function parseIngredients(data) {
    const arrayIngredients = Object.keys(data);
    const element = arrayIngredients.filter((item) => item.includes('strIngredient'));
    const test = element.filter((item) => data[item]);
    console.log('teste', test);

    setIngredients(test);
    setIsLoading(false);
  }

  useEffect(() => {
    async function requestById() {
      // setIsLoading(true);
      const clickedRecipe = await requestMealRecipe(id);
      setMeal(clickedRecipe[0]);
      parseIngredients(clickedRecipe[0]);
    }
    async function verifyFavorites() {
      const favoriteRecipes = await JSON.parse(localStorage.getItem('favoriteRecipes'));
      const haveRecipe = favoriteRecipes
        .some((element) => element.id.includes(meal.idMeal));
      if (haveRecipe) return setFavorite(true);
    }
    requestById();
    verifyFavorites();
  }, [id, meal.idMeal]);

  async function addToFavorite() {
    setFavorite(!favorite);
    const favoriteRecipes = await JSON.parse(localStorage.getItem('favoriteRecipes'));
    const favoriteRecipe = {
      id: meal.idMeal,
      type: 'comida',
      area: meal.strArea,
      category: meal.strCategory,
      alcoholicOrNot: '',
      name: meal.strMeal,
      image: meal.strMealThumb,
    };
    favoriteRecipes.push(favoriteRecipe);
    localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes));
  }

  async function removeFromFavorite() {
    setFavorite(!favorite);
    const favoriteRecipes = await JSON.parse(localStorage.getItem('favoriteRecipes'));
    const newList = favoriteRecipes.filter((element) => element.id !== meal.idMeal);
    localStorage.setItem('favoriteRecipes', JSON.stringify(newList));
  }

  console.log('loading', isLoading);
  console.log('meal', meal);

  return (
    <main>
      {
        isLoading
          ? <Loading />
          : (
            <>
              <h1 data-testid="recipe-title">{meal.strMeal}</h1>
              <img
                className="card-image"
                src={ meal.strMealThumb }
                alt="imagem"
                data-testid="recipe-photo"
              />
              <br />
              <CopyToClipboard
                text={ window.location.href }
                onCopy={ () => setCopied(true) }
              >
                <input
                  data-testid="share-btn"
                  type="image"
                  src={ shareIcon }
                  alt="button share with friends"
                />
              </CopyToClipboard>
              {copied ? <span style={ { color: 'red' } }>Link copiado!</span> : null}
              {
                favorite
                  ? (
                    <input
                      type="image"
                      src={ blackHeartIcon }
                      data-testid="favorite-btn"
                      alt="favorite btn"
                      onClick={ removeFromFavorite }
                    />
                  )
                  : (
                    <input
                      type="image"
                      src={ whiteHeartIcon }
                      data-testid="favorite-btn"
                      alt="favorite btn"
                      onClick={ addToFavorite }
                    />
                  )
              }
              <p data-testid="recipe-category">
                { meal.strCategory }
              </p>
              <ul>
                { ingredients.map((item, index) => (
                  <li
                    data-testid={ `${index}-ingredient-step` }
                    key={ index }
                  >
                    <input type="checkbox" name="ingredient" />
                    <label htmlFor="ingredient">
                      { `${meal[item]}` }
                    </label>
                    {/* <span>{ `${meal[item]}` }</span> */}
                  </li>
                ))}
              </ul>
              <p data-testid="instructions">
                { meal.strInstructions }
              </p>
              <button
                type="button"
                data-testid="finish-recipe-btn"
              >
                Finalizar receita
              </button>
            </>
          )
      }
    </main>
  );
}

export default EmProgresso;
