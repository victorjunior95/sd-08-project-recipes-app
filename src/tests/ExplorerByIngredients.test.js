import React from 'react';
import renderWithRouter from './helpers/renderWithRouter';
import { fireEvent, wait } from '@testing-library/react';
import ExplorerByIngridients from '../pages/ExplorerByIngridients/ExplorerByIngridients';

const mealIngredientsMock = require('../../cypress/mocks/mealIngredients');
const mealsByIngredientMock = require('../../cypress/mocks/mealsByIngredient');
const drinkIngredientsMock = require('../../cypress/mocks/drinkIngredients');
const drinksByIngredientMock = require('../../cypress/mocks/drinksByIngredient');

describe('1 - Verifica elementos da tela de explorar ingredientes respeitando os atributos descritos no protótipo', () => {

  test('Verifica se Tem os data-testids corretos para a tela de explorar comidas por ingredientes', async() => {
    const { findByTestId, queryByTestId  } = renderWithRouter(<ExplorerByIngridients title="Explorar Ingredientes de Comidas" visible={ false } />);

    for (let index = 0; index < 12; index += 1) {

      expect(await findByTestId(`${index}-ingredient-card`)).toBeInTheDocument();
      expect(await findByTestId(`${index}-card-img`)).toBeInTheDocument();
      expect(await findByTestId(`${index}-card-name`)).toBeInTheDocument();
    }

    await wait(() => expect( queryByTestId(`12-ingredient-card`)).toBeNull());
    await wait(() => expect( queryByTestId(`12-card-img`)).toBeNull());
    await wait(() => expect( queryByTestId(`12-card-name`)).toBeNull());

  });

  test('Verifica se Tem os data-testids corretos para a tela de explorar bebidas por ingredientes', async() => {
    const { findByTestId, queryByTestId  } = renderWithRouter(<ExplorerByIngridients title="Explorar Ingredientes de Bebidas" visible={ false } />);

    for (let index = 0; index < 12; index += 1) {

      expect(await findByTestId(`${index}-ingredient-card`)).toBeInTheDocument();
      expect(await findByTestId(`${index}-card-img`)).toBeInTheDocument();
      expect(await findByTestId(`${index}-card-name`)).toBeInTheDocument();
    }

    await wait(() => expect( queryByTestId(`12-ingredient-card`)).toBeNull());
    await wait(() => expect( queryByTestId(`12-card-img`)).toBeNull());
    await wait(() => expect( queryByTestId(`12-card-name`)).toBeNull());

  });
});

describe.skip('2 - Desenvolva cards para os 12 primeiros ingredientes, de forma que cada card contenha o nome do ingrediente e uma foto', () => {
  test('Tem o nome e a foto corretos para a tela de explorar comidas por ingredientes', async () => {
    const { findByTestId  } = renderWithRouter(<ExplorerByIngridients title="Explorar Ingredientes de Bebidas" visible={ false } />);

    mealIngredientsMock.meals.slice(0, 12).forEach( async ({ strIngredient: ingredient }, index) => {
      expect(await findByTestId(`${index}-card-img`)).toHaveAttribute('src', `https://www.themealdb.com/images/ingredients/${ingredient}-Small.png`);
    });
  });

  test('Tem o nome e a foto corretos para a tela de explorar bebidas por ingredientes', async () => {
    const { findByTestId  } = renderWithRouter(<ExplorerByIngridients title="Explorar Ingredientes de Bebidas" visible={ false } />);

    drinkIngredientsMock.drinks.slice(0, 12).forEach( async ({ strIngredient: ingredient }, index) => {
      expect(await findByTestId(`${index}-card-img`)).toHaveAttribute('src', `https://www.thecocktaildb.com/images/ingredients/${ingredient}-Small.png`);
    });
  });
});

describe('3 -  Redireciona a pessoa usuária ao clicar no card do ingrediente, a rota deve mudar para tela principal de receitas mas mostrando apenas as receitas que contém o ingrediente escolhido', () => {
  it('Ao clicar no card do ingrediente da tela de explorar comidas por ingrediente a rota muda para a tela principal de receitas filtrada pelo ingrediente', async () => {
    const { findByTestId, history  } = renderWithRouter(<ExplorerByIngridients title="Explorar Ingredientes de Comidas" visible={ false } />);

    const ingredientCard = await findByTestId(`0-ingredient-card`)

    fireEvent.click(ingredientCard)

    const { pathname } = history.location;
    expect(pathname).toBe('/comidas');

    mealsByIngredientMock.meals.slice(0, 12).forEach( async (meal, index) => {

      expect(await findByTestId(`${index}-recipe-card`)).toBeInTheDocument();

      expect(await findByTestId(`${index}-card-img`)).toHaveAttribute('src', meal['strMealThumb']);

      expect(await findByTestId(`${index}-card-name`)).toHaveTextContent(meal['strMeal']);
    });
  });

  it('Ao clicar no card do ingrediente da tela de explorar comidas por ingrediente a rota muda para a tela principal de receitas filtrada pelo ingrediente', async () => {
    const { findByTestId, history  } = renderWithRouter(<ExplorerByIngridients title="Explorar Ingredientes de Bebidas" visible={ false } />);

    const ingredientCard = await findByTestId(`0-ingredient-card`)

    fireEvent.click(ingredientCard)

    const { pathname } = history.location;
    expect(pathname).toBe('/bebidas');

    drinksByIngredientMock.drinks.slice(0, 12).forEach( async (drink, index) => {

      expect(await findByTestId(`${index}-recipe-card`)).toBeInTheDocument();

      expect(await findByTestId(`${index}-card-img`)).toHaveAttribute('src', drink['strMealThumb']);

      expect(await findByTestId(`${index}-card-name`)).toHaveTextContent(drink['strMeal']);
    });
  });
});
