import React, { useContext, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import Context from '../context/Context';
import RecipeDetails from '../components/RecipeDetails';

function DetalhesBebida(props) {
  const { requestRecipeDetails } = useContext(Context);

  useEffect(() => {
    requestRecipeDetails('thecocktaildb', props.match.params.id, 'themealdb');
  }, []);

  return (
    <main>
      <RecipeDetails recipeType="Drink" route="bebidas" />
    </main>
  );
}

DetalhesBebida.propTypes = {
  match: PropTypes.object,
  params: PropTypes.object,
  id: PropTypes.string,
}.isRequired;

export default DetalhesBebida;
