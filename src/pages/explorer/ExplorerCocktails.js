import React from 'react';
import ExploreFoodOrDrink from '../../components/ExploreFoodOrDrink';
import Footer from '../../components/footer/Footer';
import Header from '../../components/Header';

export default function ExplorerCocktails() {
  return (
    <div>
      <Header title="Explorar Bebidas" search="false" />
      <ExploreFoodOrDrink foodOrDrink="bebidas" id={ 1 } />
      <Footer />
    </div>
  );
}
