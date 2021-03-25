import React, { useContext, useEffect } from 'react';
import ContextReceitas from '../context/ContextReceitas';
import Header from '../components/Header';
import Footer from '../components/Footer';

function ExplorarBebidasOuComidas() {
  const {
    enviarTituloDaPagina,
    mudarStatusBotaoPesquisa,
  } = useContext(ContextReceitas);
  useEffect(() => {
    enviarTituloDaPagina('Explorar Bebidas Ou Comidas');
    mudarStatusBotaoPesquisa(false);
  }, []);
  return (
    <div>
      <Header />
      <Footer />
    </div>
  );
}

export default ExplorarBebidasOuComidas;
