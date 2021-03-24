import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function ExplorarComidas() {
  return (
    <div>
      <Header title="Explorar Comidas" explore={ false } />
      <Footer />
    </div>
  );
}

export default ExplorarComidas;
