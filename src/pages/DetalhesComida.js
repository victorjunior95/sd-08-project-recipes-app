import React, { useContext, useEffect } from 'react';
import Context from '../context/Context';
import RecipeDetails from '../components/RecipeDetails';

function DetalhesComida() {
  const { requestRecipeDetails } = useContext(Context);

  useEffect(() => {
    requestRecipeDetails('themealdb', '52771');
  }, []);

  return (
    <main>
      <RecipeDetails recipeType="Meal" />
    </main>
  );
}

export default DetalhesComida;
