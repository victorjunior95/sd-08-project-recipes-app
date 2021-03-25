import React from 'react';
import Header from '../../components/Header';
import CardDrink from '../../components/Cards/CardDrink';
import SearchBarDrink from '../../components/SearchBarDrink';
import Footer from '../../components/footer';
import DrinkCategoryBar from '../../components/DrinkCategoryBar';

function Bebida() {
  return (
    <section>
      <Header component={ <SearchBarDrink /> }>Bebidas</Header>
      <DrinkCategoryBar />
      <CardDrink />
      <Footer />
    </section>
  );
}

export default Bebida;
