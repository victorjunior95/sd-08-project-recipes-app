import React, { useState } from 'react';
import HeaderP from './HeaderP';
import DetailsFavoriteRecipes from './DetailsFavoriteRecipes';

const FavoriteRecipe = () => {
  const [recipesCompleted, setRecipesCompleted] = useState('All');

  const changeFilter = (value) => {
    console.log(value);
    if (value === recipesCompleted) setRecipesCompleted('All');
    else setRecipesCompleted(value);
  };
  return (
    <div>
      <HeaderP title="Receitas Favoritas" />
      <hr />
      <div className="btns-recipes-completed">
        <button
          type="button"
          value="All"
          onClick={ (event) => changeFilter(event.target.value) }
          data-testid="filter-by-all-btn"
          className="btn-recipes-completed"
        >
          All
        </button>
        <button
          type="button"
          value="Food"
          onClick={ (event) => changeFilter(event.target.value) }
          data-testid="filter-by-food-btn"
          className="btn-recipes-completed"
        >
          Food
        </button>
        <button
          type="button"
          value="Drinks"
          onClick={(event) => changeFilter(event.target.value)}
          data-testid="filter-by-drink-btn"
          className="btn-recipes-completed"
        >
          Drinks
        </button>
      </div>
      <br />
      <br />
      <DetailsFavoriteRecipes />
    </div>
  );
};

export default FavoriteRecipe;
