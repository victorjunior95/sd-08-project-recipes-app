import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import Header from './Header';
import Footer from './Footer';

function Comidas() {
  const estado = useSelector((state) => state.api);
  console.log(estado);
  const history = useHistory();

  useEffect(() => {
    if (estado.data === 'SN') {
      console.log('Sem filtros');
    } else if (estado.data.meals === null) {
      console.log('Entrou null');
    } else if (estado.data.meals.length === 1) {
      history.push(`/comidas/${estado.data.meals[0].idMeal}`);
    } else if (estado.data.meals.length > 1) {
      console.log('fazer map');
    }
  }, [estado, history]);
  return (
    <>
      <Header title="Comidas" />
      <h2>Comidas</h2>
      <Footer />
    </>
  );
}

export default Comidas;
