import React from 'react';
import { screen } from '@testing-library/dom';
import { LocalStorageMock } from '@react-mock/localstorage';
import userEvent from '@testing-library/user-event';
import renderWithReduxandRouter from '../renderWithReduxandRouter';
import App from '../App';

import { ArrabiataSingleRecipe } from '../TestsMocks/singleMealRecipe';

const ENTRIE_EXPLORE_FOOD = '/explorar/comidas';

describe('Explore.js', () => {
  test('if the explore foodbtn redirect to the food explore page', () => {
    const recipes = {
      recipes: [],
      categories: {},
      ingredients: [],
      singleRecipe: [],
      random: false,
    };
    const INITIAL_ENTRIES = {
      initialEntries: [ENTRIE_EXPLORE_FOOD],
      initialState: {
        recipes,
      },
    };

    const { history } = renderWithReduxandRouter(
      <LocalStorageMock items={ {} }>
        <App />
      </LocalStorageMock>, INITIAL_ENTRIES,
    );

    expect(history.location.pathname).toBe(ENTRIE_EXPLORE_FOOD);

    const exploreFoodByAreaBtn = screen.getByTestId('explore-by-area');
    userEvent.click(exploreFoodByAreaBtn);

    expect(history.location.pathname).toBe('/explorar/comidas/area');
  });

  test('if the explore drinkbtn redirect to the drink explore page', () => {
    const recipes = {
      recipes: [],
      categories: {},
      ingredients: [],
      singleRecipe: [],
      random: false,
    };
    const INITIAL_ENTRIES = {
      initialEntries: ['/explorar/bebidas'],
      initialState: {
        recipes,
      },
    };

    const { history } = renderWithReduxandRouter(
      <LocalStorageMock items={ {} }>
        <App />
      </LocalStorageMock>, INITIAL_ENTRIES,
    );

    expect(history.location.pathname).toBe('/explorar/bebidas');

    const exploreDrinkBtn = screen.getByTestId('explore-by-ingredient');
    userEvent.click(exploreDrinkBtn);

    expect(history.location.pathname).toBe('/explorar/bebidas/ingredientes');
  });

  test('if the explore surpriseBtn redirect to the food detail page', () => {
    const recipes = {
      recipes: [],
      categories: {},
      ingredients: [],
      singleRecipe: ArrabiataSingleRecipe,
      random: true,
    };
    const INITIAL_ENTRIES = {
      initialEntries: [ENTRIE_EXPLORE_FOOD],
      initialState: {
        recipes,
      },
    };

    const { history } = renderWithReduxandRouter(
      <LocalStorageMock items={ {} }>
        <App />
      </LocalStorageMock>, INITIAL_ENTRIES,
    );

    expect(history.location.pathname).toBe('/comidas/52771');
  });
});
