import React, { useState } from 'react';

import Context from './Context';

function Provider({ children }) {
  const [teste, setTeste] = useState('oi');

  const value = { teste };

  return (
    <Context.Provider value={ value }>
      { children }
    </Context.Provider>
  );
}

export default Provider;
