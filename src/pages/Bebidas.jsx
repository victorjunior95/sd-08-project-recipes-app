import React, { useContext, useEffect } from 'react';
import { Redirect } from 'react-router';
import ContextReceitas from '../context/ContextReceitas';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CartaoReceitaBebidas from '../components/CartaoReceitaBebidas';
// import ContextReceitas from '../context/ContextReceitas';

// const Bebidas = () => (<h1>Sou Bebidas</h1>);

function Bebidas() {
  const {
    apiResult,
    tituloDaPagina,
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
      {apiResult === null
      && window.alert('Sinto muito, não encontramos nenhuma receita para esses filtros.')}
      {apiResult !== null
      && apiResult.length === 1
      && tituloDaPagina === 'Bebidas'
        ? <Redirect to={ `/bebidas/${apiResult[0].idDrink}` } /> : false }
      {apiResult !== null && apiResult.length > 1 && <CartaoReceitaBebidas />}

      <Footer />
    </div>
  );
}

export default Bebidas;
