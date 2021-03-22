import React, { useContext } from 'react';
import UserContext from '../../context/userContext/UserContext';

function Login() {
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
      <label htmlFor="email-input">
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
      >
        Entrar
      </button>
    </div>
  );
}

export default Login;
