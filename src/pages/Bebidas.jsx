import React, { useContext, useEffect } from 'react';
import { Redirect } from 'react-router';
import ContextReceitas from '../context/ContextReceitas';
import { fetchBebidasAPI } from '../services/fetchBebidas';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CartaoReceitaBebidas from '../components/CartaoReceitaBebidas';

// const CINQUENTA = 50;
function Bebidas() {
  const {
    apiResult,
    tituloDaPagina,
    enviarTituloDaPagina,
    mudarStatusBotaoPesquisa,
    categoriasBebidas,
    // bebidas,
    setBebidas,
  } = useContext(ContextReceitas);

  useEffect(() => {
    async function listaBebidasAPI() {
      const bebidasAPI = await fetchBebidasAPI();
      setBebidas(bebidasAPI);
    }
    listaBebidasAPI();
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

      {/* { bebidas && bebidas.map((bebida, index) => (
        <div data-testid={ `${index}-recipe-card` } key={ bebida.idDrink }>
          <img
            width={ `${CINQUENTA}vh` }
            data-testid={ `${index}-card-img` }
            src={ bebida.strDrinkThumb }
            alt={ bebida.strDrink }
          />
          <p data-testid={ `${index}-card-name` }>{ bebida.strDrink }</p>
        </div>
      ))} */}

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
