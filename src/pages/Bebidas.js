import React from 'react';
import Footer from '../components/Footer';
import HeaderPS from '../components/HeaderPS';
import RecipeList from '../components/RecipeList';

function Bebidas() {
  return (
    <>
      <HeaderPS title="Bebidas" endpoint="thecocktaildb" />
      <RecipeList route="bebidas" recipeType="Drink" endpoint="thecocktaildb" />
      <Footer />
    </>
  );
}

export default Bebidas;
