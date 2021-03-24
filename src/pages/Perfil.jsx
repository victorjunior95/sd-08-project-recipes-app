import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Perfil() {
  const BOOLEAN_TRUE = true;
  return (
    <>
      <Header title="Perfil" searchBtn={ BOOLEAN_TRUE } />
      <Footer />
    </>
  );
}

export default Perfil;
