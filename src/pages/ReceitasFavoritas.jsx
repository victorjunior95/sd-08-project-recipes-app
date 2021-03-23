import React, { useContext, useEffect } from 'react';
import ContextReceitas from '../context/ContextReceitas';
import Header from '../components/Header';

function ReceitasFavoritas() {
  const {
    enviarTituloDaPagina,
    mudarStatusBotaoPesquisa,
  } = useContext(ContextReceitas);
  useEffect(() => {
    enviarTituloDaPagina('Receitas Favoritas');
    mudarStatusBotaoPesquisa(false);
  }, []);
  return (
    <div>
      <Header />
    </div>
  );
}

export default ReceitasFavoritas;
