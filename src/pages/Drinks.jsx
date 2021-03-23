import React from 'react';
import Header from '../components/Header';
import SearchButton from '../components/SearchButton';

function Drinks() {
  return (
    <Header label="Bebidas" Search={ SearchButton } />
  );
}

export default Drinks;
