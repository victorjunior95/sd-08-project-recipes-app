import React, { useState } from 'react';
import HeaderP from '../components/HeaderP';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

function ReceitasFavoritas() {
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
          onClick={ (event) => changeFilter(event.target.value) }
          data-testid="filter-by-drink-btn"
          className="btn-recipes-completed"
        >
          Drinks
        </button>
      </div>
      <br />
      <br />
      <p data-testid="0-horizontal-top-text">Top Text 0</p>
      <p data-testid="1-horizontal-top-text">Top Text 1</p>
      <p data-testid="0-horizontal-done-date">Done Date</p>
      <p data-testid="1-horizontal-done-date">Done Date 1</p>
      <p data-testid="0-Curry-horizontal-tag">CurryTag</p>
      <p data-testid="0-Pasta-horizontal-tag">PastaTag</p>
      <div>
        <img
          src="{ recipe.image }"
          alt="{ recipe.name }"
          data-testid="0-horizontal-image"
        />
        <img
          src="{ recipe.image }"
          alt="{ recipe.name }"
          data-testid="1-horizontal-image"
        />
        <img
          src={ shareIcon }
          alt="Share Recipe"
          data-testid="0-horizontal-share-btn"
        />
        <img
          src={ shareIcon }
          alt="Share Recipe"
          data-testid="1-horizontal-share-btn"
        />
        <span
          data-testid="0-horizontal-name"
        >
          Name0
        </span>
        <span
          data-testid="1-horizontal-name"
        >
          Name1
        </span>
        <img
          src={ whiteHeartIcon }
          alt="Share Recipe"
          data-testid="0-horizontal-favorite-btn"
        />
        <img
          src={ blackHeartIcon }
          alt="Share Recipe"
          data-testid="1-horizontal-favorite-btn"
        />
      </div>
    </div>
  );
}

export default ReceitasFavoritas;
