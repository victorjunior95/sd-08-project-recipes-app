import React, { useContext } from 'react';
import './Login.css';
import { LoginAndFoodContext } from '../context/ContextFood';

function Login() {
  const dataContext = useContext(LoginAndFoodContext);

  const {
    handleSubmit,
    handleChangeEmail,
    handleChangePassword,
    checkValidity,
  } = dataContext;
  return (
    <div className="container-fomr-login">
      <form onSubmit={ (e) => handleSubmit(e) }>
        <label className="label-login-form" htmlFor="email-input">
          Email
          <input
            onChange={ (e) => handleChangeEmail(e.target.value) }
            id="email-input"
            data-testid="email-input"
          />
        </label>
        <label className="label-login-form" htmlFor="password-input">
          Senha
          <input
            onChange={ (e) => handleChangePassword(e.target.value) }
            id="password-input"
            data-testid="password-input"
          />
        </label>
        <button
          disabled={ checkValidity() }
          id="login-submit-btn"
          type="submit"
          data-testid="login-submit-btn"
        >
          Entrar
        </button>
      </form>
    </div>
  );
}

export default Login;
