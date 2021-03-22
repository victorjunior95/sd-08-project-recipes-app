import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ContextRecipes from './ContextRecipes';

function ProviderRecipes({ children }) {
  const headerInfoInitial = {
    pageTitle: 'Comidas',
    showSearch: true,
  };

  const [headerInfo, setHeaderInfo] = useState(headerInfoInitial);

  const data = {
    headerInfo,
    setHeaderInfo,
  };

  return (
    <ContextRecipes.Provider value={ data }>
      {children}
    </ContextRecipes.Provider>
  );
}

ProviderRecipes.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProviderRecipes;
