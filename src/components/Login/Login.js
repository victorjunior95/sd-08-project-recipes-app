import React, { useContext, useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { Redirect } from 'react-router-dom';
import Context from '../../contextApi/Context';

function Login() {
  const {
    setEmail,
    email,
    setPassword,
    password,
    saveToLocalStorage,
  } = useContext(Context);

  const [disableds, setDisabled] = useState(true);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    const validations = () => {
      const PASSWRDLENGTH = 6;
      const re = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;
      if (
        password
        && password.length > PASSWRDLENGTH
        && email
        && re.test(email) === true
      ) {
        setDisabled(false);
      }
    };
    validations();
  }, [email, password]);

  const submit = () => {
    saveToLocalStorage();
    localStorage.setItem('mealsToken', JSON.stringify(1));
    localStorage.setItem('cocktailsToken', JSON.stringify(1));
    setRedirect(true);
  };
  console.log(email);
  return (
    <div>
      {redirect && <Redirect to="/comidas" />}
      <label htmlFor="email">
        Email:
        <input
          type="email"
          data-testid="email-input"
          name="email"
          onChange={ (e) => setEmail(e.target.value) }
        />
      </label>
      <label htmlFor="password">
        Senha:
        <input
          type="password"
          data-testid="password-input"
          name="password"
          onChange={ (e) => setPassword(e.target.value) }
        />
      </label>
      <Button
        variant="success"
        data-testid="login-submit-btn"
        onClick={ submit }
        disabled={ disableds }
      >
        Entrar
      </Button>
    </div>
  );
}

export default Login;
