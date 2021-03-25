import React from 'react';
import Header from '../../components/Header';
import CardFood from '../../components/Card/CardFood';
import SearchBarFood from '../../components/SearchBar/SearchBarFood';
import Footer from '../../components/footer';
import FoodCategoryBar from '../../components/CategoryBar/FoodCategoryBar';

function Comida() {
  return (
    <section>
      <Header component={ <SearchBarFood /> }>Comidas</Header>
      <FoodCategoryBar />
      <CardFood />
      <Footer />
    </section>
  );
}

export default Comida;
