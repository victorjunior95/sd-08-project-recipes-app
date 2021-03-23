import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Container from '../components/Container';

const Explore = () => (
  <Container>
    <Header title="Explorar" />
      <Link 
       to="/explorar/comidas"
       data-testid="explore-food"
      >
        Explorar Comidas
      </Link>
      <Link
       to="/explorar/bebidas"
       data-testid="explore-drinks"
      >
        Explorar Bebidas
      </Link>
    <Footer />
  </Container>
);

export default Explore;
