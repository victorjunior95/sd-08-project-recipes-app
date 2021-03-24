import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Header from '../../../components/Header';
import Footer from '../../../components/footer';

import { getRandomFood } from '../../../services/API';

function ExplorarComida() {
  const [idFood, setIdFood] = useState();

  useEffect(() => {
    getRandomFood().then(({ meals: [{ idMeal }] }) => setIdFood(idMeal));
  }, []);
  return (
    <>
      <Header explore="false">Explorar Comidas</Header>
      <section>
        <Link to="/explorar/comidas/ingredientes">
          <button type="button" data-testid="explore-by-ingredient">
            Por Ingredientes
          </button>
        </Link>
        <Link to="/explorar/comidas/area">
          <button type="button" data-testid="explore-by-area">
            Por Local de Origem
          </button>
        </Link>
        <Link to={ `/comidas/${idFood}` }>
          <button type="button" data-testid="explore-surprise">
            Me Surpreenda!
          </button>
        </Link>
      </section>
      <Footer />
    </>
  );
}

export default ExplorarComida;
