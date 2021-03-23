import React from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import HeaderWithoutSearch from '../components/HeaderWithoutSearch';

function ExplorarBebidas() {
  const history = useHistory();
  return (
    <div>
      <HeaderWithoutSearch />
      <button
        type="button"
        data-testid="explore-by-ingredient"
        onClick={ () => {
          history.push('/explorar/bebidas/ingredientes');
        } }
      >
        Por Ingredientes
      </button>
      <button
        type="button"
        data-testid="explore-surprise"
        onClick={ () => {
          history.push('/'); // endpoint: https://www.thecocktaildb.com/api/json/v1/1/random.php
        } }
      >
        Me surpreenda!
      </button>
      <Footer />
    </div>
  );
}

export default ExplorarBebidas;
