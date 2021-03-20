import React from 'react';
import userEvent from '@testing-library/user-event';
import { fireEvent, screen } from '@testing-library/react';
import App from '../App';

import { renderWithRouterAndStore } from './testConfig';

const mealsTokenMock = { mealsToken: '1' };
const cocktailsTokenMock = { cocktailsToken: '1' };
const userEmailMock = { user: { email: 'email@email.com' } }

afterEach(() => {
  window.localStorage.removeItem('mealsToken');
  window.localStorage.removeItem('cocktailsToken');
});
afterEach(() => jest.clearAllMocks());

describe('Página inicial de login', () => {
  test('A rota para esta página deve ser \'/\'', () => {
    const { history } = renderWithRouterAndStore(<App />);
    expect(history.location.pathname).toBe('/');
  });

  test('Local para inserir E-mail, senha e botão entrar', () => {
    renderWithRouterAndStore(<App />);
    const email = screen.getByTestId('email-input');
    const password = screen.getByTestId('password-input');
    const submit = screen.getByTestId('login-submit-btn');

    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
    expect(submit).toBeInTheDocument();
  });

  test('Verifica campos e-mail, senha e botão entrar', () => {
    renderWithRouterAndStore(<App />);
    const submit = screen.getByTestId('login-submit-btn');
    expect(submit).toBeDisabled();

    const email = screen.getByTestId('email-input');
    const password = screen.getByTestId('password-input');

    userEvent.type(email, 'email');
    userEvent.type(password, '123456');
    expect(submit).toBeDisabled();

    userEvent.type(email, 'email@mail.com');
    userEvent.type(password, '123456');
    expect(submit).toBeEnabled();

    userEvent.type(email, 'email@email');
    userEvent.type(password, '123456');
    expect(submit).toBeDisabled();

    userEvent.type(email, 'email@email.com');
    userEvent.type(password, '12345');
    expect(submit).toBeDisabled();

    userEvent.type(email, 'email@email.');
    userEvent.type(password, '123456');
    expect(submit).toBeDisabled();

    userEvent.type(email, 'email.email@com');
    userEvent.type(password, '123456')
    expect(submit).toBeDisabled();

    userEvent.type(email, 'email@email@');
    userEvent.type(password, '123456');
    expect(submit).toBeDisabled();
  });

  test('Salve 2 tokens e email da pessoa usuário no localStorage após a submissão, identificados pelas chaves mealsToken, cocktailsToken e email na chave user após a submissão', () => {
    renderWithRouterAndStore(<App />);
    const email = screen.getByTestId('email-input');
    const password = screen.getByTestId('password-input');
    const submit = screen.getByTestId('login-submit-btn');

    userEvent.type(email, 'email@email.com');
    userEvent.type(password, '123456');
    fireEvent.click(submit);

    expect(window.localStorage.getItem('cocktailsToken')).toEqual(cocktailsTokenMock.cocktailsToken);
    expect(window.localStorage.getItem('mealsToken')).toEqual(mealsTokenMock.mealsToken);
    expect(window.localStorage.getItem('user: email')).toEqual(userEmailMock.user.email);
  });

  test('Redirecione a pessoa usuária para \'/comidas\' a tela principal de receitas de comidas após a submissão e validação com sucesso do login', () => {
    const { history } = renderWithRouterAndStore(<App />);
    const email = screen.getByTestId('email-input');
    const password = screen.getByTestId('password-input');
    const submit = screen.getByTestId('login-submit-btn');

    userEvent.type(email, 'email@email.com');
    userEvent.type(password, '123456');
    fireEvent.click(submit);

    expect(history.location.pathname).toBe('/comidas');
  });
});
