import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ContextReceitas from './ContextReceitas';
import buscarCategoriaBebida from '../services/buscarCategoriasBebidas';
import buscarCategoriaComida from '../services/buscarCategoriasComidas';

function ProviderReceitas({ children }) {
  const [logedIn, setLoged] = useState(0);
  const [tituloDaPagina, enviarTituloDaPagina] = useState('Comidas');
  const [statusBotaoPesquisa, mudarStatusBotaoPesquisa] = useState(true);
  const [categoriasComidas, setCategoriasComidas] = useState();
  const [categoriasBebidas, setCategoriasBebidas] = useState();

  const dados = {
    logedIn,
    setLoged,
    tituloDaPagina,
    enviarTituloDaPagina,
    statusBotaoPesquisa,
    mudarStatusBotaoPesquisa,
    categoriasBebidas,
    categoriasComidas,
  };

  useEffect(() => {
    async function funcBuscarCategoriaComida() {
      const categoriaComida = await buscarCategoriaComida();
      setCategoriasComidas(categoriaComida);
    }
    funcBuscarCategoriaComida();
  }, []);

  useEffect(() => {
    async function funcBuscarCategoriaBebida() {
      const categoriaBebida = await buscarCategoriaBebida();
      setCategoriasBebidas(categoriaBebida);
    }
    funcBuscarCategoriaBebida();
  }, []);

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
