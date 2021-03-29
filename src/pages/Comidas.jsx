import React, { useContext, useEffect } from 'react';
import { Redirect } from 'react-router';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CartaoReceitaComidas from '../components/CartaoReceitaComidas';
import ContextReceitas from '../context/ContextReceitas';
import { fetchComidasAPI } from '../services/fetchComidas';

// const CENTOEOITENTA = 180;
function Comidas() {
  const {
    // comidas,
    setComidas,
    apiResult,
    tituloDaPagina,
    enviarTituloDaPagina,
    mudarStatusBotaoPesquisa,
    categoriasComidas,
  } = useContext(ContextReceitas);

  useEffect(() => {
    async function listaComidasAPI() {
      const ComidasAPI = await fetchComidasAPI();
      setComidas(ComidasAPI);
    }
    listaComidasAPI();
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

      {/* { comidas && comidas.map((comida, index) => (
        <div data-testid={ `${index}-recipe-card` } key={ comida.idMeal }>
          <img
            width={ `${CENTOEOITENTA}vw` }
            data-testid={ `${index}-card-img` }
            src={ comida.strMealThumb }
            alt={ comida.strMeal }
          />
          <p data-testid={ `${index}-card-name` }>{ comida.strMeal }</p>
        </div>
      ))} */}

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
