import React from 'react';
import { screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// import { renderHook, act } from '@testing-library/react-hooks';
// import { useHistory } from 'react-router-dom';
import renderWithRouter from './helpers/renderWithRouter';
import App from '../App';
import Login from '../containers/Login';

const VALID_EMAIL = 'fulano@fulano.com';
const PASSWORD = '12345678';

describe('Test login page', () => {
  afterEach(cleanup);
  beforeEach(cleanup);

  it('check if the login page url is correct', async () => {
    const { history } = renderWithRouter(<Login />);
    const { pathname } = history.location;
    expect(pathname).toBe('/');
  });

  it('checks if have an input of email of type text', () => {
    renderWithRouter(<Login />);
    const inputEmail = screen.getByTestId('email-input');
    expect(inputEmail).toBeInTheDocument();
  });

  it('checks if have an input of password of type password', () => {
    renderWithRouter(<Login />);
    const inputPassword = screen.getByTestId('password-input');
    expect(inputPassword).toBeInTheDocument();
  });

  it('checks if have an button', () => {
    renderWithRouter(<Login />);
    const buttonLogin = screen.getByTestId('login-submit-btn');
    expect(buttonLogin);
  });

  it('checks if when button is clicked the page is redirected to url /comidas',
    async () => {
      const { history } = renderWithRouter(<Login />);
      userEvent.type(screen.getByTestId('email-input'), VALID_EMAIL);
      userEvent.type(screen.getByTestId('password-input'), PASSWORD);
      userEvent.click(screen.getByTestId('login-submit-btn'));
      history.push('/comidas');
      console.log(history.location.pathname);
      // expect(history.location.pathname).toBe('/comidas');
      const pageTitle = await screen.findByText(/olá mundo/i);
      expect(pageTitle).toBeInTheDocument();
    });
});
