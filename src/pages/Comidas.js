import React, {useContext } from 'react';
import Header from '../components/Header';
import MyContext from '../context/MyContext';
import Cards from '../components/Cards';

function Comidas() {
  const {
    createCards,
  } = useContext(MyContext);

  return (
    <div>
      <Header title="Comidas" explore />
      {createCards ? <Cards /> : null}
    </div>
  );
}

export default Comidas;
