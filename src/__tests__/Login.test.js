import React from 'react';
// import { render } from '@testing-library/react';
import renderWithRouter from '../routes/renderWithRouter';

import App from '../App';

const emailInput = 'email-input';
const passwordInput = 'password-input';
const buttonLogin = 'login-submit-btn';

describe('Testing page Login', () => {
  test('should Login Image', () => {
    const { getByRole } = renderWithRouter(<App />);
    const img = getByRole('img');
    expect(img.className).toBe('login-img-logo');
  });

  test('should Exist Text Digite seu email:', () => {
    const { getByTestId } = renderWithRouter(<App />);
    const inputEmail = getByTestId(emailInput);
    expect(inputEmail.previousSibling.textContent).toBe('Digite seu email:');
  });

  test('should Exist Input Email', () => {
    const { getByTestId } = renderWithRouter(<App />);
    const inputEmail = getByTestId(emailInput);
    expect(inputEmail).toBeInTheDocument();
  });

  test('should Exist Text Digite sua Senha:', () => {
    const { getByTestId } = renderWithRouter(<App />);
    const inputPassword = getByTestId(passwordInput);
    expect(inputPassword.previousSibling.textContent).toBe('Digite sua Senha:');
  });

  test('should Exist Input Password', () => {
    const { getByTestId } = renderWithRouter(<App />);
    const inputPassword = getByTestId(passwordInput);
    expect(inputPassword).toBeInTheDocument();
  });

  test('should Exist Button Login', () => {
    const { getByTestId } = renderWithRouter(<App />);
    const btn = getByTestId(buttonLogin);
    expect(btn).toBeInTheDocument();
  });

  test('should Text Button Login to equal Entrar', () => {
    const { getByTestId } = renderWithRouter(<App />);
    const btn = getByTestId(buttonLogin);
    expect(btn).toBeInTheDocument();
  });
});
