import React, { useContext, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import Context from '../context/Context';
import RecipeDetails from '../components/RecipeDetails';
import DetailsButtons from '../components/DetailsButtons';

function DetalhesComida({ match }) {
  const { requestRecipeDetails } = useContext(Context);
  const { id } = match.params;

  useEffect(() => {
    requestRecipeDetails('themealdb', id, 'thecocktaildb');
  }, []);

  if (id === JSON.parse(localStorage.getItem('finishedRecipes'))
    && localStorage.getItem('finishedRecipes')) {
    document.getElementById('start-recipe-btn').style = { display: 'none' };
    console.log(document.getElementById('start-recipe-btn'));
  }

  return (
    <main>
      <RecipeDetails recipeType="Meal" page="details" />
      <DetailsButtons route="comidas" id={ id } page="details" />
    </main>
  );
}

DetalhesComida.propTypes = {
  match: PropTypes.object,
  params: PropTypes.object,
  id: PropTypes.string,
}.isRequired;

export default DetalhesComida;
