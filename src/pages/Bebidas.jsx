import React, { useContext, useEffect } from 'react';
import { Redirect } from 'react-router';
import ContextReceitas from '../context/ContextReceitas';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CartaoReceitaBebidas from '../components/CartaoReceitaBebidas';

function Bebidas() {
  const {
    apiResult,
    tituloDaPagina,
    enviarTituloDaPagina,
    mudarStatusBotaoPesquisa,
    categoriasBebidas,
  } = useContext(ContextReceitas);

  useEffect(() => {
    enviarTituloDaPagina('Bebidas');
    mudarStatusBotaoPesquisa(true);
  }, []);

  return (
    <div>
      <Header />
      {!categoriasBebidas
        ? <h1>Carregando ...</h1>
        : categoriasBebidas.map(({ strCategory }) => (
          <button
            type="button"
            key={ strCategory }
            data-testid={ `${strCategory}-category-filter` }
          >
            {strCategory}
          </button>))}

      {apiResult !== null
      && apiResult.length === 1
      && tituloDaPagina === 'Bebidas'
        ? <Redirect to={ `/bebidas/${apiResult[0].idDrink}` } /> : false }
      {apiResult !== null
      && apiResult.length > 1
      && <CartaoReceitaBebidas />}
      <Footer />
    </div>
  );
}

export default Bebidas;
