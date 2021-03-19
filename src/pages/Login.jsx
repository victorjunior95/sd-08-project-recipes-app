import React, { useState } from 'react';
import Input from '../components/Inputs';

const Login = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <fieldset>
      <Input
        type="text"
        label="Nome"
        name={ name }
        onChange={ (e) => setName(e.target.value) }
        data-testid="email-input"
      />
      <Input
        type="password"
        label="Senha"
        name={ password }
        onChange={ (e) => setPassword(e.target.value) }
        data-testid="password-input"
      />
    </fieldset>

  );
};

export default Login;
