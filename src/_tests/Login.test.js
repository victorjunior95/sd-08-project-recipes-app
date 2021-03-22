import React from 'react';
import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import renderWithReduxandRouter from './renderWithReduxandRouter';
import App from '../App';

let localStorageMock = {};

beforeAll(() => {
  global.Storage.prototype.setItem = jest.fn((key, value) => {
    localStorageMock[key] = value;
  });
  global.Storage.prototype.getItem = jest.fn((key) => localStorageMock[key]);
});

beforeEach(() => {
  localStorageMock = {};
});

afterAll(() => {
  global.Storage.prototype.setItem.mockReset();
  global.Storage.prototype.getItem.mockReset();
});

const EMAIL_INPUT = 'email@mail.com';

describe('LoginPage.js', () => {
  test('if all the Routes are working', () => {
    const { history } = renderWithReduxandRouter(<App />);

    expect(history.location.pathname).toBe('/');
  });

  test('if initial render is the LoginPage', () => {
    renderWithReduxandRouter(<App />);

    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const buttonEnter = screen.getByRole('button', { name: /entrar/i });

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(buttonEnter).toBeInTheDocument();
  });

  test('if Login receive correct inputs from user', () => {
    renderWithReduxandRouter(<App />);

    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const buttonEnter = screen.getByRole('button', { name: /entrar/i }).closest('button');

    expect(buttonEnter).toBeDisabled();

    userEvent.type(emailInput, EMAIL_INPUT);
    userEvent.type(passwordInput, '1234567');

    expect(emailInput).toHaveValue(EMAIL_INPUT);
    expect(passwordInput).toHaveValue('1234567');
    expect(buttonEnter).not.toBeDisabled();
  });

  test('if localStorage is set as the enter button is clicked', () => {
    const { history } = renderWithReduxandRouter(<App />);

    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const buttonEnter = screen.getByRole('button', { name: /entrar/i }).closest('button');

    userEvent.type(emailInput, EMAIL_INPUT);
    userEvent.type(passwordInput, '1234567');
    userEvent.click(buttonEnter);

    const { pathname } = history.location;
    expect(pathname).toBe('/comidas');

    const userToken = JSON.stringify({ email: EMAIL_INPUT });

    expect(localStorageMock.mealsToken).toEqual(1);
    expect(localStorageMock.cocktailsToken).toEqual(1);
    expect(localStorageMock.user).toEqual(userToken);
  });
});
