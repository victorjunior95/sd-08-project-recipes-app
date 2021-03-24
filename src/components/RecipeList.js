import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import Context from '../context/Context';
import '../styles/RecipeList.css';

const FIRST_TWELVE_RECIPES = 12;
function RecipeList({ route, recipeType, endpoint }) {
  const {
    isFetching,
    apiReturn,
    requestApiData,
  } = useContext(Context);
  function renderNoRecipeMessage() {
    alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
    return <p>Nenhuma Receita Encontrada</p>;
  }
  function list(recipes) {
    return (
      <section>
        {recipes.slice(0, FIRST_TWELVE_RECIPES).map((recipe, index) => (
          <div data-testid={ `${index}-recipe-card` } key={ recipe[`id${recipeType}`] }>
            <p data-testid={ `${index}-card-name` }>{ recipe[`str${recipeType}`] }</p>
            <img
              className="recipe-img"
              data-testid={ `${index}-card-img` }
              src={ recipe[`str${recipeType}Thumb`] }
              alt="recipe thumbnail"
            />
          </div>
        ))}
      </section>
    );
  }
  if (apiReturn === null) {
    requestApiData(endpoint);
  }
  function renderRecipeList() {
    const recipes = Object.values(apiReturn[0])[0];
    if (recipes !== null && recipes.length === 1) {
      return <Redirect to={ `/${route}/${recipes[0][`id${recipeType}`]}` } />;
    }
    return recipes
      ? list(recipes)
      : renderNoRecipeMessage();
  }
  return (
    apiReturn && (isFetching
      ? <p>Loading...</p>
      : renderRecipeList())
  );
}
export default RecipeList;
