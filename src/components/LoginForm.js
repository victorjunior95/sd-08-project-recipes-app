import React, { useState } from 'react';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validation = () => {
    const reGex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const PASSWORD_LENGTH = 6;
    if (password.length > PASSWORD_LENGTH && reGex.test(email)) {
      return false;
    }
    return true;
  };

  return (
    <form>
      <input
        data-testid="email-input"
        type="email"
        name="email"
        id="email"
        placeholder="Digite seu e-mail"
        onChange={ (e) => setEmail(e.target.value) }
      />
      <input
        data-testid="password-input"
        type="password"
        name="password"
        id="password"
        placeholder="Senha"
        onChange={ (e) => setPassword(e.target.value) }
      />
      <button
        data-testid="login-submit-btn"
        type="button"
        name="login-button"
        id="login-button"
        disabled={ validation() }
      >
        Entrar
      </button>
    </form>
  );
}

export default LoginForm;
