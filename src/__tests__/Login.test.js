import React from 'react';
import { fireEvent } from '@testing-library/dom';
import renderWithRouter from '../routes/renderWithRouter';

import Login from '../pages/Login';

const setup = () => {
  const utils = renderWithRouter(<Login />);
  const img = utils.getByRole('img');
  const emailInput = utils.getByTestId('email-input');
  const passwordInput = utils.getByTestId('password-input');
  const buttonLogin = utils.getByTestId('login-submit-btn');
  return {
    img,
    emailInput,
    buttonLogin,
    passwordInput,
    ...utils,
  };
};

describe('Testing page Login', () => {
  test('should Login Image', () => {
    const { img } = setup();
    expect(img.className).toBe('login-img-logo');
  });

  test('should Exist Text Digite seu email:', () => {
    const { emailInput } = setup();
    expect(emailInput.previousSibling.textContent).toBe('Digite seu email:');
  });

  test('should Exist Input Email', () => {
    const { emailInput } = setup();
    expect(emailInput).toBeInTheDocument();
  });

  test('should Exist Text Digite sua Senha:', () => {
    const { passwordInput } = setup();
    expect(passwordInput.previousSibling.textContent).toBe('Digite sua Senha:');
  });

  test('should Exist Input Password', () => {
    const { passwordInput } = setup();
    expect(passwordInput).toBeInTheDocument();
  });

  test('should Exist Button Login', () => {
    const { buttonLogin } = setup();
    expect(buttonLogin).toBeInTheDocument();
  });

  test('should Text Button Login to equal Entrar', () => {
    const { buttonLogin } = setup();
    expect(buttonLogin.textContent).toBe('Entrar');
  });
});

describe('Tests functionality and routes', () => {
  test('should Button after Login to Disabled', () => {
    const { buttonLogin } = setup();
    expect(buttonLogin).toBeDisabled();
  });
  test('should type email and password Button to UnDisabled', () => {
    const { buttonLogin, emailInput, passwordInput, history } = setup();
    fireEvent.change(emailInput, { target: { value: 'rafa@rafa.com' } });
    fireEvent.change(passwordInput, { target: { value: '1234567' } });
    console.log(history.location);
    expect(buttonLogin).not.toBeDisabled();
  });

  test('should change route on Click Button Login', () => {
    const { buttonLogin, emailInput, passwordInput, history } = setup();
    fireEvent.change(emailInput, { target: { value: 'rafa@rafa.com' } });
    fireEvent.change(passwordInput, { target: { value: '1234567' } });
    fireEvent.click(buttonLogin);
    expect(history.location.pathname).toBe('/comidas');
  });
});
