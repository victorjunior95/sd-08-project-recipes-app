import React from 'react';
import DrinksList from '../components/DrinksList';
import Footer from '../components/Footer';
import HeaderWithSearch from '../components/HeaderWithSearch';

function Bebidas() {
  return (
    <div>
      <HeaderWithSearch />
      <DrinksList />
      <Footer />
    </div>
  );
}

export default Bebidas;
