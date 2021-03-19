import React from 'react';

function Login() {
  return (
    <div>
      <form action="">
        <label htmlFor="email">
          Digite seu email:
          <input
            id="email"
            placeholder="email@email.com"
            type="email"
            data-testid="email-input"
          />
        </label>
        <label htmlFor="password">
          Digite sua Senha:
          <input
            id="password"
            placeholder="Password"
            type="password"
            data-testid="password-input"
          />
        </label>
        <button data-testid="login-submit-btn" type="button"> Entrar </button>
      </form>
    </div>
  );
}

export default Login;
