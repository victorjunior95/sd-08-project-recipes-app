import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import Context from './Context';

export default function Provider({ children }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  function buttonAble() {
    const validEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const minOfCaracteres = 6;
    if (validEmail.test(email) && password.length > minOfCaracteres) {
      return true;
    }
    return false;
  }

  function handleClick() {
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
    localStorage.setItem('user', JSON.stringify({ email }));
    history.push('/comidas');
  }

  const context = {
    setEmail,
    setPassword,
    buttonAble,
    handleClick,
  };

  return (
    <Context.Provider value={ context }>{children}</Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
