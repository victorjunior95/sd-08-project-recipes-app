import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouterAndRedux from './renderWithRouterAndRedux';

describe('Teste tela de login', () => {
  it('renderiza a pagina inicial de login', () => {
    renderWithRouterAndRedux(<App />);

    const trybeTitle = screen.getByText(/trybe!/i);
    expect(trybeTitle).toBeInTheDocument();

    const inputEmail = screen.getByTestId('email-input');
    expect(inputEmail).toBeInTheDocument();

    const inputPassword = screen.getByTestId('password-input');
    expect(inputPassword).toBeInTheDocument();
  });

  it('testa o botão se está habilitado ou não', () => {
    renderWithRouterAndRedux(<App />);

    const inputEmail = screen.getByTestId('email-input');
    const inputPassword = screen.getByTestId('password-input');
    const buttonJoin = screen.getByTestId('login-submit-btn');

    userEvent.type(inputEmail, 'email@email.com');
    userEvent.type(inputPassword, '1234');

    expect(buttonJoin).toBeDisabled();

    // userEvent.type(inputEmail, 'email@email.com');
    // userEvent.type(inputPassword, '12345678');

    // expect(buttonJoin.disabled).toEqual(false);
  });
});
