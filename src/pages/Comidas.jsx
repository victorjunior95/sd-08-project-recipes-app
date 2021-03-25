import React from 'react';
import styles from '../styles/comidas.module.css';
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
    categoriasComidas,
  } = useContext(ContextReceitas);

  useEffect(() => {
    enviarTituloDaPagina('Comidas');
    mudarStatusBotaoPesquisa(true);
  }, []);

  return (
    <div>
      <Header />
      {!categoriasComidas
        ? <h1>Carregando ...</h1>
        : categoriasComidas.map(({ strCategory }) => (
          <button
            type="button"
            key={ strCategory }
            data-testid={ `${strCategory}-category-filter` }
          >
            {strCategory}
          </button>))}
      {apiResult !== null
      && apiResult.length === 1 && tituloDaPagina === 'Comidas'
        ? <Redirect to={ `/comidas/${apiResult[0].idMeal}` } /> : false }
      {apiResult !== null
      && apiResult.length > 1
      && <CartaoReceitaComidas />}
      <Footer />
    </div>
  );
}

export default Comidas;
