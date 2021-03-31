import React, { useContext, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import Context from '../context/Context';
// import { saveState } from '../services/LocalStorage';

function SaveProgressRecipes(idRecipe, route) {
  // const recipe = Object.values(recipeDetails[0])[0][0];
  let a = [];
  a = JSON.parse(localStorage.getItem('inProgressRecipes')) || [];
  if (route === 'comidas') {
    a.push({
      idRecipe,
      type: route,
    });
  }
  if (route === 'bebidas') {
    a.push({
      idRecipe,
      type: route,
    });
  }
  localStorage.setItem('inProgressRecipes', JSON.stringify(a));
}

function DetailsButtons({ route, id, page }) {
  const {
    disableButton,
    shouldRedirect,
    setShouldRedirect,
    recipeDetails,
  } = useContext(Context);
  const idsP = JSON.parse(localStorage.getItem('inProgressRecipes')) || [];
  const idsF = JSON.parse(localStorage.getItem('doneRecipes')) || [];

  useEffect(() => {
    if (!Object.values(idsP).includes(id)
    && window.location.href === `/${route}/${id}/`) {
      document.getElementById('start-recipe-btn').innerText = 'Iniciar Receita';
    }
  }, []);

  function SaveFinishedRecipes(idRecipe) {
    const recipe = Object.values(recipeDetails[0])[0][0];
    let a = [];
    a = JSON.parse(localStorage.getItem('doneRecipes')) || [];

    if (route === 'comidas') {
      a.push({
        idRecipe,
        type: route,
        area: recipe.strArea,
        category: recipe.strCategory,
        alcoholicOrNot: '',
        name: recipe.strMeal,
        image: recipe.strMealThumb,
        doneDate: '',
        tags: '',
      });
    }
    if (route === 'bebidas') {
      a.push({
        idRecipe,
        type: route,
        area: '',
        category: recipe.strCategory,
        alcoholicOrNot: recipe.strAlcoholic,
        name: recipe.strDrink,
        image: recipe.strDrinkThumb,
        doneDate: '',
        tags: '',
      });
    }
    localStorage.setItem('doneRecipes', JSON.stringify(a));
    // saveState('doneRecipes', [...a]);
  }

  if (shouldRedirect === id) return <Redirect to="/receitas-feitas" />;

  return (
    <div>
      {
        page === 'details' ? (
          <Link
            to={ `/${route}/${id}/in-progress` }
            className="last-btn"
            data-testid="start-recipe-btn"
            style={ { display: 'none' } }
            id="start-recipe-btn"
            onClick={ () => {
              idsP.push(id);
              // localStorage.setItem('inProgressRecipes', JSON.stringify(idsP));
              SaveProgressRecipes(id, route);
            } }
          >
            Continuar Receita
            {/* { (Object.values(ids).includes(id))
              ? 'Continuar Receita'
              : 'Iniciar Receita' } */}
          </Link>
        ) : (
          <button
            to="/receitas-feitas"
            type="submit"
            className={ disableButton ? 'last-btn disable' : 'last-btn' }
            data-testid="finish-recipe-btn"
            id="finish-recipe-btn"
            disabled={ disableButton }
            onClick={ () => {
              idsF.push(id);
              // localStorage.setItem('doneRecipes', JSON.stringify(idsF));
              SaveFinishedRecipes(id);
              setShouldRedirect(id);
            } }
          >
            Finalizar Receita
          </button>
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
