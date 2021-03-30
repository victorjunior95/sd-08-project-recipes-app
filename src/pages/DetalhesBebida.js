import React, { useContext, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import Context from '../context/Context';
import RecipeDetails from '../components/RecipeDetails';
import DetailsButtons from '../components/DetailsButtons';

function DetalhesBebida({ match }) {
  const { requestRecipeDetails } = useContext(Context);
  const { id } = match.params;

  // const ids = JSON.parse(localStorage.getItem('finishedRecipes')) || [];

  useEffect(() => {
    requestRecipeDetails('thecocktaildb', id, 'themealdb');
    document.getElementById('start-recipe-btn').style.display = 'block';
    // if (ids.includes(id)) {
    //   document.getElementById('start-recipe-btn').style.display = 'none';
    // }
  }, []);

  return (
    <main>
      <RecipeDetails recipeType="Drink" page="details" />
      <DetailsButtons route="bebidas" id={ id } page="details" />
    </main>
  );
}

DetalhesBebida.propTypes = {
  match: PropTypes.object,
  params: PropTypes.object,
  id: PropTypes.string,
}.isRequired;

export default DetalhesBebida;
