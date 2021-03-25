import React, { useContext } from 'react';
import Header from '../components/Header';
import MyContext from '../context/MyContext';
import Cards from '../components/Cards';
import Footer from '../components/Footer';
import Categorys from '../components/Categorys';

function Bebidas() {
  const {
    createCards,
  } = useContext(MyContext);

  return (
    <div>
      <Header title="Bebidas" explore />
      <Categorys title="Bebidas" />
      {createCards ? <Cards title="Bebidas" /> : null}
      <Footer />
    </div>
  );
}

export default Bebidas;
