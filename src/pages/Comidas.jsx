import React, { useContext, useEffect } from 'react';
import ContextReceitas from '../context/ContextReceitas';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Comidas() {
  const {
    enviarTituloDaPagina,
    mudarStatusBotaoPesquisa,
  } = useContext(ContextReceitas);
  useEffect(() => {
    enviarTituloDaPagina('Comidas');
    mudarStatusBotaoPesquisa(true);
  }, []);
  return (
    <div>
      <Header />
      <Footer />
    </div>
  );
}

export default Comidas;
