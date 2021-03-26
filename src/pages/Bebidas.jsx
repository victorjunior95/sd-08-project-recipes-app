import React, { useContext, useEffect, useState } from 'react';
import { Redirect } from 'react-router';
import ContextReceitas from '../context/ContextReceitas';
import { fetchBebidasAPI } from '../services/fetchBebidas';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CartaoReceitaBebidas from '../components/CartaoReceitaBebidas';
import { buscarBebidasPorCategoria } from '../services/buscarCategoriasBebidas';

function Bebidas() {
  const {
    apiResult,
    tituloDaPagina,
    enviarTituloDaPagina,
    mudarStatusBotaoPesquisa,
    categoriasBebidas,
    bebidas,
    setBebidas,
    setlistaDeCategoria,
    listaDeCategoria,
    toggle,
    setToggle,
    deveriaRedirecionar,
    setDeveriaRedirecionar,
  } = useContext(ContextReceitas);

  const [clickInfo, setClickInfo] = useState('Primeira Vez');

  useEffect(() => {
    async function listaBebidasAPI() {
      const bebidasAPI = await fetchBebidasAPI();
      setBebidas(bebidasAPI);
    }
    listaBebidasAPI();
    enviarTituloDaPagina('Bebidas');
    mudarStatusBotaoPesquisa(true);
  }, []);

  async function handleClick({ target: { name, id } }) {
    const novasBebidas = await buscarBebidasPorCategoria(name);
    setlistaDeCategoria(novasBebidas);
    setClickInfo(id);
    if (clickInfo === 'Primeira Vez') return setToggle(!toggle);
    if (clickInfo !== id) return setToggle(false);
    setToggle(!toggle);
  }

  function clickHandle() {
    setDeveriaRedirecionar(!deveriaRedirecionar);
  }

  function handleClickAll() {
    setToggle(true);
  }

  return (
    <div>
      <Header />
      {!categoriasBebidas
        ? <h1>Carregando ...</h1>
        : categoriasBebidas.map(({ strCategory }) => (
          <button
            type="button"
            key={ strCategory }
            name={ strCategory }
            data-testid={ `${strCategory}-category-filter` }
            onClick={ handleClick }
          >
            {strCategory}
          </button>))}
      <button
        type="button"
        key="all"
        name="all"
        id="all"
        data-testid="All-category-filter"
        onClick={ handleClickAll }
      >
        All
      </button>

      { bebidas && toggle
      && <CartaoReceitaBebidas resultadoApi={ bebidas } click={ clickHandle } /> }
      { bebidas && !toggle && listaDeCategoria !== undefined
        ? <CartaoReceitaBebidas resultadoApi={ listaDeCategoria } click={ clickHandle } />
        : false }

      {apiResult !== null
      && apiResult.length === 1
      && tituloDaPagina === 'Bebidas'
        ? <Redirect to={ `/bebidas/${apiResult[0].idDrink}` } /> : false }
      {apiResult !== null
      && apiResult.length > 1
      && <CartaoReceitaBebidas resultadoApi={ apiResult } click={ clickHandle } />}
      <Footer />
    </div>

  );
}
export default Bebidas;
