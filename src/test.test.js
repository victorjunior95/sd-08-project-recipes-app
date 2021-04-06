import React from 'react';
import userEvent from '@testing-library/user-event';
import { fireEvent, screen, waitForElement } from '@testing-library/react';
// import { createMemoryHistory } from 'history';
import Comidas from './pages/Comidas';
import Header from './components/Header';
import App from './App';
import { renderWithRouterAndStore } from './test.helper';

const emaiInput = 'email-input';
const emailMock = 'alguem@email.com';
const passwordInput = 'password-input';
afterEach(() => jest.clearAllMocks());
describe('Testando  o link /', () => {
  test('A rota para esta página deve ser \'/\'', () => {
    const { history } = renderWithRouterAndStore(<App />);
    expect(history.location.pathname).toBe('/');
  });

  test('Crie um local para que o usuário insira seu email e senha', () => {
    renderWithRouterAndStore(<App />, '/');
    const email = screen.getByTestId(emaiInput);
    const senha = screen.getByTestId(passwordInput);

    expect(email).toBeInTheDocument();
    expect(senha).toBeInTheDocument();
  });

  test('Realize as seguintes verificações nos campos de email, senha e botão:', () => {
    renderWithRouterAndStore(<App />);

    const button = screen.getByText(/Entrar/i);
    expect(button).toBeDisabled();

    const email = screen.getByTestId(emaiInput);
    const senha = screen.getByTestId(passwordInput);

    userEvent.type(email, 'email');
    userEvent.type(senha, '123456');
    expect(button).toBeDisabled();

    userEvent.type(email, 'email@com@');
    userEvent.type(senha, '123456');
    expect(button).toBeDisabled();

    userEvent.type(email, 'emailcom@');
    userEvent.type(senha, '123456');
    expect(button).toBeDisabled();

    userEvent.type(email, emailMock);
    userEvent.type(senha, '23456');
    expect(button).toBeDisabled();

    userEvent.type(email, 'alguem@email.');
    userEvent.type(senha, '123456');
    expect(button).toBeDisabled();

    userEvent.type(email, emailMock);
    userEvent.type(senha, '1234567');
    expect(button).toBeEnabled();
  });

  test('Salve o email no redux, com a chave email, assim que usuário logar.',
    () => {
      const { store } = renderWithRouterAndStore(<App />);
      const email = screen.getByTestId('email-input');
      const senha = screen.getByTestId('password-input');
      const button = screen.getByText(/Entrar/i);

      userEvent.type(email, emailMock);
      userEvent.type(senha, '1234576');
      fireEvent.click(button);

      expect(store.getState().user.email).toBe(emailMock);
    });

  test('A rota deve ser mudada para \'/comidas\' após o clique no botão.', () => {
    const { history } = renderWithRouterAndStore(<App />, '/');
    const email = screen.getByTestId(emaiInput);
    const senha = screen.getByTestId(passwordInput);
    const button = screen.getByText(/Entrar/i);

    userEvent.type(email, emailMock);
    userEvent.type(senha, '1234516');
    fireEvent.click(button);

    expect(history.location.pathname).toBe('/comidas');
  });
});

describe('Testando  a pagina comidas', () => {
  test('O Header deve conter a palavra Comidas', () => {
    renderWithRouterAndStore(<App />, '/');
    const email = screen.getByTestId(emaiInput);
    const senha = screen.getByTestId(passwordInput);
    const button = screen.getByText(/Entrar/i);

    userEvent.type(email, emailMock);
    userEvent.type(senha, '1234516');
    fireEvent.click(button);
  });
});
