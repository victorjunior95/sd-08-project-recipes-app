import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

function ExplorarComidas() {
  return (
    <div>
      <Header title="Explorar Comidas" explore={ false } />
      <Footer />
    </div>
  );
}

export default ExplorarComidas;
