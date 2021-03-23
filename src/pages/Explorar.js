import React from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import HeaderWithoutSearch from '../components/HeaderWithoutSearch';

function Explorar() {
  const history = useHistory();
  return (
    <div>
      <HeaderWithoutSearch />
      <button
        type="button"
        data-testid="explore-food "
        onClick={ () => {
          history.push('/comidas');
        } }
      >
        Explorar Comidas
      </button>
      <button
        type="button"
        data-testid="explore-drinks"
        onClick={ () => {
          history.push('/bebidas');
        } }
      >
        Explorar Bebidas
      </button>
      <Footer />
    </div>
  );
}

export default Explorar;
