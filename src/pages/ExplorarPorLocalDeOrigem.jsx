import React, { useContext, useEffect } from 'react';
import ContextReceitas from '../context/ContextReceitas';
import Header from '../components/Header';
import Footer from '../components/Footer';

function ExplorarPorLocalDeOrigem() {
  const {
    enviarTituloDaPagina,
    mudarStatusBotaoPesquisa,
  } = useContext(ContextReceitas);
  useEffect(() => {
    enviarTituloDaPagina('Explorar Origem');
    mudarStatusBotaoPesquisa(true);
  }, []);
  return (
    <div>
      <Header />
      <Footer />
    </div>
  );
}

export default ExplorarPorLocalDeOrigem;
