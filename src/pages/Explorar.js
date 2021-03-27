import React from 'react';
import Footer from '../components/Footer';
import HeaderP from '../components/HeaderP';
import LinkButton from '../components/LinkButton';

function Explorar() {
  return (
    <>
      <HeaderP title="Explorar" />
      <main>
        <LinkButton
          path="/explorar/comidas"
          attribute="explore-food"
          name="Explorar Comidas"
        />
        <LinkButton
          path="/explorar/bebidas"
          attribute="explore-drinks"
          name="Explorar Bebidas"
        />
      </main>
      <Footer />
    </>
  );
}

export default Explorar;
