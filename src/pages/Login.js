import React, { useContext } from 'react';
import Context from '../context/Context';

function Login() {
  const {
    setEmail,
    setPassword,
    buttonAble,
    handleClick,
  } = useContext(Context);
  return (
    <>
      <input
        type="text"
        name="email"
        placeholder="Email"
        data-testid="email-input"
        onChange={ ({ target }) => setEmail(target.value) }
      />
      <input
        type="password"
        name="password"
        placeholder="Senha"
        data-testid="password-input"
        onChange={ ({ target }) => setPassword(target.value) }
      />
      <button
        type="button"
        data-testid="login-submit-btn"
        disabled={ !buttonAble() }
        onClick={ handleClick }
      >
        Entrar
      </button>
    </>
  );
}

export default Login;
