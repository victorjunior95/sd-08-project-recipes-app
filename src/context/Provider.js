import React, { useState } from 'react';
import Context from './MyContext';

function Provider({ children }) {
  const [userEmail, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const contextValue = {
    userEmail,
    setEmail,
    password,
    setPassword,
  }
  return (<Context.Provider value={ contextValue }>
    { children }
  </Context.Provider>);
}

export default Provider;
