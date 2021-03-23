import React from 'react';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';
import shareIcon from '../../images/shareIcon.svg';
import data from './data';

const DrinkRecipeTop = () => {
  const recipe = [data[1]];
  // const { meals } = JSON.parse(localStorage.getItem('inProgressRecipes'));
  // const recipe = meals[Object.keys(meals)[0]];
  console.log(recipe);

  return (
    <div>
      <div>
        <img
          src={ recipe[0].strMealThumb }
          alt={ recipe[0].strMealThumb }
          data-testid="recipe-photo"
        />
      </div>
      <div>
        <div>
          <h3 data-testid="recipe-title">{recipe[0].strMeal}</h3>
          <p data-testid="recipe-category">{recipe[0].strCategory}</p>
        </div>
        <div>
          <button type="button" data-testid="share-btn">
            <img src={ shareIcon } alt={ shareIcon } />
          </button>
          <button type="button" data-testid="favorite-btn">
            <img src={ whiteHeartIcon } alt={ whiteHeartIcon } />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DrinkRecipeTop;
