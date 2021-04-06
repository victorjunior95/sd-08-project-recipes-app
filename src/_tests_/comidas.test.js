import React from 'react';
import { findByTestId, findByText, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Comidas from '../Pages/Comidas';
import renderWithRouterAndRedux from './renderWithRouterAndRedux';

const meals = require('../../cypress/mocks/meals');
const mealCategories = require('../../cypress/mocks/mealCategories');
const chickenMeals = require('../../cypress/mocks/chickenMeals');

describe('<Comidas />', () => {
  it('Verifica se a tela contem 12 cards de comidas', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: async () => meals,
    });

    renderWithRouterAndRedux(<Comidas />);

    const foodCard1 = await screen.findByTestId('0-recipe-card');
    expect(foodCard1).toBeInTheDocument();

    const foodCArd12 = await screen.findByTestId('11-recipe-card');
    expect(foodCArd12).toBeInTheDocument();
  });

  it('Verifica se a tela contem 7 botoẽs', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: async () => meals,
    });

    global.fetch = jest.fn().mockResolvedValue({
      json: async () => mealCategories,
    });

    renderWithRouterAndRedux(<Comidas />);

    const buttonCategory1 = await screen.findByTestId('Beef-category-filter');
    expect(buttonCategory1).toBeInTheDocument();

    const buttonCategory6 = await screen.findByTestId('All-category-filter');
    expect(buttonCategory6).toBeInTheDocument();
  });

  it('Verifica se o botão de categorias filtra o esperado', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: async () => meals,
    });

    global.fetch = jest.fn().mockResolvedValue({
      json: async () => mealCategories,
    });

    global.fetch = jest.fn().mockResolvedValue({
      json: async () => chickenMeals,
    });

    renderWithRouterAndRedux(<Comidas />);

    const chickenButton = await screen.findByTestId('Chicken-category-filter');
    userEvent.click(chickenButton);

    const name = await screen.findByTestId('10-recipe-card');
    console.log(name);
  });
});
