import React from 'react';
import { screen, fireEvent, waitForElement } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import ExplorarComidas from '../pages/ExplorarComidas';
import * as api from '../services/RequisicaoApi';
import {apiReturn} from '../context/Provider';
console.log(apiReturn);

// const [teste, setTeste] = React.useState();

jest.mock('../services/RequisicaoApi');

const mockedRandomFood = [{
  meals: [{
    idMeal: '12345',
  }],
}];

// const fetchRandomRecipe = jest.fn().mockImplementation(() => Promise.resolve(mockedRandomFood))

// const teste = api.fetchRandomRecipe.mockImplementation(() => mockedRandomFood);
// console.log(teste);

describe('Page ExplorarComidas', () => {
  it('has an "explore by ingredients" button', () => {
    renderWithRouter(<ExplorarComidas />);

    const exploreByIngredientsButton = screen.getByTestId('explore-by-ingredient');
    expect(exploreByIngredientsButton).toBeInTheDocument();
  });

  it('has an "explore by area" button', () => {
    renderWithRouter(<ExplorarComidas />);

    const exploreByAreaButton = screen.getByTestId('explore-by-area');
    expect(exploreByAreaButton).toBeInTheDocument();
  });

  it('has a "surprise" button', () => {
    renderWithRouter(<ExplorarComidas />);

    const exploreSurpriseButton = screen.getByTestId('explore-surprise');
    expect(exploreSurpriseButton).toBeInTheDocument();
  });

  it('redirects to "explore foods by ingredients" page', () => {
    const { history } = renderWithRouter(<ExplorarComidas />);

    const exploreByIngredientsButton = screen.getByTestId('explore-by-ingredient');
    fireEvent.click(exploreByIngredientsButton);

    const { pathname } = history.location;
    expect(pathname).toBe('/explorar/comidas/ingredientes');
  });

  it('redirects to "explore foods by area" page', () => {
    const { history } = renderWithRouter(<ExplorarComidas />);

    const exploreByAreaButton = screen.getByTestId('explore-by-area');
    fireEvent.click(exploreByAreaButton);

    const { pathname } = history.location;
    expect(pathname).toBe('/explorar/comidas/area');
  });

  it('redirects to a random "food details" page', async () => {
    const { history } = renderWithRouter(<ExplorarComidas />);
  
    const teste = api.fetchRandomRecipe.mockImplementation(() => mockedRandomFood);
    const exploreSurpriseButton = screen.getByTestId('explore-surprise');
    fireEvent.click(exploreSurpriseButton);

    await waitForElement(() => expect(api.fetchRandomRecipe).toHaveBeenCalled());

    const { pathname } = history.location;
    expect(pathname).toBe('/comidas/12345');
  });
});
