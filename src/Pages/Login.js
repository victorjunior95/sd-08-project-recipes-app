import React from 'react';
import { Input, Button } from '../Components';

function Login() {
  return (
    <>
      <Input
        type="text"
        value=""
        name="email"
        onChange={ (e) => console.log(e.target.value) }
        dataid="email-input"
      />
      <Input
        type="password"
        label="senha"
        value=""
        onChange={ (e) => console.log(e.target.value) }
        dataid="password-input"
      />
      <Button
        onClick={ () => console.log('Clicou!!') }
        dataid="login-submit-btn"
      >
        ENTRAR
      </Button>
      {/* <input
        type="text"
        value=""
        name="email"
        onChange={ (e) => console.log(e.target.value) }
        data-testid="email-input"
      /> */}
    </>
  );
}

export default Login;
