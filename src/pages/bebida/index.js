import React from 'react';
import Header from '../../components/Header';
import CardDrink from '../../components/CardDrink';
import SearchBarDrink from '../../components/SearchBarDrink';

function Bebida() {
  return (
    <section>
      <Header component={ <SearchBarDrink /> }>Bebidas</Header>
      <CardDrink />
    </section>
  );
}

export default Bebida;
