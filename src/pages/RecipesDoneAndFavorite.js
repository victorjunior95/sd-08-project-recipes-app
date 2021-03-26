import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

function RecipesDoneAndFavorite({ location: { pathname } }) {
  const { done, favorite } = useSelector((state) => state.recipes);
  const [recipes, setRecipes] = useState([]);
  const [isDone, setIsDone] = useState();

  useEffect(() => {
    if (pathname.endsWith('feitas')) {
    setRecipes(done);
    setIsDone(true); 
    }
    else {
    setIsDone(false); 
    setRecipes(favorite);
    }
  }, [pathname]);

  return (
    <div>
      <button
        type="button"
        data-testid="filter-by-all-btn"
      >
        All
      </button>
      <button
        type="button"
        data-testid="filter-by-food-btn"
      >
        Food
      </button>
      <button
        type="button"
        data-testid="filter-by-drink-btn"
      >
        Drinks
      </button>
      {recipes.map((recipe, index) => (
        <div key={ recipe.id }>
          <img
            src={ recipe.image }
            alt={ recipe.name }
            data-testid={ `${index}-horizontal-image` }
          />
          <p data-testid={ `${index}-horizontal-top-text` }>{ recipe.category }</p>
          <h1 data-testid={ `${index}-horizontal-name` }>{ recipe.name }</h1>
          <p { `${index}-horizontal-done-date` }>{recipe.doneDate}</p>
        </div>
      ))}
    </div>

  );
}

export default RecipesDoneAndFavorite;
