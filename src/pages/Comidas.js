import React from 'react';
import RecipesList from '../components/RecipesList';
import Footer from '../components/Footer';
import HeaderWithSearch from '../components/HeaderWithSearch';

function Comidas() {
  return (
    <div>
      <HeaderWithSearch />
      <RecipesList />
      <Footer />
    </div>
  );
}

export default Comidas;
