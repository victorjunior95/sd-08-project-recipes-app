import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [verification, setVerification] = useState(false);
  const [redirect, setRedirect] = useState(false);

  const dispatch = useDispatch();

  const handleClick = () => {
    const user = { email, password };
    dispatch({ type: 'LOGIN_USER', payload: user });
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
    const userEmail = { email };
    localStorage.setItem('user', JSON.stringify(userEmail));
    setRedirect(true);
  };

  useEffect(() => {
    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/i;
    const PASSWORD_LENGTH = 6;

    if (regexEmail.test(email) && password.length > PASSWORD_LENGTH) {
      setVerification(true);
    }
    if (!regexEmail.test(email) || password.length <= PASSWORD_LENGTH) {
      setVerification(false);
    }
  }, [email, password.length]);

  return (
    <div>
      {redirect && <Redirect to="/comidas" />}
      <form>
        <div>
          <label htmlFor="email-login" className="form-label">
            Email address
            <input
              id="email-login"
              type="email"
              name="email"
              data-testid="email-input"
              value={ email }
              onChange={ ({ target }) => setEmail(target.value) }
            />
          </label>
        </div>
        <div>
          <label htmlFor="password-login" className="form-label">
            Password
            <input
              id="password-login"
              type="password"
              name="password"
              data-testid="password-input"
              value={ password }
              onChange={ ({ target }) => setPassword(target.value) }
            />
          </label>
        </div>
        <button
          type="button"
          data-testid="login-submit-btn"
          onClick={ handleClick }
          disabled={ !verification }
        >
          Entrar
        </button>
      </form>
    </div>
  );
}
