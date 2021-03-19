import React from 'react';
import Button from 'react-bootstrap/Button'

function LoginComponent() {
  return (
    <div>
      <label htmlFor="email">
        Email:
        <input
          type="email"
          data-testid="email-input"
          name="email"
        />
      </label>
      <label htmlFor="password">
        Senha:
        <input
          type="password"
          data-testid="password-input"
          name="password"
        />
      </label>
      <Button
        variant="success"
        data-testid="login-submit-btn"
      >
        Entrar
      </Button>
    </div>
  );
}

export default LoginComponent;
