import React, { useContext, useEffect, useState } from 'react';
import UserContext from '../../context/userContext/UserContext';

function Login() {
  const [disabled, setDisabled] = useState(true);

  const {
    values: {
      email,
      password,
    },
    functions: {
      handleEmail,
      handlePassword,
    },
  } = useContext(UserContext);

  useEffect(() => {
    const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/i;
    // Expressão Regex retirada no site "https://regexlib.com/Search.aspx?k=email&c=-1&m=-1&ps=20"
    const passwordLength = 6;

    if (emailRegex.test(email) && password.length > passwordLength) {
      setDisabled(false);
    }

    if (!emailRegex.test(email) || password.length <= passwordLength) {
      setDisabled(true);
    }
  }, [email, password.length]);

  return (
    <div>
      <label htmlFor="email-input">
        Email:
        <input
          id="email-input"
          data-testid="email-input"
          type="email"
          value={ email }
          onChange={ handleEmail }
        />
      </label>
      <label htmlFor="password-input">
        Senha:
        <input
          id="password-input"
          data-testid="password-input"
          type="password"
          value={ password }
          onChange={ handlePassword }
        />
      </label>
      <button
        type="submit"
        data-testid="login-submit-btn"
        disabled={ disabled }
      >
        Entrar
      </button>
    </div>
  );
}

export default Login;
