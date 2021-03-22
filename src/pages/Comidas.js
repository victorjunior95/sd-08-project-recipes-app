import React from 'react';
import HeaderPS from '../components/HeaderPS';
import RecipeList from '../components/RecipeList';

function Comidas() {
  return (
    <>
      <HeaderPS title="Comidas" endpoint="themealdb" />
      <RecipeList route="comidas" recipeType="Meal" />
    </>
  );
}

export default Comidas;
