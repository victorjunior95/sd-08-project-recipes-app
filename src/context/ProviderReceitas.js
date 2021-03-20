import PropTypes from 'prop-types';
import React from 'react';
import ContextReceitas from './ContextReceitas';

const teste = { feijão: 'arroz' };

function ProviderReceitas({ children }) {
  return (
    <ContextReceitas.Provider value={ { ...state, teste } }>
      { children }
    </ContextReceitas.Provider>
  );
}

export default ProviderReceitas;
ProviderReceitas.propTypes = {
  children: PropTypes.element.isRequired,
};
