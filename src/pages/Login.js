import React, { useState } from 'react';
import { setMealsToken, setCocktailsToken } from '../services/storage';

const MIN_PASSWORD_LENGTH = 6;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function isFormValid() {
    return (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)
      && password.length > MIN_PASSWORD_LENGTH);
  }

  function handleLogin() {
    setMealsToken('1');
    setCocktailsToken('1');
  }

  return (
    <form>
      <input
        type="text"
        data-testid="email-input"
        placeholder="Email"
        value={ email }
        onChange={ ({ target }) => setEmail(target.value) }
      />
      <input
        type="password"
        data-testid="password-input"
        placeholder="Senha"
        value={ password }
        onChange={ ({ target }) => setPassword(target.value) }
      />
      <button
        data-testid="login-submit-btn"
        type="button"
        disabled={ !isFormValid() }
        onClick={ handleLogin }
      >
        Login
      </button>
    </form>
  );
};

export default Login;
