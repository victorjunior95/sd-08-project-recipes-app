import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ContextReceitas from './ContextReceitas';

function ProviderReceitas({ children }) {
  const [logedIn, setLoged] = useState(0);
  return (
    <ContextReceitas.Provider value={ { logedIn, setLoged } }>
      { children }
    </ContextReceitas.Provider>
  );
}

export default ProviderReceitas;
ProviderReceitas.propTypes = {
  children: PropTypes.element.isRequired,
};
