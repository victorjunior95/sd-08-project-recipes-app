import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Explore() {
  return (
    <>
      <Header />
      <div>
        <Link
          data-testid="explore-food"
          to="/explorar/comidas"
        >
          Explorar Comidas
        </Link>
      </div>
      <div>
        <Link
          data-testid="explore-drinks"
          to="/explorar/bebidas"
        >
          Explorar Bebidas
        </Link>
      </div>
      <Footer />
    </>
  );
}

export default Explore;
