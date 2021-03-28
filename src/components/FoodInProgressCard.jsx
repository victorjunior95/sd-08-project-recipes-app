import React, { useEffect, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

const MAGIC_NUMBER = -1;
const MAGIC_NUMBER_2 = -12;
function FoodInProgressCard({ data, img, meal, category, instructions }) {
  const [checkFavorite, setCheckFavorite] = useState(null);
  const [verified, setVerified] = useState(['default']);
  const [copied, setCopied] = useState(false);
  const history = useHistory();

  // console.log(verified);

  const keys = Object.keys(data[0]).filter((key) => key.includes('strIngredient'));
  const values = keys.map((
    key,
  ) => data[0][key]).filter((element) => element !== null && element !== '');

  function compartilhar() {
    navigator.clipboard.writeText(`http://localhost:3000${history.location.pathname.slice(0, MAGIC_NUMBER_2)}`); // https://stackoverflow.com/questions/39501289/in-reactjs-how-to-copy-text-to-clipboard
    setCopied(true);
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
    if (localStorage.getItem('key')) setVerified(JSON.parse(localStorage.getItem('key')));
  }, []);

  useEffect(() => {
    if (verified.length) return localStorage.setItem('key', JSON.stringify(verified));
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
        onClick={ () => (!checkFavorite
          ? setCheckFavorite(true) : setCheckFavorite(false)) }
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
