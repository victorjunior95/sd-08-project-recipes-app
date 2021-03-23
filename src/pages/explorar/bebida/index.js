import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../../components/Header';
import Footer from '../../../components/footer';

function ExplorarBebida() {
  return (
    <>
      <Header explore="false">Explorar Bebidas</Header>
      <section>
        <Link to="/explorar/bebidas/ingredientes">
          <button type="button" data-testid="explore-by-ingredient">
            Por Ingredientes
          </button>
        </Link>
        <button type="button" data-testid="explore-surprise">
          Me Surpreenda!
        </button>
      </section>
      <Footer />
    </>
  );
}

export default ExplorarBebida;
