import React from 'react';
import { ExploreByWhat } from '../../components/Buttons';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

function ExplorerDrink() {
  return (
    <div>
      <Header name="Explorar Bebidas" icon="true" />
      <ExploreByWhat
        label="categorias"
        path="bebidas"
      />
      <Footer />
    </div>
  );
}

export default ExplorerDrink;
