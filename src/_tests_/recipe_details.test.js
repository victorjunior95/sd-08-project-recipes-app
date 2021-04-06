import React from 'react';
import { screen, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import mockFetch from '../../cypress/mocks/fetch';
import renderWithRouterAndRedux from './renderWithRouterAndRedux';
import App from '../App';

describe('<Details />', () => {
  beforeAll(() => {
    jest.spyOn(global, 'fetch').mockImplementation(mockFetch);
  });

  it('Verifica se a receita está sendo renderizada na tela', async () => {
    const { history } = renderWithRouterAndRedux(<App />, {
      initialEntries: ['/comidas/53026'],
    });

    console.log(history.location.pathname);
    const recipeTest = await screen.findByTestId('recipe-titassad');
    expect(recipeTest.innerHTML).toBe('Spicy Arrabiata Penne');
  });
});
