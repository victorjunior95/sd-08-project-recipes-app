import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Explore() {
  const history = useHistory();
  return (
    <main>
      <Header />
      <button
        onClick={ () => history.push('/explorar/comidas') }
        data-testid="explore-food"
        type="button"
      >
        Explorar Comidas
      </button>
      <button
        onClick={ () => history.push('/explorar/bebidas') }
        data-testid="explore-drinks"
        type="button"
      >
        Explorar Bebidas
      </button>
      <Footer />
    </main>
  );
}

export default Explore;
