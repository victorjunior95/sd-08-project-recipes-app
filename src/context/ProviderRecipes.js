import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ContextRecipes from './ContextRecipes';
import getComidasByName,
{ getComidasByIngredientes, getComidasByPrimeiraLetra }
  from '../services/BuscaNasAPIs';

function ProviderRecipes({ children }) {
  const headerInfoInitial = {
    pageTitle: 'Comidas',
    showSearch: true,
  };

  const barraBuscarInitial = {
    input: '',
    radio: '',
  };
  const [headerInfo, setHeaderInfo] = useState(headerInfoInitial);
  const [barraBuscar, setBarraBuscar] = useState(barraBuscarInitial);
  const [dataByBusca, setDataByBuscar] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const { input, radio } = barraBuscar;
      if (radio === 'nome') {
        const { meals } = await getComidasByName(input);
        setDataByBuscar({ meals });
      }
      if (radio === 'ingredientes') {
        const { meals } = await getComidasByIngredientes(input);
        setDataByBuscar({ meals });
      }
      if (radio === 'primeira letra') {
        if (barraBuscar.input.length === 1) {
          const { meals } = await getComidasByPrimeiraLetra(input);
          setDataByBuscar({ meals });
        } else {
          alert('Sua busca deve conter somente 1 (um) caracter');
        }
      }
      setIsFetching(false);
    }
    if (barraBuscar.radio !== '') {
      fetchData();
    }
  }, [barraBuscar]);

  return (
    <ContextRecipes.Provider
      value={
        {
          headerInfo,
          setHeaderInfo,
          barraBuscar,
          setBarraBuscar,
          dataByBusca,
          isFetching,
          setIsFetching }
      }
    >
      {children}
    </ContextRecipes.Provider>
  );
}

ProviderRecipes.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProviderRecipes;
