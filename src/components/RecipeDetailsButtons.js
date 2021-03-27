import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Context from '../context/Context';

function RecipeDetailsButtons(props) {
  const { recipeDetails } = useContext(Context);
  const { recipeType, status, route } = props;
  const recipe = Object.values(recipeDetails[0])[0][0];

  return (
    status === 'ongoing' (
      <Link
        to="/receitas-feitas"
        className="last-btn"
        data-testid="finish-recipe-btn"
      >
        Finalizar receita
      </Link>
    )
    !status ? (
      <Link
        to={ `/${route}/${recipe[`id${recipeType}`]}/in-progress` }
        className="last-btn"
        data-testid="start-recipe-btn"
      >
        Start Recipe
      </Link>
    ) : (
      <Link
        to={ `/${route}/${recipe[`id${recipeType}`]}/in-progress` }
        className="last-btn"
        data-testid="start-recipe-btn"
      >
        Finalizar Receita
      </Link>
    )
  );
}

export default RecipeDetailsButtons;
