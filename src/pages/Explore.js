import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Explore() {
  return (
    <>
      <Header />
      <Link
        data-testid="explore-food"
        style={ { display: 'block' } }
        to="/explorar/comidas"
      >
        Explorar Comidas
      </Link>
      <Link
        data-testid="explore-drinks"
        style={ { display: 'block' } }
        to="/explorar/bebidas"
      >
        Explorar Bebidas
      </Link>
      <Footer />
    </>
  );
}

export default Explore;
