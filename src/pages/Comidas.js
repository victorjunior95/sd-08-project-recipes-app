import React from 'react';
import Footer from '../components/Footer';
import HeaderPS from '../components/HeaderPS';
import RecipeList from '../components/RecipeList';

function Comidas() {
  return (
    <>
      <HeaderPS title="Comidas" endpoint="themealdb" />
      <RecipeList route="comidas" recipeType="Meal" />
      <Footer />
    </>
  );
}

export default Comidas;
