import React from 'react';
import HeaderPS from '../components/HeaderPS';
import RecipeList from '../components/RecipeList';

function Bebidas() {
  return (
    <>
      <HeaderPS title="Bebidas" endpoint="thecocktaildb" />
      <RecipeList route="bebidas" recipeType="Drink" />
    </>
  );
}

export default Bebidas;
