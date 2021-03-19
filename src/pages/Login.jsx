import React, { useState } from 'react';
import Button from '../components/Button';
import Input from '../components/Inputs';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <fieldset>
      <Input
        type="text"
        datatestid="email-input"
        label="Email"
        name={ email }
        value={ email }
        onChange={ (e) => setEmail(e.target.value) }
      />
      <Input
        type="password"
        label="Senha"
        name={ password }
        onChange={ (e) => setPassword(e.target.value) }
        datatestid="password-input"
      />
      <Button
        label="Entrar"
        datatestid="login-submit-btn"
        // onClick={ () => ) }
      />
    </fieldset>

  );
};

export default Login;
