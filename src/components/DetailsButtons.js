import React, { useContext } from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import Context from '../context/Context';

function DetailsButtons({ route, id, page, recipeType }) {
/*   const { recipeDetails } = useContext(Context);
  const recipe = Object.values(recipeDetails[0])[0][0];

  const doneRecipes = [{
    id,
    type: (recipeType === 'Meal' ? 'comida' : 'bebida'),
    area: recipe.strArea,
    category: recipe.strCategory,
    alcoholicOrNot: (recipeType === 'Drink' ? recipe.strAlcoholic : ''),
    name: recipe[`str${recipeType}`],
    image: recipe[`str${recipeType}Thumb`],
    doneDate: "22/6/2020",
    tags: recipe.strTags,
  }]; */

  return (
    <div>
      {
        page === 'details' ? (
          <Link
            to={ `/${route}/${id}/in-progress` }
            className="last-btn"
            data-testid="start-recipe-btn"
            id="start-recipe-btn"
            onClick={ () => {
              localStorage.setItem('inProgressRecipes', JSON.stringify(id));
            } }
          >
            { (id === JSON.parse(localStorage.getItem('inProgressRecipes')))
              ? 'Continuar Receita' : 'Iniciar Receita' }
          </Link>

        ) : (
          <Link
            to="/receitas-feitas"
            type="submit"
            className="last-btn"
            data-testid="finish-recipe-btn"
            onClick={ () => {
              localStorage.setItem('finishedRecipes', JSON.stringify(id));
            } }
            // disabled={ document.querySelectorAll('.checkbox').checked }
          >
            Finalizar Receita
          </Link>
        )
      }
    </div>
  );
}

DetailsButtons.propTypes = {
  route: PropTypes.string,
  page: PropTypes.string,
  id: PropTypes.string,
}.isRequired;

export default DetailsButtons;
