import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import RecommendedMeals from '../components/RecommendedMeals';
import { requestDrinkRecipe } from '../services/apiRequests';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

function DetalhesBebidas() {
  const params = useParams();
  const { id } = params;
  const [drink, setDrink] = useState([]);
  const [recipe, setRecipe] = useState([]);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);
  const [favorite, setFavorite] = useState(false);
  const history = useHistory();

  const parseRecipe = (data) => {
    const aux = Object.entries(data).reduce((acc, cur) => {
      if (cur[0].startsWith('strIngredient')) {
        const both = cur[0].split('strIngredient').join('strMeasure');
        acc.push({
          ingredient: cur[1],
          measure: data[both],
        });
      }
      return acc;
    }, []);
    return aux.filter((i) => i.ingredient !== null);
  };

  useEffect(() => {
    async function requestById() {
      const clickedRecipe = await requestDrinkRecipe(id);
      setDrink(clickedRecipe[0]);
      setRecipe(parseRecipe(clickedRecipe[0]));
      setLoading(false);
    }
    async function verifyFavorites() {
      const favoriteRecipes = await JSON.parse(localStorage.getItem('favoriteRecipes'));
      const haveRecipe = favoriteRecipes
        .some((element) => element.id.includes(drink.idDrink));
      if (haveRecipe) return setFavorite(true);
    }
    requestById();
    verifyFavorites();
  }, [id, drink.idDrink]);

  async function addToFavorite() {
    setFavorite(!favorite);
    const favoriteRecipes = await JSON.parse(localStorage.getItem('favoriteRecipes'));
    const favoriteRecipe = {
      id: drink.idDrink,
      type: 'drink',
      area: drink.strArea,
      category: drink.strCategory,
      alcoholicOrNot: drink.strAlcoholic,
      name: drink.strDrink,
      image: drink.strDrinkThumb,
    };
    favoriteRecipes.push(favoriteRecipe);
    localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes));
  }

  async function removeFromFavorite() {
    setFavorite(!favorite);
    const favoriteRecipes = await JSON.parse(localStorage.getItem('favoriteRecipes'));
    const newList = favoriteRecipes.filter((element) => element.id !== drink.idDrink);
    console.log(newList);
    localStorage.setItem('favoriteRecipes', JSON.stringify(newList));
  }

  console.log('teste drink array:', drink[0]);
  // console.log('acessando chaves do objeto meal:', meal && meal.length && meal[0].strMealThumb);

  if (loading) {
    return (
      <p>Loading</p>
    );
  }
  return (
    <div>
      <h1 data-testid="recipe-title">{drink.strDrink}</h1>
      <img src={ drink.strDrinkThumb } alt="imagem" data-testid="recipe-photo" />
      <CopyToClipboard
        text={ window.location.href }
        onCopy={ () => setCopied(true) }
      >
        <button type="button" data-testid="share-btn">Compartilhar</button>
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
        { drink.strAlcoholic }
      </p>
      <ul>
        { recipe.map((item, index) => (
          <li data-testid={ `${index}-ingredient-name-and-measure` } key={ index }>
            <span>{ `${item.measure} ${item.ingredient}` }</span>
          </li>
        ))}
      </ul>
      <p data-testid="instructions">
        { drink.strInstructions }
      </p>
      <video src={ drink.strYoutube } data-testid="video" controls>
        <track kind="captions" />
      </video>
      {/* <div>
        <p data-testid="0-recomendation-card">Recomendação</p>
      </div> */}
      <RecommendedMeals />
      <button
        type="button"
        data-testid="start-recipe-btn"
        className="start"
        onClick={ () => history.push(`/bebidas/${drink.idDrink}/in-progress`) }
      >
        Iniciar Receita
      </button>
    </div>
  );
}

export default DetalhesBebidas;
