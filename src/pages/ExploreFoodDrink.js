import React from 'react';
import { useHistory } from 'react-router-dom';

function ExploreFoodDrink() {
  const history = useHistory();
  const foodDrinks = history.location.pathname.split('/');
  return (
    <div>
      {
        history.location.pathname === '/explorar/comidas'
         && <button
           onClick={ () => history.push('/explorar/comidas/area') }
           data-testid="explore-by-area"
           type="button"
         >
           Por Local de Origem

         </button>
      }
      <button
        onClick={ () => history.push(`/explorar/${foodDrinks[2]}/ingredientes`) }
        data-testid="explore-by-ingredient"
        type="button"
      >
        Por Ingredientes

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
