import React from 'react';
import ExploreIngredients from '../components/explorer/ExploreIngredients';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';

export default function Ingredientes() {
  return (
    <div>
      <Header title="Ingredientes" showSearchButton={ false } />
      <ExploreIngredients />
      <Footer />
    </div>
  );
}
