import React, { useContext, useEffect } from 'react';
import ContextReceitas from '../context/ContextReceitas';
import Header from '../components/Header';

function ReceitasFeitas() {
  const {
    enviarTituloDaPagina,
    mudarStatusBotaoPesquisa,
  } = useContext(ContextReceitas);
  useEffect(() => {
    enviarTituloDaPagina('Receitas Feitas');
    mudarStatusBotaoPesquisa(false);
  }, []);
  return (
    <div>
      <Header />
    </div>
  );
}

export default ReceitasFeitas;
