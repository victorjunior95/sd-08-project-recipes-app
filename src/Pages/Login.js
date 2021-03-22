import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Form } from 'react-bootstrap';
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
  const quinhentos = 500;

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
    }, quinhentos);
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
        <Form>
          <Input
            type="text"
            value={ email }
            name="email"
            onChange={ (e) => setEmail(e.target.value) || debounce() }
            dataId="email-input"
          />
          <Input
            type="password"
            name="senha"
            value={ senha }
            onChange={ (e) => setSenha(e.target.value) || debounce() }
            dataId="password-input"
          />
          <Button
            onClick={ handelClick }
            dataId="login-submit-btn"
            disabled={ button }
          >
            ENTRAR
          </Button>
        </Form>
      </div>
    </>
  );
}

export default Login;
