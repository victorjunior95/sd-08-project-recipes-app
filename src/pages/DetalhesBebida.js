import React, { useContext, useEffect } from 'react';
import Context from '../context/Context';
import RecipeDetails from '../components/RecipeDetails';

function DetalhesBebida(recipeId) {
  const { requestRecipeDetails } = useContext(Context);

  useEffect(() => {
    requestRecipeDetails('thecocktaildb', recipeId);
  }, []);

  return (
    <main>
      <RecipeDetails recipeType="Drink" />
    </main>
  );
}

export default DetalhesBebida;
