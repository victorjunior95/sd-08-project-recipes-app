import React from 'react';
import Header from '../../components/Header';
import SearchBarFood from '../../components/SearchBarFood';
import CardFood from '../../components/CardFood';

function Comida() {
  return (
    <section>
      <Header>Comidas</Header>
      <SearchBarFood />
      <CardFood />
    </section>
  );
}

export default Comida;
