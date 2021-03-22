import React from 'react';
import { screen } from '@testing-library/dom';
// import userEvent from '@testing-library/user-event';
import renderWithReduxandRouter from './renderWithReduxandRouter';
import App from '../App';

const INITIAL_ENTRIES = {
  initialEntries: ['/perfil'],
  initialState: {
    user: {
      email: 'email@mail.com',
      password: '1234567',
    },
  },
};

describe('ProfilePage.js', () => {
  test('if the Profile page render', () => {
    renderWithReduxandRouter(<App />, INITIAL_ENTRIES);

    const ALL_BTN_LENGTH = 4;

    const profileIcon = screen.getByTestId('profile-top-btn');
    const heading = screen.getByRole('heading', { level: 1, name: /comidas/i });
    const searchBtn = screen.getByTestId('search-top-btn');
    const allBtns = screen.getAllByRole('button');

    expect(profileIcon).toBeInTheDocument();
    expect(heading).toBeInTheDocument();
    expect(searchBtn).toBeInTheDocument();
    expect(allBtns.length).toBe(ALL_BTN_LENGTH);
  });
});
