import React from 'react';
import { screen } from '@testing-library/dom';
import { LocalStorageMock } from '@react-mock/localstorage';
import userEvent from '@testing-library/user-event';
import renderWithReduxandRouter from './renderWithReduxandRouter';
import App from '../App';
import { recipes, user } from './mockStates';

const INITIAL_ENTRIES = {
  initialEntries: ['/comidas'],
  initialState: {
    user,
    recipes,
  },
};

describe('MealsRecipes.js', () => {
  test('if the MealsRecipes page render', () => {
    const { history } = renderWithReduxandRouter(
      <LocalStorageMock items={ {} }>
        <App />
      </LocalStorageMock>, INITIAL_ENTRIES,
    );

    expect(history.location.pathname).toBe('/comidas');

    const profileIcon = screen.getByAltText('profile-icon');
    const title = screen.getByRole('heading', { level: 1, name: /comidas/i });
    const searchIcon = screen.getByAltText('search-icon');

    expect(profileIcon).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(searchIcon).toBeInTheDocument();

    const beefCategory = screen.getByRole('button', { name: /beef/i });
    const breakfastCategory = screen.getByRole('button', { name: /breakfast/i });
    const chickenCategory = screen.getByRole('button', { name: /chicken/i });
    const dessertCategory = screen.getByRole('button', { name: /dessert/i });
    const goatCategory = screen.getByRole('button', { name: /goat/i });
    const allCategory = screen.getByRole('button', { name: /all/i });

    expect(beefCategory).toBeInTheDocument();
    expect(breakfastCategory).toBeInTheDocument();
    expect(chickenCategory).toBeInTheDocument();
    expect(dessertCategory).toBeInTheDocument();
    expect(goatCategory).toBeInTheDocument();
    expect(allCategory).toBeInTheDocument();

    const footer = screen.getByTestId('footer');
    const drinkIcon = screen.getByAltText('drinks');
    const explorerIcon = screen.getByAltText('explorer');
    const mealsIcon = screen.getByAltText('meals');

    expect(footer).toContainElement(drinkIcon);
    expect(footer).toContainElement(explorerIcon);
    expect(footer).toContainElement(mealsIcon);
  });

  test('if it filter recipes by the search bar', () => {
    renderWithReduxandRouter(
      <LocalStorageMock items={ {} }>
        <App />
      </LocalStorageMock>, INITIAL_ENTRIES,
    );
    // incompleto
    const searchIcon = screen.getByAltText('search-icon');
    userEvent.click(searchIcon);
    expect(searchIcon).toBeInTheDocument();
  });
});
