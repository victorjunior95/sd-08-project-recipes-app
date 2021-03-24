import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../components/Button';
import Header from '../components/Header';

function ExploreFoodDrink() {
  const history = useHistory();
  const { pathname } = history.location;
  const foodDrinks = history.location.pathname.split('/');
  return (
    <main>
      <Header />
      { pathname === '/explorar/comidas' && <Button /> }
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

    </main>
  );
}

export default ExploreFoodDrink;
