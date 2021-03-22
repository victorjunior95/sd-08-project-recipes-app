import React from 'react';
import Input from '../components/Input';
import Button from '../components/Button';

const Login = () => {
  console.log('login');
  return (
    <form>
      <Input
        name="email"
        type="email"
        placeholder="Email"
        data-testid="email-input"
      />
      <Input
        name="password"
        type="password"
        placeholder="Senha"
        data-testid="password-input"
      />
      <Button name="Entrar" data-testid="login-submit-btn" />
    </form>
  );
};

export default Login;
