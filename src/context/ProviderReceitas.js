import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ContextReceitas from './ContextReceitas';
import resultadoApiComidas from '../services/fetchComidas';
import resultadoApiBebidas from '../services/fetchBebidas';

function ProviderReceitas({ children }) {
  const [logedIn, setLoged] = useState(0);
  const [search, setSearch] = useState({ type: 's' });
  const [apiResult, setApiResult] = useState([]);
  const [tituloDaPagina, enviarTituloDaPagina] = useState('Comidas');
  const [statusBotaoPesquisa, mudarStatusBotaoPesquisa] = useState(true);

  useEffect(() => {
    async function fetchComida() {
      if (search.type === 'f' && search.search.length > 1) {
        return window.alert('Sua busca deve conter somente 1 (um) caracter');
      }
      const comidasResultado = tituloDaPagina === 'Comidas'
        ? await resultadoApiComidas(search.type, search.search)
        : await resultadoApiBebidas(search.type, search.search);

      setApiResult(comidasResultado);
    }
    fetchComida();
  }, [search]);
  const dados = {
    search,
    setSearch,
    apiResult,
    setApiResult,
    logedIn,
    setLoged,
    tituloDaPagina,
    enviarTituloDaPagina,
    statusBotaoPesquisa,
    mudarStatusBotaoPesquisa,
  };
  return (
    <ContextReceitas.Provider value={ dados }>
      { children }
    </ContextReceitas.Provider>
  );
}

export default ProviderReceitas;

ProviderReceitas.propTypes = {
  children: PropTypes.element.isRequired,
};
