import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import Footer from '../../components/footer';

function Explorar() {
  return (
    <>
      <Header explore="false">Explorar</Header>
      <section>
        <Link to="/explorar/comidas">
          <button type="button" data-testid="explore-food">
            Explorar Comidas
          </button>
        </Link>
        <Link to="/explorar/bebidas" data-testid="explore-drinks">
          <button type="button">
            Explorar Bebidas
          </button>
        </Link>
      </section>
      <Footer />
    </>
  );
}

export default Explorar;
