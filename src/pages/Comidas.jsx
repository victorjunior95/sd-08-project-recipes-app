import React, { useContext, useEffect } from 'react';
import { Redirect } from 'react-router';
import ContextReceitas from '../context/ContextReceitas';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CartaoReceitaComidas from '../components/CartaoReceitaComidas';

function Comidas() {
  const {
    apiResult,
    tituloDaPagina,
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
      {apiResult === null
      && window.alert('Sinto muito, não encontramos nenhuma receita para esses filtros.')}
      {apiResult !== null
      && apiResult.length === 1 && tituloDaPagina === 'Comidas'
        ? <Redirect to={ `/comidas/${apiResult[0].idMeal}` } /> : false }
      {console.log(apiResult)}
      {apiResult !== null
      && apiResult.length > 1
      && <CartaoReceitaComidas />}
      <Footer />
    </div>
  );
}

export default Comidas;
