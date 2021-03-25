import React from 'react';
import RecipeDetails from '../components/RecipeDetails';

function ProcessoComida() {
  console.log('cheguei aqui');
  return (
    <main>
      <RecipeDetails recipeType="Meal" status="ongoing" />
    </main>
  );
}

export default ProcessoComida;
