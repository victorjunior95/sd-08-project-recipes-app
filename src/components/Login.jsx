import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const userEmail = useSelector((state) => state.user.email);
  // const userPassword = useSelector((state) => state.user.password);

  const dispatch = useDispatch();

  const handleClick = () => {
    const user = { email, password };
    dispatch({ type: 'LOGIN_USER', payload: user });
  };

  return (
    <div>
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
        >
          Entrar
        </button>
      </form>
    </div>
  );
}
