import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';

function Explorar() {
  return (
    <section>
      <Header explore="false">Explorar</Header>
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
  );
}

export default Explorar;
