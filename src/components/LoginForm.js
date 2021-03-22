import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Context from '../context/MyContext';

function LoginForm({ props }) {
  const { setEmail, setPassword, userEmail, password } = useContext(Context);
  const validateEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(userEmail);
  const minimumLengthOfPassword = 6;
  const validatePassword = password.length > minimumLengthOfPassword;
  const isValid = validateEmail && validatePassword;
  const emailInput = { email: userEmail };

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleChangePassword(e) {
    setPassword(e.target.value);
  }

  function handleClick() {
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
    localStorage.setItem('user', JSON.stringify(emailInput));
    props.history.push('/comidas');
  }

  return (
    <>
      <label htmlFor="email">
        Email:
        <input
          name="email"
          type="email"
          data-testid="email-input"
          onChange={ handleChangeEmail }
        />
      </label>
      <label htmlFor="password">
        Password:
        <input
          name="password"
          type="password"
          data-testid="password-input"
          onChange={ handleChangePassword }
        />
      </label>
      <button
        type="button"
        data-testid="login-submit-btn"
        disabled={ !isValid }
        onClick={ handleClick }
      >
        Entrar
      </button>
    </>
  );
}

export default LoginForm;

LoginForm.propTypes = {
  props: PropTypes.objectOf(
    PropTypes.any,
  ).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  })
  .isRequired,
};
