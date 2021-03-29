import React, { useEffect, useState, useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import RecipesContext from '../core/RecipesContext';

const MAGIC_NUMBER = -1;
const MAGIC_NUMBER_2 = -12;
function FoodInProgressCard({ data, img, meal, category, instructions }) {
  const { setFavoriteRecipe, favoriteRecipe } = useContext(RecipesContext);
  const [checkFavorite, setCheckFavorite] = useState(null);
  const [verified, setVerified] = useState(['default']);
  const [copied, setCopied] = useState(false);
  const history = useHistory();
  const { idMeal } = data[0];

  console.log(verified);

  const inProgressRecipes = [{
    meals: {
      [idMeal]: verified,
    },
  }];

  const keys = Object.keys(data[0]).filter((key) => key.includes('strIngredient'));
  const values = keys.map((
    key,
  ) => data[0][key]).filter((element) => element !== null && element !== '');

  function compartilhar() {
    navigator.clipboard.writeText(`http://localhost:3000${history.location.pathname.slice(0, MAGIC_NUMBER_2)}`); // https://stackoverflow.com/questions/39501289/in-reactjs-how-to-copy-text-to-clipboard
    setCopied(true);
  }

  function handleFavorite() {
    if (!checkFavorite) {
      setCheckFavorite(true);
    } else {
      setCheckFavorite(false);
    }
    setFavoriteRecipe([...favoriteRecipe]);
  }

  function handleChange({ target }) {
    if (verified.indexOf(target.value) === MAGIC_NUMBER) { // https://www.codegrepper.com/code-examples/javascript/javascript+if+array+not+contains
      setVerified([...verified, target.value]);
    } else if (verified.includes(target.value)) {
      setVerified(verified.filter((element) => element !== target.value));
    }
  }
  // const bugTest = 'whiteHeartIcon blackHeartIcon'; //!
  // function handleFavorite() {
  //   if (checkFavorite === null) return bugTest;
  //   if (checkFavorite === true) return bugTest;
  //   if (checkFavorite === false) return bugTest;
  // }

  useEffect(() => {
    if (localStorage.getItem('inProgressRecipes')) setVerified(JSON.parse(localStorage.getItem('inProgressRecipes')));
  }, []);

  useEffect(() => {
    if (verified) return localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressRecipes));
  }, [verified]);

  return (
    <div className="MainCard">
      <img className="img" data-testid="recipe-photo" src={ img } alt={ meal } />
      <p data-testid="recipe-title">{meal}</p>
      {values.map((curr, index) => (
        <label
          key={ index }
          htmlFor={ `${curr}` }
          data-testid={ `${index}-ingredient-step` }
        >
          <input
            value={ curr }
            type="checkbox"
            checked={ verified.length > 1 ? verified.includes(curr) : false }
            onChange={ handleChange }
          />
          {curr}
        </label>
      ))}
      <button
        onClick={ compartilhar }
        type="button"
        data-testid="share-btn"
      >
        {!copied ? 'compartilhar' : 'Link copiado!'}
      </button>
      <button
        onClick={ handleFavorite }
        type="button"

      >
        <img
          data-testid="favorite-btn"
          src={ checkFavorite ? blackHeartIcon : whiteHeartIcon }
          alt="favoritar"
        />
      </button>
      <p data-testid="recipe-category">{category}</p>
      <p data-testid="instructions">{instructions}</p>
      <Link to="/receitas-feitas">
        <button
          disabled={ verified.length !== values.length + 1 }
          data-testid="finish-recipe-btn"
          type="button"
        >
          finalizar
        </button>
      </Link>
    </div>
  );
}

export default FoodInProgressCard;
