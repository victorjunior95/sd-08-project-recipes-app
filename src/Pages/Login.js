import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Input, Button } from '../Components';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import rockGlass from '../images/rockGlass.svg';

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [button, setButton] = useState(true);
  const [redirect, setRedirect] = useState(false);

  let timer = null;
  const quientos = 500;

  const debounce = () => {
    // limpamos o timer
    clearTimeout(timer);
    // armazenamos o timer novamente
    timer = setTimeout(() => {
      const six = 6;
      if (email.match(/\S+@\S+\.\S+/) && senha.length >= six) {
        setButton(false);
      } else {
        setButton(true);
      }
    }, quientos);
  };

  const handelClick = () => {
    localStorage.setItem('user', JSON.stringify({ email }));
    localStorage.setItem('mealsToken', '1');
    localStorage.setItem('cocktailsToken', '1');
    setRedirect(true);
  };

  return (
    <>
      {redirect && <Redirect to="/comidas" />}
      <div className="meals">
        <span className="logo">TRYBE!</span>
        <object
          className="rocksGlass"
          type="image/svg+xml"
          data={ rockGlass }
        >
          Glass
        </object>
        <Input
          type="text"
          value={ email }
          name="email"
          onChange={ (e) => setEmail(e.target.value) || debounce() }
          dataid="email-input"
        />
        <br />
        <Input
          type="password"
          name="senha"
          value={ senha }
          onChange={ (e) => setSenha(e.target.value) || debounce() }
          dataid="password-input"
        />
        <br />
        <Button
          onClick={ handelClick }
          dataid="login-submit-btn"
          disabled={ button }
        >
          ENTRAR
        </Button>
      </div>
    </>
  );
}

export default Login;
