import React, { useState } from 'react';
import { Redirect } from 'react-router';
import { setLocalStorage } from '../../services/localStorage';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);

  const changeStorage = () => {
    const userEmail = { email };
    setLocalStorage('mealsToken', 1);
    setLocalStorage('cocktailsToken', 1);
    setLocalStorage('user', userEmail);
    setRedirect(true);
  };

  const validate = () => {
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const minChars = 6;
    if ((email !== '' && emailRegex.test(email)) && (password.length > minChars)) {
      return false;
    }
    return true;
  };

  if (redirect) return <Redirect to="/comidas" />;
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
