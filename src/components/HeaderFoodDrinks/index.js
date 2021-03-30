import React from 'react';

export default function HeaderFoodDrinks({ item, shareIcon, whiteHeartIcon }) {
  return (
    <>
      <img
        src={ item.strMealThumb }
        alt={ item.trArea }
        data-testid="recipe-photo"
      />
      <h1 data-testid="recipe-title">
        {item.strMeal}
      </h1>
      <button data-testid="share-btn" type="button">
        <img src={ shareIcon } alt="compartilhar" />
      </button>
      <button data-testid="favorite-btn" type="button">
        <img src={ whiteHeartIcon } alt="favorito" />
      </button>
      <h2 data-testid="recipe-category">{item.strCategory}</h2>
    </>
  );
}
