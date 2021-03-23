import React from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import HeaderWithoutSearch from '../components/HeaderWithoutSearch';

function ExplorarComidas() {
  const history = useHistory();
  return (
    <div>
      <HeaderWithoutSearch />
      <h1>Explorar Comidas</h1>
      <button
        type="button"
        data-testid="explore-by-ingredient"
        onClick={ () => {
          history.push('/explorar/comidas/ingredientes');
        } }
      >
        Por Ingredientes
      </button>
      <button
        type="button"
        data-testid="explore-by-area"
        onClick={ () => {
          history.push('/explorar/comidas/area');
        } }
      >
        Por Local de Origem
      </button>
      <button
        type="button"
        data-testid="explore-surprise"
        onClick={ () => {
          history.push('/'); // endpoint: https://www.themealdb.com/api/json/v1/1/random.php
        } }
      >
        Me surpreenda!
      </button>
      <Footer />
    </div>
  );
}

export default ExplorarComidas;
