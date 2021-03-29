import React, { useEffect, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

const NEGATIVE_1 = -1;
const NEGATIVE_12 = -12;

function FoodInProgressCard({ data, img, meal, category, instructions }) {
  const history = useHistory();
  const [checkFavorite, setCheckFavorite] = useState(null);
  const [copied, setCopied] = useState(false);
  const [verifiedCheck, setVerifiedCheck] = useState(false);
  const { idMeal, idDrink, strArea, strCategory, strDrinkThumb,
    strDrink, strMeal, strMealThumb, strAlcoholic } = data[0];
  // const { idMeal } = data[0];
  const [verified, setVerified] = useState(() => {
    const result = JSON.parse(localStorage.getItem('inProgressRecipes'));
    if (result) {
      return result[0].meals[idMeal];
    }
    return [];
  });
  const inProgressRecipes = [{
    meals: {
      [idMeal]: [...verified],
    },
  }];
  const favoriteRecipeInfo = [{
    id: idMeal || idDrink,
    type: drinkOrMeal(),
    area: strArea || '',
    category: strCategory || '',
    alcoholicOrNot: strAlcoholic || '',
    name: strMeal || strDrink,
    image: strDrinkThumb || strMealThumb,
  }];
  // console.log(favoriteRecipeInfo);
  const values = Object.keys(data[0]).filter((
    key,
  ) => key.includes('strIngredient')).map((
    key,
  ) => data[0][key]).filter((element) => element !== null && element !== '');

  function compartilhar() {
    setCopied(true);
    return navigator.clipboard.writeText(`http://localhost:3000${history.location.pathname.slice(0, NEGATIVE_12)}`); // https://stackoverflow.com/questions/39501289/in-reactjs-how-to-copy-text-to-clipboard
  }

  function drinkOrMeal() {
    if (history.location.pathname.includes('bebidas')) return 'bebida';
    return 'comida';
  }

  function handleFavorite() {
    if (!checkFavorite) {
      setCheckFavorite(true);
      localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipeInfo));
    } else {
      setCheckFavorite(false);
      localStorage.removeItem('favoriteRecipes');
    }
  }

  function handleChange({ target }) {
    if (verified.indexOf(target.value) === NEGATIVE_1) { // https://www.codegrepper.com/code-examples/javascript/javascript+if+array+not+contains
      setVerified([...verified, target.value]);
    } else if (verified.includes(target.value)) {
      setVerified(verified.filter((element) => element !== target.value));
    }
  }

  useEffect(() => {
    if (verified) return setVerifiedCheck(true);
    if (verified.length > 0) return setVerifiedCheck(false);
  }, [verified]);

  useEffect(() => {
    if (verified && verifiedCheck) {
      return localStorage.setItem(
        'inProgressRecipes', JSON.stringify(inProgressRecipes),
      );
    }
  }, [verified]);

  return (
    <div className="MainCard">
      <img className="img" data-testid="recipe-photo" src={ img } alt={ meal } />
      <p data-testid="recipe-title">{meal}</p>
      {values.map((curr, index) => (
        <label
          key={ index }
          htmlFor={ curr }
          data-testid={ `${index}-ingredient-step` }
        >
          <input
            id={ curr }
            value={ curr }
            type="checkbox"
            checked={ !!verified.includes(curr) }
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
          disabled={ verified.length !== values.length }
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

// useEffect(() => {
//   if (storage.length) {
//     const isChecked = storage[0].meals[idMeal];
//     setVerified(isChecked);
//   }
// }, []);
