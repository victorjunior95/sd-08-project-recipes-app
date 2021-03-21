import React from 'react';
import { useHistory } from 'react-router';

function ExploreDrinksByIngredientsButton() {
  const history = useHistory();
  return (
    <button
      onClick={ () => history.push('/explorar/bebidas/ingredientes') }
      className="btnz btn btn-primary"
      type="button"
    >
      Por Ingredientes
    </button>
  );
}

export default ExploreDrinksByIngredientsButton;
