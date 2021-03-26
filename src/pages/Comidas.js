import React, { useContext } from 'react';
import Header from '../components/Header';
import MyContext from '../context/MyContext';
import Cards from '../components/Cards';
import Footer from '../components/Footer';
import Categorys from '../components/Categorys';

function Comidas() {
  const {
    createCards,
  } = useContext(MyContext);

  return (
    <div className="comidasContainer">
      <Header title="Comidas" explore />
      <Categorys title="Comidas" />
      {createCards ? <Cards title="Comidas" /> : null}
      <Footer />
    </div>
  );
}

export default Comidas;
