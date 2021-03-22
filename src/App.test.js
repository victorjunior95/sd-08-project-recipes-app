import React from 'react';
import renderWithRouter from './renderWithRouter';
import App from './App';
import Foods from './pages/Foods';
import userEvent from '@testing-library/user-event';
import { findByTestId, getAllByRole } from '@testing-library/dom';

describe('Testa a tela de Login', () => {
  it('verifica existencia dos inputs e do botão', () => {
    const { getByTestId } = renderWithRouter(<App />);
    const emailInput = getByTestId('email-input');
    const passwordInput = getByTestId('password-input');
    const loginButton = getByTestId('login-submit-btn');
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
  });

  it('verifica se o login executa corretamente', () => {
    const { getByTestId, history } = renderWithRouter(<App />);
    const userEmail = 'teste@teste.com';
    const userPassword = '123456789';
    const emailInput = getByTestId('email-input');
    const passwordInput = getByTestId('password-input');
    const loginButton = getByTestId('login-submit-btn');
    userEvent.type(emailInput, userEmail);
    userEvent.type(passwordInput, userPassword);
    userEvent.click(loginButton);
    const pathname = history.location.pathname;
    expect(pathname).toBe('/comidas');
  });
})
