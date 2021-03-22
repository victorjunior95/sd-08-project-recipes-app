import React from 'react';
import { useHistory } from 'react-router-dom';

function ExploreFoodDrink() {
  const history = useHistory();
  return (
    <div>
      <button
        onClick={ () => history.push('/') }
        data-testid="explore-by-ingredient"
        type="button"
      >
        Por Ingredientes

      </button>
      <button
        onClick={ () => history.push('/') }
        data-testid="explore-by-area"
        type="button"
      >
        Por Local de Origem

      </button>
      <button
        onClick={ () => history.push('/') }
        data-testid="explore-surprise"
        type="button"
      >
        Me Surpreenda!

      </button>
    </div>
  );
}

export default ExploreFoodDrink;
