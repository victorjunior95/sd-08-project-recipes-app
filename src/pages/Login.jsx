import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router';
import ContextReceitas from '../context/ContextReceitas';

function Login() {
  const [info, setInfo] = useState({ email: '', password: '' });
  const { logedIn, setLoged } = useContext(ContextReceitas);
  function verificaEmailESenha(email, password) {
    const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
    const minCaracteres = 7;
    const result = emailRegex.test(email) && password >= minCaracteres;
    return !result;
  }

  function handleChange({ target: { name, value } }) {
    setInfo({ ...info, [name]: value });
  }
  function handleClick() {
    localStorage.setItem('mealsToken', '1');
    localStorage.setItem('cocktailsToken', '1');
    localStorage.setItem('user', JSON.stringify({ email: info.email }));
    setLoged(true);
  }

  return (
    <>
      <form>
        <div>
          <input
            className="login"
            type="email"
            name="email"
            id="email"
            data-testid="email-input"
            placeholder="Email"
            onChange={ handleChange }
          />
          {' '}
          <input
            className="login"
            type="password"
            name="password"
            id="password"
            data-testid="password-input"
            placeholder="Password"
            onChange={ handleChange }

          />
          <button
            className="login"
            type="button"
            data-testid="login-submit-btn"
            disabled={ verificaEmailESenha(info.email, info.password.length) }
            onClick={ handleClick }

          >
            Entrar
          </button>

        </div>
      </form>
      {logedIn ? <Redirect to="/comidas" /> : false }

    </>
  );
}
export default Login;
