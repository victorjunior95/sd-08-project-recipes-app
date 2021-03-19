import React from 'react';

function LoginForm() {
  return (
    <>
      <label htmlFor="email">
        Email:
        <input name="email" type="email" data-testid="email-input" />
      </label>
      <label htmlFor="password">
        Password:
        <input name="password" type="password" data-testid="password-input" />
      </label>
      <button type="button" data-testid="login-submit-btn">Entrar</button>
    </>
  );
}

export default LoginForm;
