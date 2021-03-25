import React from 'react';
import Header from '../components/Header';

function ReceitasFeitas() {
  const BOOLEAN_TRUE = true;
  return (
    <>
      <Header title="Receitas Feitas" disableBtn={ BOOLEAN_TRUE } />
      <div>RECEITAS FEITAS</div>
    </>
  );
}

export default ReceitasFeitas;
