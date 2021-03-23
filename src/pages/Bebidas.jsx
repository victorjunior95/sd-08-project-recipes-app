import React, { useContext, useEffect } from 'react';
import ContextReceitas from '../context/ContextReceitas';
import Header from '../components/Header';
import Footer from '../components/Footer';
// import ContextReceitas from '../context/ContextReceitas';

// const Bebidas = () => (<h1>Sou Bebidas</h1>);

function Bebidas() {
  const {
    enviarTituloDaPagina,
    mudarStatusBotaoPesquisa,
  } = useContext(ContextReceitas);
  useEffect(() => {
    enviarTituloDaPagina('Bebidas');
    mudarStatusBotaoPesquisa(true);
  }, []);
  return (
    <div>
      <Header />
      <h1>Bebidas</h1>
      <Footer />
    </div>
  );
}

export default Bebidas;
