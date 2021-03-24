import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ContextReceitas from './ContextReceitas';

function ProviderReceitas({ children }) {
  const [logedIn, setLoged] = useState(0);
  const [bebidas, setBebidas] = useState([]);
  const [comidas, setComidas] = useState();

  const allContext = {
    logedIn,
    setLoged,
    bebidas,
    setBebidas,
    comidas,
    setComidas,

  };

  return (
    <ContextReceitas.Provider value={ { ...allContext } }>
      { children }
    </ContextReceitas.Provider>
  );
}

export default ProviderReceitas;
ProviderReceitas.propTypes = {
  children: PropTypes.element.isRequired,
};
