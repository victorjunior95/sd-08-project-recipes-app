import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

function ExploreDrinksByIngredients() {
  return (
    <>
      <Header label="Explorar Ingredientes" Search={ () => '' } />
      <Footer />
    </>
  );
}

export default ExploreDrinksByIngredients;
