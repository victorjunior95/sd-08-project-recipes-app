import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import login from '../actions/login';

function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);

  const { mealsToken, email: user, cocktailsToken } = useSelector((state) => state.login);

  const validation = () => {
    const minPasswordSize = 6;
    const regex = /.+@[A-z]+[.]com/;
    const isValidEmail = regex.test(email);
    const isValidPassword = password.length > minPasswordSize;
    if (isValidPassword && isValidEmail) {
      return false;
    }
    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(login(email));
  };

  useEffect(() => {
    if (user !== '') {
      localStorage.setItem('mealsToken', mealsToken);
      localStorage.setItem('user', JSON.stringify({ email: user }));
      localStorage.setItem('cocktailsToken', cocktailsToken);
      setRedirect(true);
    }
  }, [user]);

  if (redirect) return <Redirect to="/comidas" />;

  return (
    <form onSubmit={ handleSubmit }>
      <label htmlFor="email">
        Email:
        <input
          data-testid="email-input"
          type="text"
          name="email"
          value={ email }
          onChange={ ({ target }) => setEmail(target.value) }
          placeholder="Email"
        />
      </label>
      <label htmlFor="password">
        Senha:
        <input
          data-testid="password-input"
          type="password"
          name="password"
          value={ password }
          onChange={ ({ target }) => setPassword(target.value) }
          placeholder="Senha"
        />
      </label>
      <button
        type="submit"
        data-testid="login-submit-btn"
        disabled={ validation() }
      >
        Entrar
      </button>
    </form>
  );
}

export default Login;
