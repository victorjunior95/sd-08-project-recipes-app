import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUserAction } from '../store/actions';
import {
  setMealsTokenLocalStorage,
  setCocktailsTokenLocalStorage,
  setUserLocalStorage,
} from '../services';

const MIN_LENGTH_PASSWORD = 6;

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      redirectFoods: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    const { setLoginState } = this.props;
    const { email } = this.state;
    setLoginState(email);

    setUserLocalStorage(email);
    setMealsTokenLocalStorage();
    setCocktailsTokenLocalStorage();
    this.setState({
      redirectFoods: true,
    });
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  validatorPassword(password) {
    return password.length > MIN_LENGTH_PASSWORD;
  }

  validatorEmail(email) {
    return !!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
  }

  validatorDataLog() {
    const { email, password } = this.state;
    if (this.validatorEmail(email) && this.validatorPassword(password)) return false;
    return true;
  }

  render() {
    const { redirectFoods, email, password } = this.state;
    if (redirectFoods) return <Redirect to="/comidas" />;
    return (
      <div>
        <form>
          <label htmlFor="email">
            E-mail do Usuário:
            <input
              value={ email }
              type="email"
              name="email"
              data-testid="email-input"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="password">
            Senha:
            <input
              value={ password }
              type="password"
              name="password"
              data-testid="password-input"
              onChange={ this.handleChange }
            />
          </label>
          <button
            type="button"
            data-testid="login-submit-btn"
            onClick={ this.handleSubmit }
            disabled={ this.validatorDataLog() }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

LoginForm.propTypes = {
  setLoginState: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  setLoginState: (email) => dispatch(loginUserAction(email)),
});

export default connect(null, mapDispatchToProps)(LoginForm);
