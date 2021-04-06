import React from 'react';
import { useHistory, useLocation } from 'react-router';

function BeginContinueRecipeBtn() {
  const history = useHistory();
  const { pathname } = useLocation();
  const arrayId = pathname.split('/')[2];
  const arrayRecipes = pathname.split('/')[1];
  const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
  const inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));

  return (
    (!doneRecipes || (doneRecipes && !doneRecipes.some(({ id }) => id === arrayId))) && (
      <button
        onClick={ () => history.push(`/${arrayRecipes}/${arrayId}/in-progress`) }
        data-testid="start-recipe-btn"
        type="button"
        className="beginRecipe-btn"
      >
        { (inProgressRecipes && arrayRecipes === 'comidas'
          && inProgressRecipes.meals[arrayId])
          || (arrayRecipes === 'bebidas' && (inProgressRecipes
          && inProgressRecipes.cocktails[arrayId]))
          ? 'Continuar Receita' : 'Iniciar Receita'}
      </button>)
  );
}

export default BeginContinueRecipeBtn;
