import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import Header from './Header';
import Footer from './Footer';

function Bebidas() {
  const estado = useSelector((state) => state.api);
  const history = useHistory();

  useEffect(() => {
    if (estado.data === 'SN') {
      console.log('Sem filtros');
    } else if (estado.data.drinks.length === 1) {
      history.push(`/bebidas/${estado.data.drinks[0].idDrink}`);
    } else if (estado.data.drinks.length > 1) {
      console.log('fazer map');
    }
  }, [estado, history]);

  return (
    <>
      <Header title="Bebidas" />
      <h2>Bebidas</h2>
      <Footer />
    </>
  );
}

export default Bebidas;
