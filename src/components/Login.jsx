import React from 'react';
import PropTypes from 'prop-types';

export default class Login extends React.Component {
  render() {
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
                placeholder="email@email.com"
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
                placeholder="1234567"
              />
            </label>
          </div>
          <button
            type="button"
            data-testid="login-submit-btn"
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
