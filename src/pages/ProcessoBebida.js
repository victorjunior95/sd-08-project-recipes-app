import React from 'react';
import RecipeDetails from '../components/RecipeDetails';

function ProcessoBebida() {
  console.log('cheguei aqui');
  return (
    <main>
      <RecipeDetails recipeType="Drink" status="ongoing" />
    </main>
  );
}

export default ProcessoBebida;
