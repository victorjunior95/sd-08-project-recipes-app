import React from 'react';
import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import renderWithReduxandRouter from './renderWithReduxandRouter';
import App from '../App';

describe('App.js', () => {
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
});
