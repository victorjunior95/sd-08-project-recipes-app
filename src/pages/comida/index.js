import React from 'react';
import Header from '../../components/Header';
import CardFood from '../../components/Cards/CardFood';
import SearchBarFood from '../../components/SearchBarFood';
import Footer from '../../components/footer';

function Comida() {
  return (
    <section>
      <Header component={ <SearchBarFood /> }>Comidas</Header>
      <CardFood />
      <Footer />
    </section>
  );
}

export default Comida;
