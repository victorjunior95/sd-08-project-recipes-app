import React from 'react';
import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import renderWithReduxandRouter from './renderWithReduxandRouter';
import App from '../App';

const INITIAL_ENTRIES = {
  initialEntries: ['/comidas'],
  initialState: {
    user: {
      email: 'email@mail.com',
      password: '1234567',
    },
  },
};

describe('MainRecipes.js', () => {
  test('if render the MainRecipes page', () => {
    renderWithReduxandRouter(<App />, INITIAL_ENTRIES);

    const profileIcon = screen.getByTestId('profile-top-btn');
    const heading = screen.getByRole('heading', { level: 1, name: /comidas/i });
    const searchBtn = screen.getByTestId('search-top-btn');

    expect(profileIcon).toBeInTheDocument();
    expect(heading).toBeInTheDocument();
    expect(searchBtn).toBeInTheDocument();
  });

  test('if the search btn is working', () => {
    renderWithReduxandRouter(<App />, INITIAL_ENTRIES);

    const RADIOS_INPUT = 3;

    const searchBtn = screen.getByTestId('search-top-btn');

    userEvent.click(searchBtn);

    const searchInput = screen.getByTestId(/search-input/i);
    const radiosInput = screen.getAllByRole('radio');
    const submitBtn = screen.getByRole('button', { name: /Pesquisar/i });
    expect(searchInput).toBeInTheDocument();
    expect(radiosInput.length).toBe(RADIOS_INPUT);
    expect(submitBtn).toBeInTheDocument();
  });
});
