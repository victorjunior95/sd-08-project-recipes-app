import React, { useContext } from 'react';
import Header from '../components/Header';
import MyContext from '../context/MyContext';
import Cards from '../components/Cards';

function Bebidas() {
  const {
    createCards,
  } = useContext(MyContext);

  return (
    <div>
      <Header title="Bebidas" explore />
      {createCards ? <Cards /> : null}
    </div>
  );
}

export default Bebidas;
