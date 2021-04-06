import React from 'react';
import renderWithRouter from './helpers/renderWithRouter';
import DoneRecipes from '../containers/DoneRecipes';
import App from '../App';

describe('The elements of the made recipes done', () => {
  it('Mostra a tela de Receitas Feitas se a rota é `/receitas-feitas`', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/receitas-feitas');
    expect(history.location.pathname).toBe('/receitas-feitas');
  });
  it('existe um cabeçalho no componente', () => {
    const { getByTestId } = renderWithRouter(<DoneRecipes />);
    const headerContainer = getByTestId('header-container');
    expect(headerContainer).toBeInTheDocument();
  });
  it('existe um botão de perfil no cabeçalho', () => {
    const { getByTestId } = renderWithRouter(<DoneRecipes />);
    const profileButton = getByTestId('profile-top-btn');
    expect(profileButton).toBeInTheDocument();
  });
  it('existe um título no cabeçalho', () => {
    const { getByTestId, getByRole } = renderWithRouter(<DoneRecipes />);
    const pageTitle = getByTestId('page-title');
    const recipesDone = getByRole('heading', { name: /receitas feitas/i });
    expect(pageTitle).toBeInTheDocument();
    expect(recipesDone).toBeInTheDocument();
  });
  it('existe um botão All, Food e Drinks', () => {
    const { getByRole } = renderWithRouter(<DoneRecipes />);
    const buttonAll = getByRole('button', { name: /all/i });
    const buttonFood = getByRole('button', { name: /food/i });
    const buttonDrinks = getByRole('button', { name: /food/i });
    expect(buttonAll).toBeInTheDocument();
    expect(buttonFood).toBeInTheDocument();
    expect(buttonDrinks).toBeInTheDocument();
  });
});
