import React from 'react';
import Header from '../../components/Header';
import CardFood from '../../components/CardFood';
import SearchBarFood from '../../components/SearchBarFood';

function Comida() {
  return (
    <section>
      <Header component={ <SearchBarFood /> }>Comidas</Header>
      <CardFood />
    </section>
  );
}

export default Comida;
