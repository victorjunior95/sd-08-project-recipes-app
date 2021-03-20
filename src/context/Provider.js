import React, { useState } from 'react';
import { PropTypes } from 'prop-types';

import Context from './Context';

function Provider({ children }) {
  const [teste, setTeste] = useState('oi');
  setTeste('tchau');
  const value = { teste };

  return (
    <Context.Provider value={ value }>
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
