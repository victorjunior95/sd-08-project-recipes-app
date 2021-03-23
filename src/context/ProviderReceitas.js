import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ContextReceitas from './ContextReceitas';

function ProviderReceitas({ children }) {
  const [logedIn, setLoged] = useState(0);
  const [tituloDaPagina, enviarTituloDaPagina] = useState('Comidas');
  const [statusBotaoPesquisa, mudarStatusBotaoPesquisa] = useState(true);
  const dados = {
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
