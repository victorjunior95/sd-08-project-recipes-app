import React, { useState } from 'react';
import { setLocalStorage } from '../../services/localStorage';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const changeStorage = () => {
    setLocalStorage('mealsToken', 1);
    setLocalStorage('cocktailsToken', 1);
  };

  const validate = () => {
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const minChars = 6;
    if ((email !== '' && emailRegex.test(email)) && (password.length > minChars)) {
      return false;
    }
    return true;
  };

  return (
    <section>
      <label htmlFor="email-input">
        {console.log(validate())}
        <input
          type="text"
          value={ email }
          data-testid="email-input"
          placeholder="Email"
          onChange={ (e) => setEmail(e.target.value) }
        />
      </label>
      <label htmlFor="password-input">
        <input
          type="password"
          data-testid="password-input"
          placeholder="senha"
          value={ password }
          onChange={ (e) => setPassword(e.target.value) }
        />
      </label>
      <button
        type="submit"
        data-testid="login-submit-btn"
        onClick={ changeStorage }
        disabled={ validate() }
      >
        Entrar
      </button>
    </section>
  );
}
