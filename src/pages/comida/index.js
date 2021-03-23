import React, { useContext } from 'react';
import Header from '../../components/Header';
import CardFood from '../../components/CardFood';
import SearchBarFood from '../../components/SearchBarFood';
import FoodContext from '../../context/comidaContext/FoodContext';
import Footer from '../../components/footer';

function Comida() {
  const { values: { mealArray } } = useContext(FoodContext);
  console.log(mealArray);

  return (
    <section>
      <Header component={ <SearchBarFood /> }>Comidas</Header>
      <CardFood />
      <Footer />
    </section>
  );
}

export default Comida;
