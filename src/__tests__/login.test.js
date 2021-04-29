import React from 'react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../services/renderWithRouter';
import Login from '../pages/Login';

describe('Login page', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'localStorage', {
      value: {
        getItem: jest.fn(),
        setItem: jest.fn(),
        clear: jest.fn(),
      },
      writable: true,
    });
  });

  const setup = async () => {
    const utils = renderWithRouter(<Login />);

    const { history } = utils;

    const inputEmail = await utils.findByTestId('email-input');
    const inputPassword = await utils.findByTestId('password-input');
    const loginSubmitBtn = await utils.findByTestId('login-submit-btn');

    return {
      inputEmail, inputPassword, loginSubmitBtn, history,
    };
  };

  it('2 - Crie todos os elementos que devem respeitar os atributos descritos no protótipo para a tela de login', async () => {
    const { inputEmail, inputPassword, loginSubmitBtn } = await setup();
    expect(inputEmail).toBeInTheDocument();
    expect(inputPassword).toBeInTheDocument();
    expect(loginSubmitBtn).toBeInTheDocument();
  });

  it('3 - Desenvolva a tela de maneira que a pessoa deve conseguir escrever seu email no input de email', async () => {
    const { inputEmail } = await setup();
    userEvent.type(inputEmail, 'email@mail.com');
    expect(inputEmail).toHaveValue('email@mail.com');
  });

  it('4 - Desenvolva a tela de maneira que a pessoa deve conseguir escrever sua senha no input de senha', async () => {
    const { inputPassword } = await setup();
    userEvent.type(inputPassword, '1234567');
    expect(inputPassword).toHaveValue('1234567');
  });

  it('5 - Desenvolva a tela de maneira que o formulário só seja válido após um email válido e uma senha de mais de 6 caracteres serem preenchidos', async () => {
    const { inputEmail, inputPassword, loginSubmitBtn } = await setup();

    expect(loginSubmitBtn).toBeDisabled();

    userEvent.type(inputEmail, 'email@mail.com');
    userEvent.type(inputPassword, '1234567');
    expect(loginSubmitBtn).not.toBeDisabled();

    userEvent.type(inputEmail, 'email@mail');
    userEvent.type(inputPassword, '1234567');
    expect(loginSubmitBtn).toBeDisabled();

    userEvent.type(inputEmail, 'emailmail.com');
    userEvent.type(inputPassword, '1234567');
    expect(loginSubmitBtn).toBeDisabled();

    userEvent.type(inputEmail, 'email@mail.com');
    userEvent.type(inputPassword, '123456');
    expect(loginSubmitBtn).toBeDisabled();
  });

  it('6 - Salve 2 tokens no localStorage após a submissão, identificados pelas chaves mealsToken e cocktailsToken', async () => {
    const { inputEmail, inputPassword, loginSubmitBtn } = await setup();

    userEvent.type(inputEmail, 'email@mail.com');
    userEvent.type(inputPassword, '1234567');
    userEvent.click(loginSubmitBtn);

    expect(localStorage.setItem).toHaveBeenCalledTimes(3);
  });
});
