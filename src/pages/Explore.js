import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Container from '../components/Container';

const Explore = () => (
  <Container>
    <Header title="Explorar" />
      <a 
       href="/explorar/comidas"
       data-testid="explore-food"
      >
        Explorar Comidas
      </a>
      <a
       href="/explorar/bebidas"
       data-testid="explore-drinks"
      >
        Explorar Bebidas
      </a>
    <Footer />
  </Container>
);

export default Explore;
