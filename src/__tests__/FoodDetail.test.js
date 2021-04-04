import React from 'react';
import { screen } from '@testing-library/dom';
import { LocalStorageMock } from '@react-mock/localstorage';
import userEvent from '@testing-library/user-event';
import renderWithReduxandRouter from '../renderWithReduxandRouter';
import App from '../App';
import {
  user,
  ArrabiataSingleRecipe,
  fetchInitialCategoryMeal,
} from '../TestsMocks/mockMealrecipes';
import {
  fetchInitialCategoryDrink,
  dryMartiniSingleRecipe,
} from '../TestsMocks/mockDrinkRecipes';

const ENTRIES_MEAL = '/comidas/52771';
const ENTRIES_DRINK = '/bebidas/11005';

describe('FoodDetail.js', () => {
  test('if the FoodDetail page render with Meal', () => {
    const recipes = {
      recipes: [],
      singleRecipe: ArrabiataSingleRecipe,
      categories: fetchInitialCategoryMeal,
    };
    const INITIAL_ENTRIES = {
      initialEntries: [ENTRIES_MEAL],
      initialState: {
        user,
        recipes,
      },
    };

    renderWithReduxandRouter(
      <LocalStorageMock items={ {} }>
        <App />
      </LocalStorageMock>, INITIAL_ENTRIES,
    );

    const recipeTitle = screen.getByTestId('recipe-title');
    expect(recipeTitle).toBeInTheDocument();
    expect(recipeTitle).toHaveTextContent('Spicy Arrabiata Penne');

    const recipeImg = screen.getByAltText('img');
    expect(recipeImg).toBeInTheDocument();

    const instructions = screen.getByTestId('instructions');
    expect(instructions).toBeInTheDocument();
  });

  test('if the start recipe btn redirect page', () => {
    const recipes = {
      recipes: [],
      singleRecipe: ArrabiataSingleRecipe,
      categories: fetchInitialCategoryMeal,
    };
    const INITIAL_ENTRIES = {
      initialEntries: [ENTRIES_MEAL],
      initialState: {
        user,
        recipes,
      },
    };

    const { history } = renderWithReduxandRouter(
      <LocalStorageMock items={ {} }>
        <App />
      </LocalStorageMock>, INITIAL_ENTRIES,
    );

    const startRecipeBtn = screen.getByTestId('start-recipe-btn');
    userEvent.click(startRecipeBtn);

    expect(history.location.pathname).toBe('/comidas/52771/in-progress');
  });

  test('if will fetch as no single recipe is set in /comidas', () => {
    const recipes = {
      recipes: [],
      singleRecipe: [],
      categories: fetchInitialCategoryMeal,
    };
    const INITIAL_ENTRIES = {
      initialEntries: [ENTRIES_MEAL],
      initialState: {
        user,
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

  test('if the FoodDetail page render with Drink', () => {
    const recipes = {
      recipes: [],
      singleRecipe: dryMartiniSingleRecipe,
      categories: fetchInitialCategoryMeal,
    };
    const INITIAL_ENTRIES = {
      initialEntries: [ENTRIES_DRINK],
      initialState: {
        user,
        recipes,
      },
    };

    renderWithReduxandRouter(
      <LocalStorageMock items={ {} }>
        <App />
      </LocalStorageMock>, INITIAL_ENTRIES,
    );

    const recipeTitle = screen.getByTestId('recipe-title');
    expect(recipeTitle).toBeInTheDocument();
    expect(recipeTitle).toHaveTextContent('Dry Martini');

    const recipeImg = screen.getByAltText('img');
    expect(recipeImg).toBeInTheDocument();

    const instructions = screen.getByTestId('instructions');
    expect(instructions).toBeInTheDocument();
  });

  test('if will fetch as no single recipe is set in /bebidas', () => {
    const recipes = {
      recipes: [],
      singleRecipe: [],
      categories: fetchInitialCategoryDrink,
    };
    const INITIAL_ENTRIES = {
      initialEntries: [ENTRIES_DRINK],
      initialState: {
        user,
        recipes,
      },
    };

    const { history } = renderWithReduxandRouter(
      <LocalStorageMock items={ {} }>
        <App />
      </LocalStorageMock>, INITIAL_ENTRIES,
    );

    expect(history.location.pathname).toBe('/bebidas/11005');
  });
});
