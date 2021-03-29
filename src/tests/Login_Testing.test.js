import React from 'react';
import { screen } from '@testing-library/react';
// import App from '../App';
import userEvent from '@testing-library/user-event';
import Login from '../pages/Login';
import renderWithRouter from './renderWithRouter';

describe('login.js', () => {
  test('Teste inicial', () => {
    renderWithRouter(<Login />);
    const inThePage = screen.getByTestId('login-submit-btn');
    expect(inThePage).toBeInTheDocument();
  });

  test('Testa se  não loga sem e-mail e senha', () => {
    const { history } = renderWithRouter(<Login />);
    const loginBtn = screen.getByTestId('login-submit-btn');
    const inputEmail = screen.getByTestId('email-input');
    const inputPassword = screen.getByTestId('password-input');

    userEvent.type(inputEmail, 'piupiu@acme.com');
    userEvent.type(inputPassword, '1234567');
    userEvent.click(loginBtn);
    const { pathname } = history.location;
    expect(pathname).toBe('/comidas');
  });
});
