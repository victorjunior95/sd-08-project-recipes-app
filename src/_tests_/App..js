import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouterAndRedux from './renderWithRouterAndRedux';

const meals = require('../../cypress/mocks/meals');
const mealCategories = require('../../cypress/mocks/mealCategories');

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
    userEvent.type(inputPassword, '123');

    expect(buttonJoin).toBeDisabled();

    userEvent.type(inputEmail, 'email@email.com');
    userEvent.type(inputPassword, '123456');

    expect(buttonJoin).not.toBeDisabled();
  });

  it('verifica se a pagina de login está redirecionando para pagina de comidas depois de efetuar o login', () => {
    const { history } = renderWithRouterAndRedux(<App />);

    const inputEmail = screen.getByTestId('email-input');
    const inputPassword = screen.getByTestId('password-input');
    const buttonJoin = screen.getByTestId('login-submit-btn');

    userEvent.type(inputEmail, 'email@email.com');
    userEvent.type(inputPassword, '123456');
    userEvent.click(buttonJoin);

    const { pathname } = history.location;
    expect(pathname).toBe('/comidas');

    const titleFood = screen.getByText('Corba');
    expect(titleFood).toBeInTheDocument();
  });
});
