import React, { useState, useEffect } from 'react';
import ContextReceitas from './ContextReceitas';

const teste = { feijão: 'arroz' };

function ProviderReceitas({ children }) {
  const [receitas, setReceitas] = useState(teste);
  return (
    <ContextReceitas.Provider value={ { ...state, receitas } }>
      { children }
    </ContextReceitas.Provider>
  );
}

export default ProviderReceitas;
