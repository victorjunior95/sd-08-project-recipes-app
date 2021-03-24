import React, { useContext, useEffect } from 'react';
import ContextReceitas from '../context/ContextReceitas';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Comidas() {
  const {
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
      <Footer />
    </div>
  );
}

export default Comidas;
