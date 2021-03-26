import React from 'react';
import { ExploreByWhat } from '../../components/Buttons';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

function ExplorerFood() {
  return (
    <div>
      <Header name="Explorar Comidas" icon="true" />
      <ExploreByWhat
        label="categorias"
        path="comidas"
      />
      <Footer />
    </div>
  );
}

export default ExplorerFood;
