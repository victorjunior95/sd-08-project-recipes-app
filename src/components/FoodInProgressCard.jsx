import React from 'react';

function FoodInProgressCard({ data, img, meal, category, instructions }) {
  const keys = Object.keys(data[0]).filter((key) => key.includes('strIngredient'));
  const values = keys.map((
    key,
  ) => data[0][key]).filter((element) => element !== null && element !== '');

  return (
    <div className="MainCard">
      <img className="img" data-testid="recipe-photo" src={ img } alt={ meal } />
      <p data-testid="recipe-title">{meal}</p>
      {values.map((curr, index) => (
        <div data-testid={ `${index}-ingredient-step` } key={ index }>
          <input type="checkbox" />
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
