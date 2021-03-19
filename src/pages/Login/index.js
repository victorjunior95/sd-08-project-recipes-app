import React from 'react';

export default function Login() {
  return (
    <section>
      <label htmlFor="email-input">
        <input type="text" data-testid="email-input" placeholder="Email" />
      </label>
      <label htmlFor="password-input">
        <input type="password" data-testid="password-input" placeholder="senha" />
      </label>
      <button type="submit" data-testid="login-submit-btn">
        Entrar
      </button>
    </section>
  );
}
