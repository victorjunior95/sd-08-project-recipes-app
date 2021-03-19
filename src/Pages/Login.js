import React, { useState } from 'react';
import { Input, Button } from '../Components';

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [button, setButton] = useState(true);

  let timer = null;
  const quientos = 500;

  const debounce = () => {
    // limpamos o timer
    clearTimeout(timer);
    // armazenamos o timer novamente
    timer = setTimeout(() => {
      console.log('entrei aqui');
      const six = 6;
      if (email.match(/\S+@\S+\.\S+/) && senha.length >= six) {
        setButton(false);
      } else {
        setButton(true);
      }
    }, quientos);
  };

  return (
    <>
      <Input
        type="text"
        value={ email }
        name="email"
        onChange={ (e) => setEmail(e.target.value) || debounce() }
        dataid="email-input"
      />
      <Input
        type="password"
        name="senha"
        value={ senha }
        onChange={ (e) => setSenha(e.target.value) || debounce() }
        dataid="password-input"
      />
      <Button
        onClick={ () => console.log('Clicou!!') }
        dataid="login-submit-btn"
        disabled={ button }
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
