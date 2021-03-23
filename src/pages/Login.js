import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as storage from '../services/storage';

import styles from '../styles/pages/Login.module.css';

const MIN_PASSWORD_LENGTH = 6;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  function isFormValid() {
    return (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)
      && password.length > MIN_PASSWORD_LENGTH);
  }

  function handleLogin() {
    storage.setMealsToken('1');
    storage.setCocktailsToken('1');
    storage.updateUser({ email });
    history.push('/comidas');
  }

  return (
    <div className={ styles.loginContainer }>
      <h1>Login</h1>
      <form className={ styles.loginForm }>
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
    </div>
  );
};

export default Login;
