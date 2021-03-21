import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Context from '../context/Context';

function Login() {
  const numberLength = 5;
  const [disabled, setDisabled] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const { setUser } = useContext(Context);

  function validEmail(typedEmail) {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(typedEmail);
  }

  function validateBoth() {
    setDisabled(true);
    if (password.length > numberLength && validEmail(email)) {
      setDisabled(false);
    }
  }

  function handleChange(e) {
    validateBoth();
    const testid = e.target.getAttribute('data-testid');
    if (testid === 'email-input') {
      setEmail(e.target.value);
    } else if (testid === 'password-input') {
      setPassword(e.target.value);
    }
  }

  return (
    <form>
      <label htmlFor="email-input">
        E-mail
        <input
          type="text"
          data-testid="email-input"
          name="email-input"
          onChange={ handleChange }
        />
      </label>
      <label htmlFor="password-input">
        Senha
        <input
          type="password"
          data-testid="password-input"
          name="password-input"
          onChange={ handleChange }
        />
      </label>
      <button
        type="button"
        data-testid="login-submit-btn"
        disabled={ disabled }
        onClick={ () => {
          setUser({ email });
          history.push('/comidas');
        } }
      >
        Entrar
      </button>
    </form>
  );
}

export default Login;
