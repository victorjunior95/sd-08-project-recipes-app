import React from 'react';
import Header from '../components/Header';

function ReceitasFavoritas() {
  const BOOLEAN_TRUE = true;
  return (
    <>
      <Header title="Receitas Favoritas" disableBtn={ BOOLEAN_TRUE } />
      <div>RECEITAS Favoritas</div>
    </>
  );
}

export default ReceitasFavoritas;
