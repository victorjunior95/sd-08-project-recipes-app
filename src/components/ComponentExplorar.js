import React from 'react';
import { useHistory } from 'react-router-dom';

const ComponentExplorar = () => {
  const history = useHistory();

  return (
    <section className="buttons-explorar">
      <button
        type="button"
        data-testid="explore-food"
        onClick={ () => history.push('/explorar/comidas') }
      >
        Explorar Comidas
      </button>
      <button
        type="button"
        data-testid="explore-drinks"
        onClick={ () => history.push('/explorar/bebidas') }
      >
        Explorar Bebidas
      </button>
    </section>
  );
};

export default ComponentExplorar;
