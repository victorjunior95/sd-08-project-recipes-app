import React, { useContext, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import Context from '../context/Context';
import RecipeDetails from '../components/RecipeDetails';

function DetalhesComida(props) {
  const { requestRecipeDetails } = useContext(Context);

  useEffect(() => {
    requestRecipeDetails('themealdb', props.match.params.id, 'thecocktaildb');
  }, []);

  return (
    <main>
      <RecipeDetails recipeType="Meal" route="comidas" />
    </main>
  );
}

DetalhesComida.propTypes = {
  match: PropTypes.object,
  params: PropTypes.object,
  id: PropTypes.string,
}.isRequired;

export default DetalhesComida;
