import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

export default function Provider({ children }) {
  const [searchParams, setSearchParams] = useState({
    searchInput: '',
    selectedParameter: '',
  });

  const context = { searchParams, setSearchParams };

  return <Context.Provider value={ context }>{children}</Context.Provider>;
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
