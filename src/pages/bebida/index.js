import React from 'react';
import Header from '../../components/Header';
import SearchBarDrink from '../../components/SearchBarDrink';
import CardDrink from '../../components/CardDrink';

function Bebida() {
  return (
    <section>
      <Header>Bebidas</Header>
      <SearchBarDrink />
      <CardDrink />
    </section>
  );
}

export default Bebida;
