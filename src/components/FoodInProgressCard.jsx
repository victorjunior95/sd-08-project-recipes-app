import React, { useEffect, useState } from 'react';

const MAGIC_NUMBER = -1;

function FoodInProgressCard({ data, img, meal, category, instructions }) {
  const [verified, setVerified] = useState(['default']);
  const keys = Object.keys(data[0]).filter((key) => key.includes('strIngredient'));
  const values = keys.map((
    key,
  ) => data[0][key]).filter((element) => element !== null && element !== '');
  console.log(verified);

  function handleClick({ target }) {
    if (verified.indexOf(target.value) === MAGIC_NUMBER) { // https://www.codegrepper.com/code-examples/javascript/javascript+if+array+not+contains
      setVerified([...verified, target.value]);
    } else if (verified.includes(target.value)) {
      setVerified(verified.filter((element) => element !== target.value));
    }
  }

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
        <div data-testid={ `${index}-ingredient-step` } key={ index }>
          <input
            value={ curr }
            type="checkbox"
            checked={ !!(verified.includes(curr)) } //
            onChange={ handleClick }
          />
          <p>{curr}</p>
        </div>
      ))}
      <button type="button" data-testid="share-btn">compartilhar</button>
      <button type="button" data-testid="favorite-btn">favoritar</button>
      <p data-testid="recipe-category">{category}</p>
      <p data-testid="instructions">{instructions}</p>
      <button data-testid="finish-recipe-btn" type="button">finalizar</button>
    </div>
  );
}

export default FoodInProgressCard;
