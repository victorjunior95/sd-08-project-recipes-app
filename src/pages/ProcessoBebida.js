import React, { useContext, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import Context from '../context/Context';
import RecipeDetails from '../components/RecipeDetails';

function ProcessoBebida(props) {
  const { requestRecipeDetails } = useContext(Context);

  useEffect(() => {
    requestRecipeDetails('thecocktaildb', props.match.params.id, 'themealdb');
  }, []);

  return (
    <main>
      <RecipeDetails recipeType="Drink" route="bebidas" status="ongoing" />
    </main>
  );
}

ProcessoBebida.propTypes = {
  match: PropTypes.object,
  params: PropTypes.object,
  id: PropTypes.string,
}.isRequired;

export default ProcessoBebida;
