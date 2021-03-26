import React from 'react';
import Footer from '../components/Footer';
import HeaderPS from '../components/HeaderPS';
import RecipeList from '../components/RecipeList';
import RecipeCategory from '../components/RecipeCategory';

function Comidas() {
  return (
    <>
      <HeaderPS title="Comidas" endpoint="themealdb" />
      <RecipeCategory recipeType="meals" endpoint="themealdb" />
      <RecipeList route="comidas" recipeType="Meal" endpoint="themealdb" />
      <Footer />
    </>
  );
}

export default Comidas;
